/**
 * rehash-senhas.js
 *
 * Script de migração: percorre todas as entradas de `funcionario` e `adm`
 * cujas senhas ainda estejam em texto puro e as substitui por hashes bcrypt.
 *
 * Uso:
 *   node scripts/rehash-senhas.js
 *
 * Execute UMA VEZ antes de ativar o novo sistema de login.
 * Senhas já hasheadas (começam com "$2b$") são ignoradas automaticamente.
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });

const { PrismaClient } = require('../../generated/private');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

function jaEhHash(senha) {
    return typeof senha === 'string' && senha.startsWith('$2b$');
}

async function rehashTabela(nome, registros, idField, updateFn) {
    let atualizados = 0;
    let ignorados = 0;

    for (const reg of registros) {
        if (jaEhHash(reg.senha)) {
            ignorados++;
            continue;
        }

        const hash = await bcrypt.hash(reg.senha, SALT_ROUNDS);
        await updateFn(reg[idField], hash);
        atualizados++;
        console.log(`  [${nome}] id=${reg[idField]} — senha rehashada`);
    }

    console.log(`  [${nome}] ${atualizados} atualizados, ${ignorados} já hasheados (ignorados)\n`);
}

async function main() {
    console.log('=== Rehash de senhas — Table4U PrivateServer ===\n');

    const funcionarios = await prisma.funcionario.findMany();
    await rehashTabela(
        'funcionario',
        funcionarios,
        'funcionario_id',
        (id, hash) => prisma.funcionario.update({
            where: { funcionario_id: id },
            data: { senha: hash }
        })
    );

    const admins = await prisma.adm.findMany();
    await rehashTabela(
        'adm',
        admins,
        'adm_id',
        (id, hash) => prisma.adm.update({
            where: { adm_id: id },
            data: { senha: hash }
        })
    );

    console.log('Migração concluída.');
}

main()
    .catch((err) => {
        console.error('Erro durante a migração:', err);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
