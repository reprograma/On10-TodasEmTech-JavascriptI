const tituloDoLivro = document.querySelector('#title');
const subtituloDoLivro = document.querySelector('#subtitle');
const autorDoLivro = document.querySelector('#author');
const paginaDoLivro = document.querySelector('#pages');
const dataDePublicacao = document.querySelector('#date');
const isbnDoLivro = document.querySelector('#isbn');
const corpoTabela = document.querySelector('#texto')

const enviarLivro = document.querySelector('#enviar');

enviarLivro.addEventListener('click', (event)=>{
    event.preventDefault()
    if (tituloDoLivro.value == ""||autorDoLivro.value == ""||isbnDoLivro.value == ""||dataDePublicacao.value == ""){
        alert("preencher campo obrigatório")
    }else{
    corpoTabela.innerHTML += `
    <tr>
    <td>${tituloDoLivro.value}</td>
    <td>${subtituloDoLivro.value}</td>
    <td>${autorDoLivro.value}</td>
    <td>${paginaDoLivro.value}</td>
    <td>${dataDePublicacao.value}</td>
    <td>${isbnDoLivro.value}</td>
    <td><button class="btnExcluir">excluir</button></td>
  
</tr>
    `
    limparFormulario();
    //excluirLivro();
}
})

const limparFormulario = ()=>{
tituloDoLivro.value= ""
subtituloDoLivro.value= ""
autorDoLivro.value= ""
paginaDoLivro.value= ""
dataDePublicacao.value= ""
isbnDoLivro.value = ""
}


corpoTabela.addEventListener('click', (event)=>{
    console.log(event.target)
    if (event.target.className=="btnExcluir"){
        const botaoExcluirNovamente=event.target.parentElement
        botaoExcluirNovamente.parentElement.remove()
    

    }
    

})

