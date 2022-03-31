//Javascipt Code
const calculator = {
    displayNumber: "0",
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
}
//Objek diatas digunakan sebagai tempat menyimpan data dan kondisi pada calculator 

//Fungsi yang digunakan untuk menampilkan angka ke layar
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

//Fungsi yang digunakan untuk menghapus tampilan dan data kalkulator
function clearCalculator() {
    calculator.displayNumber = "0";
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

//Fungsi yang digunakan untuk menambahkan digit pada display (backend)
function inputDigit(digit) {
    //Kondisi IF untuk awal pengguna menekan tombol
    if (calculator.displayNumber === '0') {
        calculator.displayNumber = digit;
    }
    else {
        calculator.displayNumber += digit;
    }
}

function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber *= -1;
}

function handleOperator(operator) {
    //IF terpenuhi jika nilai calculator.waitingForSecondNumber adalah false atau masih pada angka pertama
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        //Mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    }
    else {
        alert("Operator sudah ditetapkan");
    }
}

function performCalculator() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    //Fungsi parseInt digunakan untuk mengubah tipe data string menjadi integer
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }
    else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    const history = {
        firstNumber: calculator.firstNumber,
        secondNumber: calculator.displayNumber,
        operator: calculator.operator,
        result: result
    }
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
}

//Mendapatkan seluruh element HTML yang memiliki class button, let buttons dibawah adalah sebuah string
let buttons = document.querySelectorAll(".button");
//Perulangan 'for of' untuk menerapkan event pada masing2 button
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        //Mendapatkan object element yang sedang diklik
        const target = event.target;

        //Jika button yang ditekan adalah tombol clear
        if (target.classList.contains("clear")) {
            //Disini, kita dapat memanfaatkan event.classList untuk melihat nilai class apa saja dalam bentuk array yang ada pada element target
            //Kemudian menggunakan contains() yang merupakan method dari array yang berguna utk memastikan nilai yang terkandung di dalam array tsb
            clearCalculator();
            updateDisplay();
            return;
            //Di return agar statement yang bawah tidak di jalankan
        }

        if (target.classList.contains("negative")) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if (target.classList.contains("equals")) {
            performCalculator();
            updateDisplay();
            return;
        }

        if (target.classList.contains("operator")) {
            handleOperator(target.innerText);
            return;
        }

        inputDigit(target.innerText);
        updateDisplay();
    })
}
