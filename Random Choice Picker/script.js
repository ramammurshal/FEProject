const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 50);

        randomSelect();
    }
})

// Fungsi untuk bikin beberapa kotak tag
function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

// Fungsi utama utk select random tag yang sudah dibuat
function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 200);
        }
    }, 200);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 200)

    }, times * 200);

    // Ingat bahwa setInterval dan setTimeout akan bekerja sendiri sesuai waktunya
}

// Return 1 element tag secara random
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    const returnTag = tags[Math.floor(Math.random() * tags.length)];
    return returnTag;
}

// Mewarnai tag
function highlightTag(tag) {
    tag.classList.add('highlight');
}

// Hapus warna tag
function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
