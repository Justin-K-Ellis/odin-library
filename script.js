// Variable declairations
let bookList = document.querySelector("#book-list");
let bookForm = document.querySelector("#book-form");
let tableBody = document.querySelector("#table-body");
let bookCount = document.querySelector("#book-count");
let pageCount = document.querySelector("#page-count");
let library = [];

// Book object constructor
class Book {
    constructor(title, author, year, pages) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
    }

    read = false;

    updateReadStatus() {
        this.read === false ? this.read = true : this.read = false;
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
    updateReadCount();
}

function appendCard(book) {
    const row = makeRow(book);   
    tableBody.appendChild(row);
}

function makeRow(book) {
    // Make row element
    let row = document.createElement("tr");

    // Make table data elements for fields
    let titleData = document.createElement("td");
    titleData.setAttribute("scope", "row");
    let authorData = document.createElement("td");
    let yearData = document.createElement("td");
    let pagesData = document.createElement("td");
    let deleteBtnData = document.createElement("td");

    // Make checkbox
    let formCheckData = document.createElement("td");
    let formCheck = document.createElement("div");
    formCheck.classList.add("form-check");
    let input = document.createElement("input");
    input.classList.add("form-check-input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", "");
    input.id = `${book.title}-checkbox`;
    input.addEventListener("click", () => {
        book.updateReadStatus();
        updateReadCount();
    });
    book.read === true ? input.checked = true : input.checked = false;
    let label = document.createElement("label");
    label.classList.add("form-check-label");
    label.setAttribute("for", input.id);

    formCheck.appendChild(input);
    formCheck.appendChild(label);
    formCheckData.appendChild(formCheck);

    // Get index
    const index = library.indexOf(book);

    // Make Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.addEventListener("click", () => {
        deleteBook(index);
    })
    deleteBtnData.appendChild(deleteBtn);

    // Fields get content from book object
    titleData.textContent = book.title;
    authorData.textContent = book.author;
    yearData.textContent = book.year;
    pagesData.textContent = book.pages;
    
    // Append to row
    row.appendChild(titleData);
    row.appendChild(authorData);
    row.appendChild(yearData);
    row.appendChild(pagesData);
    row.appendChild(formCheckData);
    row.appendChild(deleteBtnData);
    row.setAttribute("data-index", index);

    return row;
}

// Clear displayed books in order to display new books
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function deleteBook(ind) {
    library.splice(ind, 1);
    displayBooks();
}

function updateReadCount() {
    let bookN = 0;
    let pageN = 0;
    for (book of library) {
        if (book.read === true) {
            bookN++;
            pageN += parseInt(book.pages);
        }
    }
    bookCount.textContent = bookN;
    pageCount.textContent = pageN;
}

// Example book
const republic = new Book("Republic", "Plato", "375 BCE", 295);
library.push(republic);
displayBooks();
      