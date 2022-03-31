document.addEventListener("DOMContentLoaded", function () {
    // Jika form submit buku ditekan
    const submitForm = document.getElementById("form");
    submitForm.addEventListener("submit", function (event) {
        alert("Buku Berhasil Ditambahkan!");
        event.preventDefault();
        addBook();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }

    // Jika form search buku disubmit
    const submitSearch = document.getElementById("form-search");
    submitSearch.addEventListener("submit", function (event) {
        event.preventDefault();
        const search = document.getElementById("search-text").value;
        const boxUnreaded = document.getElementById("unreaded-list");
        const boxReaded = document.getElementById("readed-list");

        let i;
        let count = 0;

        function resetWarna(boxUnreaded, boxReaded) {
            for (i = 1; i <= boxUnreaded.childElementCount; i++) {
                boxUnreaded.childNodes[i].style.backgroundColor = "#e8e8ed";
            }
            for (i = 1; i <= boxReaded.childElementCount; i++) {
                boxReaded.childNodes[i].style.backgroundColor = "#e8e8ed";
            }
        }

        resetWarna(boxUnreaded, boxReaded);

        if (search.length === 0) {
            alert("Pencarian kamu kosong nih :(");
            resetWarna(boxUnreaded, boxReaded);
            return;
        }
        else {
            for (item of books) {
                let indexFound = item.title.search(search);

                if (indexFound !== -1) {
                    let IDbook = item.id;
                    for (i = 1; i <= boxUnreaded.childElementCount; i++) {
                        if (boxUnreaded.childNodes[i][BOOK_ID] === IDbook) {
                            boxUnreaded.childNodes[i].style.backgroundColor = "orange";
                            count++;
                        }
                    }
                    for (i = 1; i <= boxReaded.childElementCount; i++) {
                        if (boxReaded.childNodes[i][BOOK_ID] === IDbook) {
                            boxReaded.childNodes[i].style.backgroundColor = "orange";
                            count++;
                        }
                    }
                }
            }
        }

        if (count === 0) {
            alert("Buku yang kamu cari tidak ada :(");
            resetWarna(boxUnreaded, boxReaded);
        }
    });
});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan");
});

document.addEventListener("ondataloaded", () => {
    refreshDataFromBooks();
});
