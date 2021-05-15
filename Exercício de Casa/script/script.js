let books = [{
    isbn: "9781593275846",
    title: "Eloquent JavaScript, Second Edition",
    author: "Marijn Haverbeke",
    published: "2014-12-14T00:00:00.000Z",
},
{
    isbn: "9781449331818",
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    published: "2012-07-01T00:00:00.000Z",
},
{
    isbn: "9781449365035",
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    published: "2014-02-01T00:00:00.000Z",
},
{
    isbn: "9781491950296",
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    published: "2014-07-01T00:00:00.000Z",
},
{
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    published: "2016-09-03T00:00:00.000Z",
},
{
    isbn: "9781491904244",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    published: "2015-12-27T00:00:00.000Z",
},
{
    isbn: "9781449325862",
    title: "Git Pocket Guide",
    author: "Richard E. Silverman",
    published: "2013-08-02T00:00:00.000Z",
},
{
    isbn: "9781449337711",
    title: "Designing Evolvable Web APIs with ASP.NET",
    author: "Glenn Block, et al.",
    published: "2014-04-07T00:00:00.000Z",
}
]



function addLivros() {

books.map((book) => {
    const parseSubtitle = !book.subtitle ? "-" : book.subtitle;
    const parsePages = !book.pages ? "-" : book.pages;
    const parseData = new Date(book.published);
    const data = parseData.setDate(parseData.getDate() + 1);
    const dataFormatada = parseData.toLocaleDateString('pt-br');

    document.getElementById('texto').innerHTML +=
        `
    <tr >
    <td> ${book.title} </td>
    <td> ${parseSubtitle}</td>
    <td> ${book.author}</td>
    <td> ${parsePages}</td>
    <td> ${dataFormatada}</td>
    <td> ${book.isbn}</td>
    <td><button class="delete">Remover</button></td>
    </tr>
    `
    })
}

addLivros();


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

    if(pegaTitulo === "" || pegaAutor === "" || pegaIsbn === "" || pegaDataPublicacao === "") {
    alert("Campo Obrigatorio não preenchido")
    } else {
    books.push ({
      autor: pegaAutor,
      title: pegaTitulo,
      isbn: pegaIsbn,
      published: pegaDataPublicacao,
  
  });
      limparDados();
      addLivros();
  }
  
    
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





