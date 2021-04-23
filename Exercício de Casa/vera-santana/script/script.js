document.querySelector('p').style.color = "red";

document.querySelector('#enviar').addEventListener('click', function checkValue(event){
    event.preventDefault();

    let titulo = document.getElementById("titulo");
    let autor = document.getElementById("autor");
    let isbn = document.getElementById("isbn");
    let dataPublicacao = document.getElementById("dataPublicacao");
    let paginas = document.getElementById("paginas");
    let aviso = document.getElementById("error-titulo");

    titulo.value === '' || autor.value === '' || isbn.value === '' || dataPublicacao.value === '' || paginas.value === '' ? aviso.innerText='Existem campos obrigatórios em branco' : aviso.innerText='Dados Salvos com sucesso'; 

    limparCampo();
});

function limparCampo() {
    document.getElementById("titulo").value = '';
    document.getElementById("autor").value = '';
    document.getElementById("isbn").value = '';
    document.getElementById("dataPublicacao").value = '';
    document.getElementById("paginas").value = '';
}

function mostraLivro() {
    event.preventDefault();
    let pegaTitulo = document.getElementById("titulo").value;
    let pegaAutor = document.getElementById("autor").value;
    let pegaIsbn = document.getElementById("isbn").value;
    let pegaDataPublicacao = document.getElementById("dataPublicacao").value;
    let pegaPaginas = document.getElementById("paginas").value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    document.getElementById("livros-salvos").innerHTML += `<div id="livro"><strong>Titulo:</strong> ${pegaTitulo} <strong>Autor:</strong> ${pegaAutor} <strong>ISBN:</strong> ${pegaIsbn} <strong>Data de Publicação:</strong> ${pegaDataPublicacao} <strong>Páginas:</strong> ${pegaPaginas} <strong>Data e hora de inserção:</strong> ${dataInsercao} ${horarioInsercao} <button class="deletar">Deletar livro</deletar></div>`
}

document.querySelector('#livros-salvos').addEventListener('click', function apagarLivro(event){
    if(event.target.className === "deletar") {
        document.getElementById("livro").remove();
    }
    
})