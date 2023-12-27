// DOM objects
let bookList = document.querySelector("#book-list");
const testBook = new Book("Bob's Book", "Bob Smith", 1986, 120);

// Scripts variables
let library = [];

// Function invocations
addBook(library, testBook);
displayBooks();

// DOM interactions
function displayBooks() {
    removeAllChildNodes(bookList);
    for (book of library) {
        const bookDescription = book.describeBook();
        let item = document.createElement("li");
        item.textContent = bookDescription;
        bookList.appendChild(item);
    }
}



// Function definitions

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

function addBook(arr, book) {
    // Add a book to the library array.
    arr.push(book);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}