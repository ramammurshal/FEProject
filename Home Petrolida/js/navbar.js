const btnNav = document.getElementById("btn-nav");
const listLinkNav = document.getElementById("list-link-nav");
const imgBtnNav = document.getElementById("img-btn-nav");

btnNav.addEventListener("click", () => {
  if (!listLinkNav.classList.contains("responsive")) {
    listLinkNav.className += " responsive animate__slideInLeft";
    imgBtnNav.src = "img/exit-nav.svg";
  } else {
    listLinkNav.classList.remove("responsive", "animate__slideInLeft");
    imgBtnNav.src = "img/hamb-nav.svg";
  }
});
