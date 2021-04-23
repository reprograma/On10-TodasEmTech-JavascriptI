function mostraPrecoAptoDoisDorm() {
 
    //evento de exibição do valor do imóvel
    let getBotaApDoisDorm = document.querySelector('#btnAptoDoisDorm');

    getBotaApDoisDorm.addEventListener('click', function mostraValor(){
      document.getElementById('precoAptoDoisDorm').innerText="Preço do imóvel: R$ 500.000,00";

    }
    )

  };
  
  function mostraPrecoAptoTresDorm() {

    let getBotaApTresDorm = document.querySelector('#btnAptoTresDorm');

    getBotaApTresDorm.addEventListener('click', function mostraValor(){
      document.getElementById('precoAptoTresDorm').innerText="Preço do imóvel: R$ 600.000,00";

    }
    )



  };
  
  mostraPrecoAptoDoisDorm();
  mostraPrecoAptoTresDorm();