// DOM objects
let bookList = document.querySelector("#book-list");
let bookForm = document.querySelector("#book-form");
let innerGallery = document.querySelector(".inner-gallery");
// const testBook = new Book("Bob's Book", "Bob Smith", 1986, 120);


// Scripts variables
let library = [];

// Function invocations
// addBook(library, testBook);
// displayBooks();


// DOM interactions

// Loop through library and get descriptions of books, display them on page
function displayBooks() {
    removeAllChildNodes(bookList);
    for (book of library) {
        cardBuilder(book);
        // const bookDescription = book.describeBook();
        // let item = document.document.createElement("li");
        // item.textContent = bookDescription;
        // bookList.appendChild(item);
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

function cardBuilder(book) {
    // Get book object info
    const title = book.title;
    const author = book.author;
    const year = book.year;
    const pages = book.pages;

    // Create card elements
    let outerCard = document.createElement("div");
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let cardTitle = document.createElement("span");
    let cardAuthor = document.createElement("p");
    let cardYear = document.createElement("p");
    let cardPages = document.createElement("p");

    // Give elements content
    cardTitle.textContent = title;
    cardAuthor.textContent = `Author: ${author}`;
    cardYear.textContent = year;
    cardPages.textContent = `${pages} pages`;

    // Apply classes to elements
    outerCard = addOuterCard(outerCard);
    card.classList.add("card");
    cardContent.classList.add("card-content");
    cardTitle.classList.add("card-title");

    // Append elements to elements
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardAuthor);
    cardContent.appendChild(cardYear);
    cardContent.appendChild(cardPages);
    card.appendChild(cardContent);
    outerCard.appendChild(card);

    // Append finished card to parent div
    innerGallery.appendChild(outerCard);
}

// Add multiple CSS classes to outer card
function addOuterCard(div) {
    div.classList.add("col");
    div.classList.add("s12");
    div.classList.add("m6");
    return div;
}

// Clear displayed books in order to display new books
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}