const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    toggleTrick(e.target);
  });
});

function toggleTrick(toggleClicked) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === toggleClicked) {
      fast.checked = false;
    }
    if (cheap === toggleClicked) {
      good.checked = false;
    }
    if (fast === toggleClicked) {
      cheap.checked = false;
    }
  }
}
