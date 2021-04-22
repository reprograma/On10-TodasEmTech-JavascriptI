document
  .querySelector("#botaodeenviar")
  .addEventListener("click", function amazenarDados(event) {
    event.preventDefault(); // Para que o comportamento padrão do submite não aconteca.
    let nome = document.getElementById("nomeDapessoa");
    let exibeResposta = document.getElementById("resposta");

    pegaNome.value === ""
      ? (exibeResposta.innerText = "Por favor, digite o seu nome")
      : (exibeResposta.innerHTML = `${pegaNome.value}, dados salvos com sucesso!`);

    /* if (nome.value === '') {  //consegue identificar valor.

        console.log(nome.value
        );
        exibeResposta.innerText = 'Por Favor, digite seu nome';
    } else {
        exibeResposta.innerHTML = (`${nomeUsuario}, dados salvos com sucesso.`);

    }


*/
  });
