document.getElementById('acoesBotao').addEventListener('click', function acionarBotao(event){
    event.preventDefault();

    const mudaCorTitulo = document.querySelector('.meu-titulo').style.color = "blue";

    const mudaParagrafo = document.querySelector('#meuNome').innerHTML += " E eu tenho 26 anos."
    
    const mudaSpan = document.querySelector('span').style.textDecoration = "underline";
});