const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    // Sedikit rumus untuk memudahkan perhitungan saja
    // Nilai dari triggerBottom ini tidak akan berubah
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            console.log(triggerBottom, boxTop);
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    });
}
