const storageKey = "STORAGE_KEY";
const submitAction = document.getElementById("form-data-user");

// Fungsi utk mengecek apakah browser user support thdp fitur web storage
function checkForStorage() {
    // Akan return true jika tersedia fitur web storage
    return (typeof (Storage) !== "undefined");
}

// Fungsi ini berguna untuk menginput data user ke dalam web storage
function putUserList(data) {
    if (checkForStorage()) {
        // Let userData akan menjadi sebuah array
        let userData;

        if (localStorage.getItem(storageKey) === null) {
            userData = [];
        }
        else {
            userData = JSON.parse(localStorage.getItem(storageKey));
        }

        // Unsfiht adalah menginput data ke depan array
        userData.unshift(data);
        if (userData.length > 5) {
            // Pop menghapus data belakang array
            userData.pop();
        }
        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
}

// Fungsi ini digunakan untuk mendapatkan data pada item storage yang berisi data user yang sudah diinput
function getUserList() {
    if (checkForStorage()) {
        // Akan mengembalikan salah satunya, jika yang kiri terpenuhi, maka kembalikan yang kiri
        // Jika tidak, maka kembalikan yang kanan
        return (JSON.parse(localStorage.getItem(storageKey)) || []);
    }
    else {
        return [];
    }
}

// Fungsi untuk menampilkan data ke browser
function renderUserList() {
    const userData = getUserList();
    const userList = document.getElementById("user-list-detail");

    userList.innerHTML = "";

    for (let user of userData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + user.nama + "</td>";
        row.innerHTML += "<td>" + user.umur + "</td>";
        row.innerHTML += "<td>" + user.domisili + "</td>";

        userList.appendChild(row);
    }
}

// Fungsi yang memanggil fungsi lain jika tombol submit ditekan
submitAction.addEventListener("submit", function (event) {
    const inputNama = document.getElementById("nama").value;
    const inputUmur = document.getElementById("umur").value;
    const inputDomisili = document.getElementById("domisili").value;
    const newUserData = {
        nama: inputNama,
        umur: inputUmur,
        domisili: inputDomisili,
    }
    putUserList(newUserData);
    renderUserList();
});

// Fungsi yang akan merender user list jika browser baru kembali digunakan dan telah terdapat data
window.addEventListener("load", function () {
    if (checkForStorage()) {
        // Jika local storage telah berisi
        if (localStorage.getItem(storageKey) !== null) {
            const userData = getUserList();
            renderUserList(userData);
        }
    }
    else {
        alert("Browser yang Anda gunakan tidak mendukung Web Storage")
    }
});

