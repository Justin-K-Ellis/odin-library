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
        // cardBuilder(book);
        appendCard(book);
    }
}

function appendCard(book) {
    const html = makeCardHTML(book);
    const card = document.createElement("div");
    // card.classList.add("row");
    card.innerHTML = html;
    innerGallery.appendChild(card);
}

function makeCardHTML(book) {
    const cardHTML = `
        <div class="card col" style="width: 18rem;">
            <div class="card-header">
                <h5><em>${book.title}</em></h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">By ${book.author}</li>
                <li class="list-group-item">Published in ${book.year}</li>
                <li class="list-group-item">${book.pages} pages</li>
            </ul>
        </div>
    `
    return cardHTML;
}

// function cardBuilder(book) {
//     // Create card elements
//     let outerCard = document.createElement("div");
//     let card = document.createElement("div");
//     let cardContent = document.createElement("div");
//     let cardTitle = document.createElement("span");
//     let cardAuthor = document.createElement("p");
//     let cardYear = document.createElement("p");
//     let cardPages = document.createElement("p");

//     // Give elements content
//     cardTitle.textContent = book.title;
//     cardAuthor.textContent = `Author: ${book.author}`;
//     cardYear.textContent = book.year;
//     cardPages.textContent = `${book.pages} pages`;

//     // Apply CSS classes to elements
//     outerCard = addOuterCard(outerCard);
//     card.classList.add("card");
//     cardContent.classList.add("card-content");
//     cardTitle.classList.add("card-title");

//     // Append elements to elements
//     cardContent.appendChild(cardTitle);
//     cardContent.appendChild(cardAuthor);
//     cardContent.appendChild(cardYear);
//     cardContent.appendChild(cardPages);
//     card.appendChild(cardContent);
//     outerCard.appendChild(card);

//     // Append finished card to parent div
//     innerGallery.appendChild(outerCard);
// }

// // Add multiple CSS classes to outer card
// function addOuterCard(div) {
//     div.classList.add("col");
//     div.classList.add("s12");
//     div.classList.add("m3");
//     return div;
// }



// Clear displayed books in order to display new books
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Example book
// const republic = new Book("Republic", "Plato", "375 BCE", 295);
// library.push(republic);
displayBooks();
      