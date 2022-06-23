const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const passwordInput = e.target.value;
  const passwordLength = passwordInput.length;
  
  const blurValue = 20 - passwordLength * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
