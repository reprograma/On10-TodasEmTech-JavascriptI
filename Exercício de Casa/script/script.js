function exibirDados(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('titulo').value;
    let pegaSubtitulo = document.getElementById('subtitulo').value;
    let pegaAutor = document.getElementById('autor').value;
    let pegaPages = document.getElementById('pages').value;
    let pegaDate = document.getElementById('date').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horaInsercao = new Date().toLocaleTimeString('pt-br');

    document.getElementById('texto').innerHTML += `
    <tr >
        <td> ${pegaTitulo} </td>
        <td> ${pegaSubtitulo} </td>
        <td> ${pegaAutor}</td>
        <td> ${pegaPages}</td>
        <td> ${pegaDate} </td>
        <td>${pegaIsbn}</td>
        <td> ${dataInsercao} - ${horaInsercao}</td>
        <td> <button class="delete">Remover</button></td>
    </tr>
    `
    limparCampo();

}

function limparCampo() {

    document.getElementById('titulo').value = "";
    document.getElementById('subtitulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('pages').value = "";
    document.getElementById('date').value = "";
    document.getElementById('isbn').value = "";

}

document.getElementById('texto').addEventListener('click', function removerLinha(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})