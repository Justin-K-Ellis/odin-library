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
    const card = makeCardHTML(book);   
    tableBody.appendChild(card);
}

function makeCardHTML(book) {
    const cardHTML = `
        <td scope="row"><em>${book.title}</em></td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td>${book.pages}</td>
        <td>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                </label>
            </div>
        </td>
    `
    let card = document.createElement("tr");
    card.innerHTML = cardHTML;
    return card;
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
      