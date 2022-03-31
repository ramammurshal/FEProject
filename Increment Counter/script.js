const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    // + digunakan utk mengubah string jadi number
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 250;

    if (c < target) {
      // Math.ceil untuk naikan angka koma jadi int atas
      // Contoh 1,3 jadi 2
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
