document.getElementsById('acoesBotao').addEventListener('click', function acionarBotao(){
    const mudaCorTitulo = document.querySelector('.meu-titulo').style.color ="blue";

    const mudaParagrafo = document.querySelector('#meuNome').innerHTML += " e eu tenho 32 anos";

    const mudaEstiloSpan = document.querySelector('span').style.textDecoration = "underline";
});

