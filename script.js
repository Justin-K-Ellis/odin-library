// Variable declairations
let bookList = document.querySelector("#book-list");
let bookForm = document.querySelector("#book-form");
let tableBody = document.querySelector("#table-body");
let library = [];

// Book object constructor
class Book {
    constructor(title, author, year, pages) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
    }
}

// Process book submission
bookForm.addEventListener("submit", handleForm);

// Get booked info from form input, process description, add to library
function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(bookForm);
    const title = formData.get("book-title");
    const author = formData.get("author");
    const year = formData.get("year");
    const pages = formData.get("pages");
    const addedBook = new Book(title, author, year, pages);
    library.push(addedBook);
    displayBooks();
}

// Loop through library and get descriptions of books, display them on page
function displayBooks() {
    removeAllChildNodes(tableBody);
    for (book of library) {
        appendCard(book);
    }
}

function appendCard(book) {
    const row = makeRow(book);   
    tableBody.appendChild(row);
}

function makeRow(book) {
    let row = document.createElement("tr");

    let titleData = document.createElement("td");
    titleData.setAttribute("scope", "row");
    let authorData = document.createElement("td");
    let yearData = document.createElement("td");
    let pagesData = document.createElement("td");
    let readData = document.createElement("td");

    let formCheckData = document.createElement("td");
    let formCheck = document.createElement("div");
    formCheck.classList.add("form-check");
    let input = document.createElement("input");
    input.classList.add("form-check-input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", "");
    input.id = "flexCheckDefault";
    let label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", input.id);

    formCheck.appendChild(input);
    formCheck.appendChild(label);
    formCheckData.appendChild(formCheck);

    titleData.textContent = book.title;
    authorData.textContent = book.author;
    yearData.textContent = book.year;
    pagesData.textContent = book.pages;
    
    row.appendChild(titleData);
    row.appendChild(authorData);
    row.appendChild(yearData);
    row.appendChild(pagesData);
    row.appendChild(formCheckData);

    return row;
}

// Clear displayed books in order to display new books
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Example book
const republic = new Book("Republic", "Plato", "375 BCE", 295);
library.push(republic);
displayBooks();
      