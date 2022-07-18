function Book(title, author, description, pageCount) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pageCount = pageCount;
};


function createNewBook() {
    title = prompt("Title");
    author = prompt("Author");
    description = prompt("Description");
    pageCount = prompt("Pages");
    newBook = new Book(title, author, description, pageCount);
    createBookElement(newBook);
};


function createBookElement(newBook) {
    bookElement = document.createElement("div");
    bookElement.setAttribute("class", `book-card ${allBooks.length}`);

    let bookContentWrapperChildren = [];

    cardContentWrapper = document.createElement("div");
    cardContentWrapper.setAttribute("class", "card-content-wrapper");

    bookTitle = document.createElement("p");
    bookTitle.setAttribute("class", "book-title");
    bookTitle.textContent = newBook.title;
    bookContentWrapperChildren.push(bookTitle);

    bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "book-author");
    bookAuthor.textContent = newBook.author;
    bookContentWrapperChildren.push(bookAuthor);
    
    bookDescriptionMainText = document.createElement("p");
    bookDescriptionMainText.setAttribute("class", "book-description-main-text");
    bookDescriptionMainText.textContent = "About the book";
    bookContentWrapperChildren.push(bookDescriptionMainText);

    bookDescription = document.createElement("p");
    bookDescription.setAttribute("class", "book-description");
    bookDescription.textContent = newBook.description;
    bookContentWrapperChildren.push(bookDescription);

    bookPageCount = document.createElement("p");
    bookPageCount.setAttribute("class", "book-page-count");
    bookPageCount.textContent = newBook.pageCount;
    bookContentWrapperChildren.push(bookPageCount);

    bookReadBtn = document.createElement("button");
    bookReadBtn.setAttribute("class", "btn-read btn-book-card");
    bookReadBtn.textContent = "Read";
    bookContentWrapperChildren.push(bookReadBtn);

    bookRemoveBtn = document.createElement("button");
    bookRemoveBtn.setAttribute("class", "btn-remove btn-book-card");
    bookRemoveBtn.textContent = "Remove";
    bookContentWrapperChildren.push(bookRemoveBtn);

    bookContentWrapperChildren.forEach(element => {
        cardContentWrapper.appendChild(element);
    });

    bookElement.appendChild(cardContentWrapper);

    console.log(bookElement);
    allBooks.push(bookElement);
    displayBookElement(bookElement);
};


function displayBookElement(bookElement) {
    const contentWrapper = document.querySelector(".content-wrapper");
    const addBookCard = document.querySelector(".add-book-card");
    contentWrapper.insertBefore(bookElement, addBookCard);
};


let allBooks = [];

const addBookBtn = document.querySelector(".btn-add");
addBookBtn.addEventListener("click", createNewBook);