function exibirDadosTabela(event){
    event.preventDefault();

    let tituloDoLivro = document.getElementById('tituloDoLivro').value;
    let autorDoLivro = document.getElementById('autorDoLivro').value;
    let isbnDoLivro = document.getElementById('isbnDoLivro').value;
    let dataDePublicacaoDoLivro = document.getElementById('dataDePublicacaoDoLivro').value;
    let qtdPaginasDoLivro = document.getElementById('qtdPaginasDoLivro').value;
    let dataInsercaoLivro = new Date().toLocaleDateString('pt-br');
    let horarioInsercaoLivro = new Date().toLocaleTimeString('pt-br');

    if(tituloDoLivro==="" ||  autorDoLivro==="" ||  isbnDoLivro==="" || dataDePublicacaoDoLivro==="" || qtdPaginasDoLivro===""){
        alert("Os dados não foram inseridos corretamente. Tente novamente!")
    }else{
        document.getElementById("corpo-tabela").innerHTML += `
            <tr id="tr-tabela">
                <td>${tituloDoLivro}</td>
                <td>${autorDoLivro}</td>
                <td>${isbnDoLivro }</td>
                <td>${dataDePublicacaoDoLivro}</td>
                <td>${qtdPaginasDoLivro}</td>
                <td>${dataInsercaoLivro}</td>
                <td>${horarioInsercaoLivro}</td>
                <td><button id='botao-tabela' class='botao-tabela'></button></td> 
            </tr>
        `
    }
}

document.getElementById('corpo-tabela').addEventListener('click', function removerLinhaLivro(event) {
    if (event.target.className === "botao-tabela") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})