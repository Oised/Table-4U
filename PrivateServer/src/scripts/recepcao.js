function irParaFila() {
    window.location.href = "fila.html";
}

function voltarMesas() {
    window.location.href = "recepcao.html";
}
const itens = document.querySelectorAll(".fila-item");

const nomeEl = document.getElementById("detalhe-nome");
const tempoEl = document.getElementById("detalhe-tempo");

itens.forEach(item => {
    item.addEventListener("click", () => {

        // remove seleção anterior
        document.querySelector(".fila-item.ativo")?.classList.remove("ativo");

        // ativa o clicado
        item.classList.add("ativo");

        // pega dados
        const nome = item.dataset.nome;
        const posicao = item.dataset.posicao;

        // atualiza painel
        nomeEl.textContent = `${nome} #${posicao}`;
        tempoEl.textContent = `Tempo restante: XX:XX`;

    });
});