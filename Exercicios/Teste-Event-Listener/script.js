document.getElementById('acoesBotao').addEventListener('click', function acionarBotao (event){
    
    const mudaCorTitulo = document.querySelector('.meu-titulo').style.color = "blue";
    
    const mudaParagrafo = document.querySelector('#meuNome').innerHTML += "E eu sou feliz";

    const mudaSpan = document.querySelector('span').style.textDecoration = "underline";
})