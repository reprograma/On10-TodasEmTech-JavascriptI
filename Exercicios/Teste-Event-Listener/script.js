document.getElementById('acoesBotao').addEventListener('click', function acionarBotao() {
    const mudaCorTitulo = document.querySelector('.meu-titulo').style.color = "blue";

    const mudaTextoParagrafo = document.querySelector('#meuNome').innerHTML += " E eu tenho 32 anos."

    const mudaEstiloSpan = document.querySelector('span').style.textDecoration = "underline";
});