function dadosFormulario(event) {
    event.preventDefault();

    let addLivro = document.getElementById('titulo').value;
    let addAutor = document.getElementById('autor').value;
    let addIsbn = document.getElementById('isbn').value;
    let addData = document.getElementById('data').value;
    let addPaginas = document.getElementById('paginas').value
    let dataInseridoLivro = new Date().toLocaleDateString('pt-br');
    let horarioInseridoLivro = new Date().toLocaleTimeString('pt-br');


    if (addLivro === "" ||addAutor === "" || addIsbn === "" || addPaginas === "") {
    alert("Preencha as informações obrigatórias faltantes")
} else {
    document.getElementById('respostasFormulario').innerHTML += `
        <tr>
            <td>${addLivro}</td>
            <td>${addAutor}</td>
            <td>${addIsbn}</td>
            <td>${addData}</td>
            <td>${addPaginas}</td>
            <td>${dataInseridoLivro}-${horarioInseridoLivro}</td>
            <td><button class="delete"> Remover </button></td>
        </tr>
    `
    limparDados();   
    };
}

function  limparDados() {
    document.getElementById('titulo').value = "";
    document.getElementById('autor').value = "";
    document.getElementById('isbn').value = "";
    document.getElementById('data').value = "";
    document.getElementById('paginas').value = "";
}

document.getElementById('respostasFormulario').addEventListener('click', function(event) {
    if (event.target.className === "delete") {
        let botao = event.target.parentElement;
        botao.parentElement.remove();
    }
})
