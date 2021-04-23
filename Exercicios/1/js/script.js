document.querySelector('#botaoDeEnviar').addEventListener('click', function armazenardados(event){
   event.preventDefault();
  
   let nomeUsuario = document.getElementById('nomeDaPessoa');
   let exibeResposta = document.getElementById('resposta');
   
   if (nomeUsuario.value ==='') {
       exibeResposta.innerText= 'Por favor, digite o seu nome'
       
   } else {
        exibeResposta.innerHTML = (`${nomeUsuario.value}, dados salvos com sucesso!`);


   }

   }
)
    


