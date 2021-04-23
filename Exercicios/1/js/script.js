document.querySelector('#botaoDeEnviar').addEventListener('click', function armazenarDados(event){
    event.preventDefault();
    let nome = document.getElementById("nomeDaPessoa");
    console.log(nome.value);

    if (nome.value === '') {
        feedback.innerText = 'Por favor, digite o seu nome';
    } else {    
    feedback.innerText = `${nome.value} seus dados foram salvos com sucesso`;
    }
})