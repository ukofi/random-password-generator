const btnGenerate = document.querySelector(".btn");

const inputEle = document.getElementById("input");

const faCopy = document.querySelector(".fa-copy");

const alertContainer = document.querySelector(".alert-container");

btnGenerate.addEventListener("click", () => {
  createPassword();
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 12;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars[randomNumber];
  }
  inputEle.value = password;
  alertContainer.innerText = "Password copied to clipboard!";
  console.log(password);
}

faCopy.addEventListener("click", () => {
  inputEle.select();
  inputEle.setSelectionRange(0, 99999); //for mobile devices
  navigator.clipboard.writeText(inputEle.value);
  document.execCommand("copy");

  alertContainer.classList.remove("active");

  setTimeout(() => {
    alertContainer.classList.add("active");
  }, 2000);
});
