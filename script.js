let library = [];

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