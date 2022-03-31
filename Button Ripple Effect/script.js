const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    // get the point of x and y
    const x = e.clientX;
    const y = e.clientY;

    // get the max left and top point of button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // get the exactly mouse clicked in the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    // can't use this property when using (){} style
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
