function mostraPrecoAptoDoisDorm() {

  //evento de exibição do valor do imóvel
  let getBotaoApDoisDorm = document.querySelector('#btnAptoDoisDorm');
  
  getBotaoApDoisDorm.addEventListener('click', function mostraValor () {
    
    document.getElementById('precoAptoDoisDorm').innerText="Preço do imóvel: R$ 500.000,00";

  })

};

function mostraPrecoAptoTresDorm() {
  document.getElementById('precoAptoTresDorm').innerHTML = " Preço do imóvel: R$ 600.000,00";
};

mostraPrecoAptoDoisDorm();