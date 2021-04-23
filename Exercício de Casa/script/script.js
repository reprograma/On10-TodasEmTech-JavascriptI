function exibirDados(event) {
    event.preventDefault();

    let pegaAutor = document.getElementById('autor').value;
    let pegaTitulo = document.querySelector('#titulo').value;
    let pegaISBN = document.querySelector('#isbn').value;
    let pegaDataPublicacao = document.getElementById('dataPublicacao').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    document.getElementById('resposta').innerHTML += '
        <ul>
            <li>
                <strong>Autor: </strong> ${pegaAutor}, <strong>Título: </strong> ${pegaTitulo},
                <strong>ISBN: </strong> ${pegaISBN}, <strong> Data de Publicação:</strong> ${pegaDataPublicacao},
                <strong>Data de Ingresso no Sistema: </strong> ${dataInsercao}, ${horarioInsercao},
            </li>
        </ul>
        '
    limparDados();

    function limparDados() : void
    function limparDados() {
        document.getElementById('author').value = "";
        document.querySelector('#titulo').value = "";
        document.querySelector('#isbn').value = "";
        document.getElementById('dataPublicacao').value ="";
    }
}