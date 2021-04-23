const livros = []
function cadastrarLivro(){

    const livro = Object.fromEntries(new FormData(document.getElementById("cadastro-livro")).entries());
    livros.push(livro)
    mostrarTabela(livros);
 
}

function mostrarTabela(listaLivros){
    

    var bodyString = '';
    listaLivros.forEach((livro) => {
        //titulo, autor, isbn, dataPublicacao, pagina
        bodyString += ('<tr><td>'+livro.titulo+'</td></tr>');
    })
    //debugger

    //document.getElementById('lista-livros').innerHTML = bodyString

     var tbodyRef = document.getElementById('lista-livros').getElementsByTagName('tbody')[0];
     var newRow = tbodyRef.insertRow();
     var newCell = newRow.insertCell();
     var newText = document.createTextNode('new row');
     newCell.appendChild(newText);


    //$('.lista-livros tbody').html(bodyString);
    // $.each(listaLivros, function(index, ctry) {
    //     bodyString += ('<tr><td>'+ctry+'</td><td>'+capital[index]+'</td></tr>');
    // });
    // $('.countriesTable tbody').html(bodyString);
}