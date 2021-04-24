function exibirDados(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('titulo').value;
    let pegaAutor = document.getElementById('autor').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let pegaDataPublicacao = document.getElementById('dataPublicacao').value;

    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    document.getElementById('resposta').innerHTML +=`
        <ul>
            <li> 
                <strong>Título: </strong> ${pegaTitulo}, <strong>Autor: </strong> ${pegaAutor},
                <strong>ISBN: </strong> ${pegaIsbn}, <strong>Data de Pulicação: </strong> ${pegaDataPublicacao},
                <strong>Data de Ingresso no Sistema: </strong> ${dataInsercao}, ${horarioInsercao}
                <a href="#" class="delete">Remover</a>
            </li>
        </ul>
    `

  limparDados();
    
}

function limparDados() {
    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('dataPublicacao').value = "";
}

document.getElementById('resposta').addEventListener('click', function(event){
    if (event.target.className ==="delete"){
        event.target.parentElement.remove();
    }

})

