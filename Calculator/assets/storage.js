// Tipe storage yang digunakan: Local Storage

const CACHE_KEY = "calculation_history";

function checkForStorage() {
    return (typeof (Storage) !== "undefined");
}

function putHistory(data) {
    if (checkForStorage()) {
        // Variable di bawah akan dijadikan array yang berisi beberapa data object dari object calculator 
        let historyData = null;

        // Jika localStorage dengan key CACHE_KEY masih kosong
        if (localStorage.getItem(CACHE_KEY) === null) {
            // Tapi ingat bahwa tipe data dari array adalah Object di JS
            historyData = [];
        }
        else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }

        // Fungsi unshift() menambah data ke index 0 array
        historyData.unshift(data);

        // Kondisi if ini diterapkan agar yang tampil hanya 5 kalkulasi terakhir dari pengguna
        if (historyData.length > 5) {
            // Fungsi pop() menghapus data belakang pada array
            historyData.pop();
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
    else {
        alert("Browser tidak mendukung app Web Storage!");
    }
}

function showHistory() {
    if (checkForStorage()) {
        return (JSON.parse(localStorage.getItem(CACHE_KEY)) || []);
    }
    else {
        return ([]);
    }
}

function renderHistory() {
    // const historyData dibawah adalah sebuah array
    const historyData = showHistory();

    // let dibawah untuk men-drop data ke HTML nya pake appendChild()
    let historyList = document.querySelector("#historyList");

    historyList.innerHTML = "";

    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";

        historyList.appendChild(row);
    }
}

// Fungsi renderHistory dipanggil agar data history muncul ketika website pertama kali dijalankan
renderHistory();
