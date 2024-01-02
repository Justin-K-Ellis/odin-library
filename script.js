// DOM objects
let bookList = document.querySelector("#book-list");
let bookForm = document.querySelector("#book-form");
const testBook = new Book("Bob's Book", "Bob Smith", 1986, 120);


// Scripts variables
let library = [];

// Function invocations
addBook(library, testBook);
displayBooks();


// DOM interactions

// Loop through library and get descriptions of books, display them on page
function displayBooks() {
    removeAllChildNodes(bookList);
    for (book of library) {
        const bookDescription = book.describeBook();
        let item = document.createElement("li");
        item.textContent = bookDescription;
        bookList.appendChild(item);
    }
}

// Process book submission
bookForm.addEventListener("submit", handleForm);


// Function definitions

// Build new book object
function Book(title, author, year, pages) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.describeBook = function() {
        return `${this.title} by ${this.author}, written in ${this.year}. ${this.pages} pages.`;
    }
}

// Add a book to the library array.
function addBook(arr, book) {
    arr.push(book);
}

// Get booked info from form input, process description, add to library
function handleForm(event) {
    event.preventDefault();
    const formData = new FormData(bookForm);
    const title = formData.get("book-title");
    const author = formData.get("author");
    const year = formData.get("year");
    const pages = formData.get("pages");
    const addedBook = new Book(title, author, year, pages);
    addBook(library, addedBook);
    displayBooks();
}

// Clear displayed books in order to display new books
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}