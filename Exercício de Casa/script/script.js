const titulo = document.querySelector("#titulo");
const autor = document.querySelector("#autor");
const isbn = document.querySelector("#isbn");
const dataPub = document.querySelector("#dataPub");
const paginas = document.querySelector("#paginas");
const idioma = document.querySelector("#idioma");
const submit = document.querySelector("#submeterForm");
const tabela = document.querySelector("#tabela");

for (let index = 0; index < books.length; index++) {
  inserirLivo(books[index]);
}

submit.addEventListener("click", function (e) {
    e.preventDefault()

    if (titulo.value == '' || autor.value =='' || isbn.value == ''
    || dataPub.value == '' || paginas.value == '' || idioma.value == '' ) {
        alert('Preencha todos os campos.')
        return
    }

    const livro = {
        title: titulo.value,
        author: autor.value,
        isbn: isbn.value,
        published: dataPub.value,
        pages: paginas.value,
        dataInserc: Date(),
        idioma: idioma.value
    }

    inserirLivo(livro)
    alert('Item adicionado com sucesso.')
})

function inserirLivo(livro) {
  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${livro.title}</td>
    <td>${livro.author}</td>
    <td>${livro.isbn}</td>
    <td>${livro.published}</td>
    <td>${livro.pages}</td>
    <td>${livro.dataInserc || "NC"}</td>
    <td>${livro.idioma || "NC"}</td>
    <td>
        <button onclick="removerItem(this)">Remover</button>
    </td>
    `
    
  tabela.appendChild(tr);
}

function removerItem(item) {
    item.parentNode.parentNode.remove()
   
}

