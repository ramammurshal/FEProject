// INISIALISASI VARIABEL UNTUK MENAMPUNG ELEMENT HTML

// VARIABEL UNTUK KOTAK: STATISTIK TOTAL
// Field Total Menang
const localTotalVictoryField = document.getElementById("local-total-victory-field");
// Field Total Salah Terbanyak satu game
const localMaximumAttempField = document.getElementById("local-maximum-attemp-field");
// Button destroy data
const destroyDataButton = document.getElementById("destroy-data-button");

// VARIABEL UNTUK KOTAK: GAME UTAMA
// Begitupun dengan ini, perhatikan keyword akhir apakah button/display/field
// Button = tombol, display = div, field = tulisan
const playButton = document.getElementById("play-button");
const beforeGameDisplay = document.getElementById("before-game-display");
const duringGameDisplay = document.getElementById("during-game-display");
const afterGameDisplay = document.getElementById("after-game-display");
const answerButton1 = document.getElementById("answer-1-button");
const answerButton2 = document.getElementById("answer-2-button");
const answerButton3 = document.getElementById("answer-3-button");
const sessionUserAnswerField = document.getElementById("session-user-answer-field");
const sessionUserWrongAnswerField = document.getElementById("session-user-wrong-answer-field");
const sessionTrueAnswerField = document.getElementById("session-true-answer-field");

// VARIABEL UNTUK KOTAK: STATISTIK GAME
const sessionUserAttempsField = document.getElementById("session-user-attemps-amount-field");



// INISIALISASI FUNGSI UNTUK MENGHASILKAN JAWABAN PERMAINAN
function getAnswer() {
    // Memisah masing-masing dengan koma, let answer berupa array
    let answer = "123".split("");
    for (let i = 0; i < answer.length; i++) {
        // Ini sepertinya cuma *i saja ngga ditambah 1 cmiiw
        let j = Math.floor(Math.random() * (i + 1));
        //Menukar tempat isi array posisi i dan j
        let tmp = answer[i];
        answer[i] = answer[j];
        answer[j] = tmp;
    }
    // Return ini akan mengembalikan sebuah string answer bertipe data total string
    return answer.join("");
}



// INISIALISASI KEY UNTUK SESSION STORAGE (SEMENTARA)
// Untuk kotak game utama - jawaban string dari host
const sessionAnswerKey = "SESSION_ANSWER";
// Untuk kotak Statistik Game - Jumlah salah game
const sessionUserAttempsKey = "SESSION_USER_ATTEMPS";
// Untuk kotak --
const sessionUserIsPlayingKey = "SESSION_USER_IS_PLAYING";
// Untuk kotak statistik total - jumlah game dimenangkan
const localTotalVictoryKey = "LOCAL_TOTAL_VICTORIES_PLAYED";
// Untuk kotak statistik total - jumlah salah terbanyak dalam 1 game jika benar
const localMaximumAttempsKey = "LOCAL_MAXIMUM_ATTEMPTS";



// INISIALISASI SEMUA ITEM WEB STORAGE JIKA BELUM ADA ISINYA
window.addEventListener("load", function () {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.getItem(sessionAnswerKey) === null) {
            sessionStorage.setItem(sessionAnswerKey, "");
        }
        if (sessionStorage.getItem(sessionUserAttempsKey) === null) {
            sessionStorage.setItem(sessionUserAttempsKey, 0);
        }
        if (sessionStorage.getItem(sessionUserIsPlayingKey) === null) {
            sessionStorage.setItem(sessionUserIsPlayingKey, false);
        }
        if (localStorage.getItem(localTotalVictoryKey) === null) {
            localStorage.setItem(localTotalVictoryKey, 0);
        }
        if (localStorage.getItem(localMaximumAttempsKey) === null) {
            localStorage.setItem(localMaximumAttempsKey, 0);
        }
    }
    else {
        alert("Browser yang Anda gunakan tidak mendukung Web Storage");
    }
    // Untuk kotak statistik Game - jumlah salah pada game
    sessionUserAttempsField.innerText = sessionStorage.getItem(sessionUserAttempsKey);
    // Untuk kotak statistik total - jumlah game menang
    localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
    // Untuk kotak statistik total - jumlah salah terbanyak sekali main jika benar
    localMaximumAttempField.innerText = localStorage.getItem(localMaximumAttempsKey);
});



// Variable playButton yang merujuk pada button play pada kotak game utama
// Dimana jika ia di click, maka dia akan menyembunyikan div before dan memunculkan div during
playButton.addEventListener("click", function () {
    // Fungsi getAnswer() dibawah akan mengembalikan 3 karakter string sebagai jawaban dari host
    sessionStorage.setItem(sessionAnswerKey, getAnswer());
    beforeGameDisplay.setAttribute("hidden", true);
    duringGameDisplay.removeAttribute("hidden");
});



// Variable answerButton dibawah merujuk pada button angka 1 pada kotak game utama
// Jika ia di click, maka field jawaban user akan ditambahkan karakter 1
// Jika panjang field jawaban user telah 3, maka periksa menggunakan fungsi checkAnswer()
answerButton1.addEventListener("click", function () {
    sessionUserAnswerField.innerText += "1";
    if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
    }
});



// Sama dengan button 1 diatas
// Variable answerButton dibawah merujuk pada button angka 2 pada kotak game utama
// Jika ia di click, maka field jawaban user akan ditambahkan karakter 2
// Jika panjang field jawaban user telah 3, maka periksa menggunakan fungsi checkAnswer()
answerButton2.addEventListener("click", function () {
    sessionUserAnswerField.innerText += "2";
    if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
    }
});



// Kembali, sama dengan event listener yang diatas
// Variable answerButton dibawah merujuk pada button angka 3 pada kotak game utama
// Jika ia di click, maka field jawaban user akan ditambahkan karakter 3
// Jika panjang field jawaban user telah 3, maka periksa menggunakan fungsi checkAnswer()
answerButton3.addEventListener("click", function () {
    sessionUserAnswerField.innerText += "3";
    if (sessionUserAnswerField.innerText.length == 3) {
        checkAnswer(sessionUserAnswerField.innerText);
    }
});



// FUNGSI YANG AKAN MENGECEK APAKAH ISI FIELD JAWABAN USER BENAR ATAU TIDAK
function checkAnswer(userGuess) {
    const answer = sessionStorage.getItem(sessionAnswerKey);
    if (userGuess == answer) {
        duringGameDisplay.setAttribute("hidden", true);
        afterGameDisplay.removeAttribute("hidden");
        sessionTrueAnswerField.innerText = answer;
        updateScore();
    }
    else {
        const previousAttempAmount = parseInt(sessionStorage.getItem(sessionUserAttempsKey));
        sessionStorage.setItem(sessionUserAttempsKey, previousAttempAmount + 1);
        sessionUserAttempsField.innerText = sessionStorage.getItem(sessionUserAttempsKey);
        sessionUserAnswerField.innerText = "";
        sessionUserWrongAnswerField.innerText = userGuess;
    }
}



// FUNGSI YANG AKAN MENGUBAH DATA PADA STATISTIK TOTAL
// MENJADI 1 JAWABAN BENAR DAN JUMLAH SALAH UNTUK MENCAPAI JAWABAN BENAR TERSEBUT
function updateScore() {
    const sessionAttempsValue = parseInt(sessionStorage.getItem(sessionUserAttempsKey));
    const localAttempsValue = parseInt(localStorage.getItem(localMaximumAttempsKey));
    if (sessionAttempsValue > localAttempsValue) {
        localStorage.setItem(localMaximumAttempsKey, sessionAttempsValue);
        localMaximumAttempField.innerText = sessionAttempsValue;
    }
    const previousTotalVictoryAmount = parseInt(localStorage.getItem(localTotalVictoryKey));
    localStorage.setItem(localTotalVictoryKey, previousTotalVictoryAmount + 1);
    localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
}



// SEBELUM WINDOW DI LOAD KEMBALI, PROGRAM AKAN MEMPERBARUI DATA:
// - KOTAK GAME UTAMA
// - KOTAK STATISTIK GAME
window.addEventListener("beforeunload", function () {
    sessionUserAnswerField.innerText = "";
    sessionUserWrongAnswerField.innerText = "";
    sessionStorage.setItem(sessionUserAttempsKey, 0);
    sessionUserAttempsField.innerText = sessionStorage.getItem(sessionUserAttempsKey);
});



// Variable destroyDataButton merujuk pada button hapus pada kotak statistik total
// Jika ia diclick, maka ia akan menghapus semua isi storage yang ada, baik session maupun local
destroyDataButton.addEventListener("click", function () {
    sessionStorage.removeItem(sessionAnswerKey);
    sessionStorage.removeItem(sessionUserAttempsKey);
    sessionStorage.removeItem(sessionUserIsPlayingKey);
    localStorage.removeItem(localTotalVictoryKey);
    localStorage.removeItem(localMaximumAttempsKey);
    alert("Mohon me-refresh halaman ini kembali");
});

