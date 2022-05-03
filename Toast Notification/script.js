const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Please don't click this!", "You bother me!", "Come on -_- !!!", "Oh man, you are criminal!"];
const types = ["info", "success", "warning", "error"];

button.addEventListener("click", () => {
  createNotification("", getRandomTypeColor());
});

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : "info");

  notif.innerText = message ? message : getRandomNotificationMessage();

  toasts.append(notif);

  setTimeout(() => {
    notif.remove(); // remove element permanently from the DOM
  }, 3000);
}

function getRandomNotificationMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomTypeColor() {
  return types[Math.floor(Math.random() * types.length)];
}
