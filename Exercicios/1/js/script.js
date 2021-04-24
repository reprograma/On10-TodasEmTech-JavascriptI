document.querySelector('#botaoDeEnviar').addEventListener('click', function armazenarDados(event){
    event.preventDefault();

    let nome = document.getElementById('nomeDaPessoa');

    let exibeResposta = document.getElementById('resposta');

    if (nome.value === '') {
        exibeResposta.innerText= 'Por favor, digite o seu nome.';
    } else {
        exibeResposta.innerHTML = (`${nome.value}, dados salvos com sucesso.`);


    }
})