const img = document.querySelectorAll(".content");
const li = document.querySelectorAll("li");

let lastActive = 0;

li.forEach((item, index) => {
  item.addEventListener("click", () => {
    li[lastActive].classList.remove("active");
    img[lastActive].classList.remove("show");

    item.classList.add("active");
    img[index].classList.add("show");

    lastActive = index;
  });
});
