/*Const textAlterar = document.getElementById ("mudanca-texto");*/
//Quero acessar meu dom, pra isso utilizar a primeiro elemento do meu DOM document, depois chamei o getElementById.

//Para testar se esta tudo ok:

function alterarTexto() {
  const textAlterar = (document.getElementById("mudanca-texto").innerHTML =
    "Hello World");
  return textAlterar;
}
