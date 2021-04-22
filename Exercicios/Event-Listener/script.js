/*Const textAlterar = document.getElementById ("mudanca-texto");*/
//Quero acessar meu dom, pra isso utilizar a primeiro elemento do meu DOM document, depois chamei o getElementById.

//Para testar se esta tudo ok:

document.getElementById('acoesBotao').addEventListener('click', function acionarBotao() {
    const mudaCorTitulo = document.querySelector('.meu-titulo').style.color = "blue";

    const mudaTextoParagrafo = document.querySelector('#meuNome').innerHTML += " E eu tenho 21 anos."

    const mudaEstiloSpan = document.querySelector('span').style.textDecoration = "underline";
});

