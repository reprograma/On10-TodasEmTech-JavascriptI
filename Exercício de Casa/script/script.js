document.querySelector("#botaoAdicionar").addEventListener("click", function livrosAdicionar(event) {
    event.preventDefault();
    
    let livroTitulo = document.getElementById("livroTitulo").value
    let livroAutor = document.getElementById("livroAutor").value
    let livroISBN = document.getElementById("livroISBN").value
    let livroData = document.getElementById("livroData").value
    let livroPaginas = document.getElementById("livroPaginas").value

    let exibeResposta = document.getElementById("resposta").value

    if (livroTitulo === "" || livroAutor === "" || livroISBN === "" || livroData === "" || livroPaginas === "") {
        exibeResposta = "Por favor, preencha todos os campos."
    } else {
        exibeResposta = "Livro adicionado com sucesso."
    }

})