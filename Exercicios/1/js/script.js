// document.querySelector('#botaoDeEnviar').addEventListener('click', function armazenarDados(event) {
    event.preventDefault();

    let pegaNome = document.getElementById('nomeDaPessoa');
    let exibeResposta = document.getElementById('resposta');

    pegaNome.value === '' ? exibeResposta.innerText= 'Por favor, digite o seu nome' : exibeResposta.innerHTML = (`${pegaNome.value}, dados salvos com sucesso!`)

    /* if (pegaNome.value === '') {
        exibeResposta.innerText= 'Por favor, digite o seu nome';
    } else {
        exibeResposta.innerHTML = (`${pegaNome.value}, dados salvos com sucesso!`);
    } */

})

//function exibirDados(event) {
    event.preventDefault();
    let pegaNome = document.getElementById('nomeDaPessoa');
    let exibeResposta = document.getElementById('resposta');
    
    if (pegaNome.value === '') {
        exibeResposta.innerText= 'Por favor, digite o seu nome';
    } else {
        exibeResposta.innerHTML = (`${pegaNome.value}, dados salvos com sucesso!`);
    }

}


