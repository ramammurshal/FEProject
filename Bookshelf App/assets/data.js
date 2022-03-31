const BOOKSHELF_KEY = "BOOKSHELF_APPS";

let books = [];

function isStorageExist() {
    if (typeof (Storage) === undefined) {
        alert("Browser kamu tidak mendukung fitur Local Storage!");
        return false;
    }
    return true;
}

function saveData() {
    localStorage.setItem(BOOKSHELF_KEY, JSON.stringify(books));

    document.dispatchEvent(new Event("ondatasaved"));
}

function loadDataFromStorage() {
    let data = JSON.parse(localStorage.getItem(BOOKSHELF_KEY));

    if (data !== null) {
        books = data;
    }

    document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
    if (isStorageExist()) {
        saveData();
    }
}

function composeBookObject(title, year, author, isCompleted) {
    return {
        id: +new Date(),
        title,
        year,
        author,
        isCompleted
    };
}

function findBook(bookID) {
    for (item of books) {
        if (item.id === bookID) {
            return item;
        }
    }
    return null;
}

function findBookIndex(bookID) {
    let index = 0;

    for (item of books) {
        if (item.id === bookID) {
            return index;
        }
        index++;
    }

    return -1;
}
