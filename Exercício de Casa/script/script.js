function exibirDados (event) {
    event.preventDefault();

    let pegaAutor = document.getElementById('autor').value;
    let pegaTítulo = document.querySelector('#titulo').value;
    let pegaISBN = document.querySelector('#isbn').value;
    let pegaPaginas = document.querySelector('#paginas').value;
    let pegaDataPublicacao = document.getElementById('dataPublicacao').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');
    
    document.getElementById('resposta').innerHTML += `
    <tr id="tabelaDeLivro">
        <td>${pegaTítulo}</td>
        <td>${pegaAutor}</td>
        <td>${pegaISBN}</td>
        <td>${pegaDataPublicacao}</td>
        <td>${pegaPaginas}</td>
        <td>${dataInsercao}, ${horarioInsercao}</td>
    </tr>
    `
    limpardados()
}

function limpardados () {
    document.getElementById('titulo').value="";
    document.getElementById('autor').value="";
    document.getElementById('isbn').value="";
    document.getElementById('dataPublicacao').value="";
    document.getElementById('paginas').value="";

}

document.querySelector("#botaoDelete").addEventListener('click', function exluirLivro (event) {
    event.preventDefault();

    document.getElementById('tabelaDeLivro').remove();
})


