// variáveis
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let date = document.querySelector("#date");
let pages = document.querySelector("#pages");
let button = document.querySelector(".button");

// prevenção do botão submit (impede de recarregar a página)
button.addEventListener("click", function (event) {
  event.preventDefault();
});

// função de máscara pro ISBN
function isbnMask() {
  let isbn = document.querySelector("#isbn");

  if (
    isbn.value.length == 3 ||
    isbn.value.length == 5 ||
    isbn.value.length == 8 ||
    isbn.value.length == 15
  ) {
    isbn.value += "-";
  }
}

// função de add livro
function addBook() {
  let containerTable = document.querySelector(".container-table");
  let table = document.querySelector(".tbody");
  let addTr = document.createElement("tr");
  let addTdTitle = document.createElement("td");
  let addTdAuthor = document.createElement("td");
  let addTdIsbn = document.createElement("td");
  let addTdDate = document.createElement("td");
  let addTdPages = document.createElement("td");

  if (
    title.value === "" ||
    author.value === "" ||
    isbn.value === "" ||
    date.value === ""
  ) {
    alert("Erro, insira todos os dados nos campos");
  } else {
    table.appendChild(addTr);
    addTdTitle.textContent = title.value;
    addTr.appendChild(addTdTitle);
    addTdAuthor.textContent = author.value;
    addTr.appendChild(addTdAuthor);
    addTdIsbn.textContent = isbn.value;
    addTr.appendChild(addTdIsbn);
    addTdDate.textContent = date.value;
    addTr.appendChild(addTdDate);
    addTdPages.innerHTML = `${pages.value}`;
    addTr.appendChild(addTdPages);

    containerTable.classList.add("on");
  }
}
