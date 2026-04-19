async function rodarTeste() {
  try {
    const createRes = await fetch("http://localhost:4000/test/funcionario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: "Teste Trigger",
        email: "teste_trigger@email.com",
        senha: "123",
        adm_id: 1 // TEM QUE EXISTIR
      })
    });

    const createData = await createRes.json();
    console.log("Criado:", createData);

    if (!createData.funcionario_id) {
      console.log("Erro ao criar, não vou deletar");
      return;
    }

    const id = createData.funcionario_id;

    const deleteRes = await fetch(`http://localhost:4000/test/funcionario/${id}`, {
      method: "DELETE"
    });

    const deleteData = await deleteRes.json();
    console.log("Deletado:", deleteData);

  } catch (err) {
    console.error(err);
  }
}

rodarTeste();