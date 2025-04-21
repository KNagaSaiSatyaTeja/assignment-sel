// Book Constructor Function
function Book(title, author, ISBN) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.isBorrowed = false;

  this.borrow = function () {
    this.isBorrowed = true;
  };

  this.returnBook = function () {
    this.isBorrowed = false;
  };
}

// Library Constructor Function
function Library() {
  this.books = [];

  this.addBook = function (book) {
    this.books.push(book);
    console.log(`Added "${book.title}" to the library.`);
  };

  this.findBookByISBN = function (isbn) {
    return this.books.find((book) => book.ISBN === isbn);
  };

  this.listAvailableBooks = function () {
    return this.books.filter((book) => !book.isBorrowed);
  };

  this.listBorrowedBooks = function () {
    return this.books.filter((book) => book.isBorrowed);
  };
}

// Usage Example

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1234567890");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "0987654321");

const library = new Library();

library.addBook(book1);
library.addBook(book2);

console.log("Available Books:", library.listAvailableBooks());

book1.borrow();
console.log("Borrowed Books:", library.listBorrowedBooks());

book1.returnBook();
console.log("Available Books after return:", library.listAvailableBooks());
