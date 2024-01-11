// Variable declairations
let bookList = document.querySelector("#book-list");
let bookForm = document.querySelector("#book-form");
let innerGallery = document.querySelector(".inner-gallery");
let library = [];

// Book object constructor
function Book(title, author, year, pages) {
    // Book constructor
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.describeBook = function() {  // For debugging
        return `${this.title} by ${this.author}, written in ${this.year}. ${this.pages} pages.`;
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
    removeAllChildNodes(innerGallery);
    for (book of library) {
        cardBuilder(book);
    }
}

function cardBuilder(book) {
    // Create card elements
    let outerCard = document.createElement("div");
    let card = document.createElement("div");
    let cardContent = document.createElement("div");
    let cardTitle = document.createElement("span");
    let cardAuthor = document.createElement("p");
    let cardYear = document.createElement("p");
    let cardPages = document.createElement("p");

    // Give elements content
    cardTitle.textContent = book.title;
    cardAuthor.textContent = `Author: ${book.author}`;
    cardYear.textContent = book.year;
    cardPages.textContent = `${book.pages} pages`;

    // Apply CSS classes to elements
    outerCard = addOuterCard(outerCard);
    card.classList.add("card");
    cardContent.classList.add("card-content");
    cardTitle.classList.add("card-title");
    action.classList.add("card-action")
    deleteButton.classList.add("btn-floating");
    deleteButton.classList.add("red");
    deleteIcon.classList.add("material-icons");

    // Append elements to elements
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardAuthor);
    cardContent.appendChild(cardYear);
    cardContent.appendChild(cardPages);
    cardContent.appendChild(action);
    card.appendChild(cardContent);
    outerCard.appendChild(card);

    // Append finished card to parent div
    innerGallery.appendChild(outerCard);
}

// Add multiple CSS classes to outer card
function addOuterCard(div) {
    div.classList.add("col");
    div.classList.add("s12");
    div.classList.add("m3");
    return div;
}


// Clear displayed books in order to display new books
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

let readButtons = document.querySelectorAll(".readCheckMark");
readButtons.forEach(button => button.addEventListener("click", handleReadStatus));

// Example book
const republic = new Book("Republic", "Plato", "375 BCE", 295);
library.push(republic);
displayBooks();

// TODO: implement accordian

// Accordian
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.collapsible');
//     var instances = M.Collapsible.init(elems, true);
//   });
      