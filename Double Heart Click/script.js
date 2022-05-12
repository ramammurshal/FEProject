const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClick = 0;

// We can use dblclick event instead
loveMe.addEventListener("click", (ev) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(ev);
      clickTime = 0; // Reset, mean user already make double click
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (ev) => {
  const heart = document.createElement("i");
  heart.className += "fas fa-heart";

  const x = ev.clientX;
  const y = ev.clientY;

  const leftOffset = ev.target.offsetLeft;
  const topOffset = ev.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClick;

  setTimeout(() => heart.remove(), 1000);
};
