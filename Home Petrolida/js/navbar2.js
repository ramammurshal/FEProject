const btnNav = document.getElementById("btn-nav");
const btnBellNav = document.getElementById("btn-bell-nav");
const listLinkNav = document.getElementById("list-link-nav");
const notifMobile = document.getElementById("notif-mobile");
const imgBtnNav = document.getElementById("img-btn-nav");

btnNav.addEventListener("click", () => {
  if (notifMobile.classList.contains("show")) {
    notifMobile.classList.remove("show");
    notifMobile.classList.remove("animate__slideInLeft");
    imgBtnNav.src = "img/hamb-nav.svg";

    if (listLinkNav.classList.contains("responsive")) {
      listLinkNav.classList.remove("responsive", "animate__slideInLeft");
    }
  } else if (!listLinkNav.classList.contains("responsive")) {
    listLinkNav.className += " responsive animate__slideInLeft";
    imgBtnNav.src = "img/exit-nav.svg";
  } else if (listLinkNav.classList.contains("responsive")) {
    listLinkNav.classList.remove("responsive", "animate__slideInLeft");
    imgBtnNav.src = "img/hamb-nav.svg";
  }
});

btnBellNav.addEventListener("click", () => {
  if (!notifMobile.classList.contains("show")) {
    notifMobile.className += " show";
    notifMobile.classList.add("animate__slideInLeft");
    imgBtnNav.src = "img/exit-nav.svg";
  }
});
