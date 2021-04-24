
class Validator {

    constructor() {

        this.validations = [
            "data-min-lenght",
        ]
    }
    validate(form) {

        let inputs = form.getElementsByTagName("input");

        let inputsArray = [...inputs];

        inputsArray.forEach(function (input) {

            
            this.minlength(input)

        }, this);
    }
    minlength(input) {
        let inputlength = input.value.length;
        let errorMessage = "O campo não pode estar vazio";
        if(inputlength < 1){
            this.printMessage(input, errorMessage);
        }
    }

    printMessage(input, msg){
        let template = document.querySelector('.validation-error').cloneNode(true);
        template.textContent = msg;

        let inputParent = input.parentNode;
        console.log('print message')


        template.classList.remove('hidden');

        inputParent.appendChild(template)
    }
}



let validator = new Validator()
const livrosCadastrados = []
function cadastrarLivro() {



    let htmlForm = document.getElementById("cadastro-livro");
    validator.validate(htmlForm)
    //const livro = Object.fromEntries(new FormData(htmlForm).entries());

    //livrosCadastrados.push(livro)
    //console.log(livrosCadastrados)

}







function mostrarTabela(listaLivros) {


    var bodyString = '';
    listaLivros.forEach((livro) => {
        //titulo, autor, isbn, dataPublicacao, pagina
        bodyString += ('<tr><td>' + livro.titulo + '</td></tr>');
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