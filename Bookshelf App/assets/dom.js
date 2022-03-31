const UNCOMPLETED_READ = "unreaded-list";
const COMPLETED_READ = "readed-list";
const BOOK_ID = "itemID";

function addBook() {
    const uncompletedRead = document.getElementById(UNCOMPLETED_READ);

    const bookTitle = document.getElementById("bookTitle").value;
    const bookYear = document.getElementById("bookYear").value;
    const bookAuthor = document.getElementById("bookAuthor").value;

    // book merupakan element HTML
    const book = makeBook(bookTitle, bookYear, bookAuthor, false);

    // Buat data menjadi object
    const bookObject = composeBookObject(bookTitle, bookYear, bookAuthor, false);

    book[BOOK_ID] = bookObject.id;

    // books adalah array di file data.js
    // push masukin data ke element belakang array
    books.push(bookObject);

    uncompletedRead.append(book);
    updateDataToStorage();
}

function makeBook(title, year, author, isCompleted) {
    const textTitle = document.createElement("div");
    textTitle.innerText = title;
    textTitle.classList.add("box-title");

    const textYear = document.createElement("div");
    textYear.innerText = year;

    const textAuthor = document.createElement("div");
    textAuthor.innerText = author;

    const br = document.createElement("br");

    const container = document.createElement("div");
    container.classList.add("box");
    container.append(textTitle, textYear, textAuthor, br);

    if (!isCompleted) {
        container.append(
            createCheckButton(),
            createTrashButton()
        );
    }
    else {
        container.append(
            createTrashButton(),
            createUndoButton()
        );
    }

    // Container yang di return adalah element html dengan class box
    // yang telah lengkap dengan element2nya
    return container;
}

function createCheckButton() {
    return createButton("button-finish", "Tandai Telah Dibaca", function (event) {
        addBookToCompleted(event.target.parentElement);
    });
}

function createUndoButton() {
    return createButton("button-undo", "Tandai Belum Dibaca", function (event) {
        addBookToUncompleted(event.target.parentElement);
    });
}

function createTrashButton() {
    return createButton("button-trash", "Hapus", function (event) {
        removeBook(event.target.parentElement);
    });
}

function createButton(buttonTypeClass, inner, eventListener) {
    const button = document.createElement("div");
    button.innerText = inner;
    button.classList.add("button", buttonTypeClass);
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    return button;
}

function addBookToCompleted(bookElement) {
    const bookCompleted = document.getElementById(COMPLETED_READ);

    const tilteOfBook = bookElement.querySelector(".box-title").innerText;
    const yearOfBook = bookElement.querySelector("div:nth-child(2)").innerText;
    const authorOfBook = bookElement.querySelector("div:nth-child(3)").innerText;

    // newBook akan berisi element HTML
    const newBook = makeBook(tilteOfBook, yearOfBook, authorOfBook, true);

    // book dibawah akan berisi object
    const book = findBook(bookElement[BOOK_ID]);

    book.isCompleted = true;
    newBook[BOOK_ID] = book.id;

    bookCompleted.append(newBook);
    bookElement.remove();
    updateDataToStorage();

    alert("Buku berhasil dipindahkan!");
}

function removeBook(bookElement) {
    let bool = confirm("Yakin ingin menghapus buku ini?");
    if (bool == true) {
        const bookPosition = findBookIndex(bookElement[BOOK_ID]);
        books.splice(bookPosition, 1);

        bookElement.remove();
        updateDataToStorage();

        alert("Buku berhasil dihapus!");
    }
    else {
        return 0;
    }
}

function addBookToUncompleted(bookElement) {
    bookUncompleted = document.getElementById(UNCOMPLETED_READ);

    const tilteOfBook = bookElement.querySelector(".box-title").innerText;
    const yearOfBook = bookElement.querySelector("div:nth-child(2)").innerText;
    const authorOfBook = bookElement.querySelector("div:nth-child(3)").innerText;

    const newBook = makeBook(tilteOfBook, yearOfBook, authorOfBook, false);

    const book = findBook(bookElement[BOOK_ID]);
    book.isCompleted = false;
    newBook[BOOK_ID] = book.id;

    bookUncompleted.append(newBook);

    bookElement.remove();
    updateDataToStorage();

    alert("Buku berhasil dipindahkan!");
}

function refreshDataFromBooks() {
    const bookUncompleted = document.getElementById(UNCOMPLETED_READ);
    const bookCompleted = document.getElementById(COMPLETED_READ);

    for (item of books) {
        const newBook = makeBook(item.title, item.year, item.author, item.isCompleted);
        newBook[BOOK_ID] = item.id;

        if (!item.isCompleted) {
            bookUncompleted.append(newBook);
        }
        else {
            bookCompleted.append(newBook);
        }
    }
}

