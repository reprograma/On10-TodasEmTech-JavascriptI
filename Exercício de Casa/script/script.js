function exibirDados(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('tituloLivro').value;
    let pegaAutor = document.getElementById('nomeAutor').value;
    let pegaIsbn = document.getElementById('isbnLivro').value;
    let pegaData = document.getElementById('dataPublicacao').value;
    let pegaPaginas = document.getElementById('paginasLivro').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    if (pegaTitulo === "" || pegaAutor === "" || pegaIsbn === "" || pegaData === "" || pegaPaginas === "") {
        alert("Campo obrigatório não preenchido")
    } else {
        document.getElementById('corpoTabela').innerHTML += `
        <tr >
            <td> ${pegaTitulo}</td>
            <td> ${pegaAutor}</td>
            <td> ${pegaIsbn}</td>
            <td> ${pegaData}</td>
            <td> ${pegaPaginas}</td>
            <td> ${dataInsercao}, ${horarioInsercao}</td>
            <td> <button class="delete">Remover</button></td>
        </tr>
        `
        limparCampo();
    }

}

function limparCampo() {

    document.getElementById('tituloLivro').value = "";
    document.getElementById('nomeAutor').value = "";
    document.getElementById('isbnLivro').value = "";
    document.getElementById('dataPublicacao').value = "";
    document.getElementById('paginasLivro').value = "";

}

document.getElementById('corpoTabela').addEventListener('click', function removerLinha(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})  

