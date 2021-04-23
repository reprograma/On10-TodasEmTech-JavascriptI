function exibirDadosTabela(event){
    event.preventDefault();

    let tituloDoLivro = document.querySelector('#tituloDoLivro').value;
    let autorDoLivro = document.querySelector('#autorDoLivro').value;
    let isbnDoLivro = document.querySelector('#isbnDoLivro').value;
    let dataDePublicacaoDoLivro = document.querySelector('#dataDePublicacaoDoLivro').value;
    let qtdPaginasDoLivro = document.querySelector('#qtdPaginasDoLivro').value;
    let dataInsercaoLivro = new Date().toLocaleDateString('pt-br');
    let horarioInsercaoLivro = new Date().toLocaleTimeString('pt-br');

    if(tituloDoLivro==="" ||  autorDoLivro==="" ||  isbnDoLivro==="" || dataDePublicacaoDoLivro==="" || qtdPaginasDoLivro==="" || dataInsercaoLivro===""){
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
                <td><button id='botao-tabela' class='botao-tabela' onclick="removerLivroTabela(event)" ></button></td> 
            </tr>
        `
    };
}

function removerLivroTabela(event){
    document.getElementById("tr-tabela").remove();
}