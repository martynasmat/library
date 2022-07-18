function Book(title, author, description, pageCount) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pageCount = pageCount;
};


function removeAddBookCard() {
    const addBookCard = document.querySelector(".add-book-card");
    addBookCard.remove();
}


function createAddBookCard() {
    const addBookCard = document.createElement("div");
    addBookCard.setAttribute("class", "add-book-card");

    const addBookCardContentWrapper = document.createElement("div");
    addBookCardContentWrapper.setAttribute("class", "add-book-card-content-wrapper");

    const addBookText = document.createElement("p");
    addBookText.setAttribute("class", "add-book-text");
    addBookText.textContent = "Add a book";

    const plusButton = document.createElement("button");
    plusButton.setAttribute("class", "btn-add");
    plusButton.textContent = "+";

    addBookCardContentWrapper.appendChild(addBookText);
    addBookCardContentWrapper.appendChild(plusButton);

    addBookCard.appendChild(addBookCardContentWrapper);

    return addBookCard;
};

function displayAddBookCard() {
    const addBookCard = createAddBookCard();
    const contentWrapper = document.querySelector(".content-wrapper");
    contentWrapper.appendChild(addBookCard);

    const addBookBtn = document.querySelector(".btn-add");
    addBookBtn.addEventListener("click", () => {
        removeAddBookCard();
        displayFormElement();
    });
};


function createFormElement() {
    formElement = document.createElement("form");
    formElement.setAttribute("class", "book-card add");

    formElementContentWrapper = document.createElement("div");
    formElementContentWrapper.setAttribute("class", "add-book-form-content-wrapper");

    let formElementContentWrapperChildren = [];

    titleInputWrapper = document.createElement("div");
    titleInputLabel = document.createElement("label");
    titleInputLabel.setAttribute("for", "title");
    titleInputLabel.textContent = "Title";
    titleInputWrapper.appendChild(titleInputLabel);
    titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("placeholder", "Sword of Destiny");
    titleInput.required = true;
    titleInputWrapper.appendChild(titleInput);
    formElementContentWrapperChildren.push(titleInputWrapper);


    authorInputWrapper = document.createElement("div");
    authorInputLabel = document.createElement("label");
    authorInputLabel.setAttribute("for", "author");
    authorInputLabel.textContent = "Author";
    authorInput = document.createElement("input");
    authorInputWrapper.appendChild(authorInputLabel);
    authorInput.setAttribute("type", "text");
    authorInput.setAttribute("id", "author");
    authorInput.setAttribute("placeholder", "Andrzej Sapkowski");
    authorInput.required = true;
    authorInputWrapper.appendChild(authorInput);
    formElementContentWrapperChildren.push(authorInputWrapper);

    descriptionInputWrapper = document.createElement("div");
    descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.setAttribute("for", "description");
    descriptionInputLabel.textContent = "Description";
    descriptionInput = document.createElement("input");
    descriptionInputWrapper.appendChild(descriptionInputLabel);
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "description");
    descriptionInput.setAttribute("placeholder", "This book is about..");
    descriptionInput.required = true;
    descriptionInputWrapper.appendChild(descriptionInput);
    formElementContentWrapperChildren.push(descriptionInputWrapper);

    pagesInputWrapper = document.createElement("div");
    pagesInputLabel = document.createElement("label");
    pagesInputLabel.setAttribute("for", "pages");
    pagesInputLabel.textContent = "Page count";
    pagesInputWrapper.appendChild(pagesInputLabel);
    pagesInput = document.createElement("input");
    pagesInput.setAttribute("type", "number");
    pagesInput.setAttribute("id", "pages");
    pagesInput.setAttribute("min", "0");
    pagesInput.setAttribute("placeholder", "0");
    pagesInput.required = true;
    pagesInputWrapper.appendChild(pagesInput);
    formElementContentWrapperChildren.push(pagesInputWrapper);

    formButtonWrapper = document.createElement("div");
    formButtonWrapper.setAttribute("class", "form-button-wrapper");
    submitButton = document.createElement("button");
    submitButton.textContent = "Add book";
    submitButton.setAttribute("class", "btn-add-submit btn-book-card");
    submitButton.type = "submit";
    formButtonWrapper.appendChild(submitButton);

    cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.type = "submit";
    cancelButton.setAttribute("formnovalidate", "formnovalidate");
    cancelButton.setAttribute("class", "btn-add-cancel btn-book-card");
    formButtonWrapper.appendChild(cancelButton);

    formElementContentWrapperChildren.forEach(element => {
        element.setAttribute("class", "input-wrapper");
        formElementContentWrapper.appendChild(element);
    });
    formElementContentWrapper.appendChild(formButtonWrapper);
    formElement.appendChild(formElementContentWrapper);

    return formElement;
};


function removeFormElement() {
    const formElement = document.querySelector("form");
    formElement.remove();
};


function createNewBook() {
    const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const descriptionInput = document.querySelector("#description");
    const pagesInput = document.querySelector("#pages");
    const title = titleInput.value;
    const author = authorInput.value;
    const description = descriptionInput.value;
    const pageCount = pagesInput.value;
    const newBook = new Book(title, author, description, pageCount);
    createBookElement(newBook);
};


function displayFormElement() {
    const formElement = createFormElement();
    const contentWrapper = document.querySelector(".content-wrapper");
    contentWrapper.appendChild(formElement);

    const formSubmitButton = document.querySelector(".btn-add-submit");
        formSubmitButton.addEventListener("click", (e) => {
        e.preventDefault();
        createNewBook();
        displayAddBookCard();
        removeFormElement();
        displayBookElement(bookElement);
    });

    const formCancelButton = document.querySelector(".btn-add-cancel");
        formCancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        removeFormElement();
        displayAddBookCard();
    });
};


function createBookElement(newBook) {
    bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");

    let bookContentWrapperChildren = [];

    cardContentWrapper = document.createElement("div");
    cardContentWrapper.setAttribute("class", "card-content-wrapper");

    bookTitle = document.createElement("p");
    bookTitle.setAttribute("class", "book-title");
    bookTitle.textContent = newBook.title;
    bookContentWrapperChildren.push(bookTitle);

    bookAuthor = document.createElement("p");
    bookAuthor.setAttribute("class", "book-author");
    bookAuthor.textContent = `by ${newBook.author}`;
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
    bookPageCount.textContent = `${newBook.pageCount} pages`;
    bookContentWrapperChildren.push(bookPageCount);

    bookReadBtn = document.createElement("button");
    bookReadBtn.setAttribute("class", "btn-read btn-book-card");
    bookReadBtn.textContent = "Read";
    bookContentWrapperChildren.push(bookReadBtn);

    bookRemoveBtn = document.createElement("button");
    bookRemoveBtn.setAttribute("class", "btn-remove btn-book-card");
    bookRemoveBtn.setAttribute("book-number", `${allBooks.length}`);
    bookRemoveBtn.textContent = "Remove";
    bookContentWrapperChildren.push(bookRemoveBtn);

    bookContentWrapperChildren.forEach(element => {
        cardContentWrapper.appendChild(element);
    });

    bookElement.appendChild(cardContentWrapper);
    
    allBooks.push(bookElement);

    return bookElement;
};


function removeBookCard(bookElement) {
    bookElement.remove();
};


function displayBookElement(bookElement) {
    const contentWrapper = document.querySelector(".content-wrapper");
    const addBookCard = document.querySelector(".add-book-card");
    contentWrapper.insertBefore(bookElement, addBookCard);

    const removeButtons = document.querySelectorAll(".btn-remove");
    removeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const bookIndex = e.target.getAttribute("book-number");
            removeBookCard(allBooks[bookIndex]);
        });
    });
};


let allBooks = [];

const addBookBtn = document.querySelector(".btn-add");
addBookBtn.addEventListener("click", () => {
    removeAddBookCard();
    displayFormElement();
});

const removeButtons = document.querySelectorAll(".btn-remove");
removeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target);
    });
});

const exampleBook = new Book("Book Title", "Author's Name", "This book is about the plot of the book.", 999);
displayBookElement(createBookElement(exampleBook));