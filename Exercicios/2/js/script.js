function mostraPrecoAptoDoisDorm() {
    //especificar o elemento do DOM que será manipulado. DICA: botão
    let getBotaoApDoisQuartos = document.querySelector("#btnAptoDoisDorm");

    getBotaoApDoisQuartos.addEventListener('click', function mostraValor(){
      document.getElementById('precoAptoDoisDorm').innerText="Preço do imóvel: R$ 500.000,00";
    })
  };
  
  function mostraPrecoAptoTresDorm() {
    document.getElementById('precoAptoTresDorm').innerText="Preço do imóvel: R$ 600.000,00";
  };
  
  mostraPrecoAptoDoisDorm();