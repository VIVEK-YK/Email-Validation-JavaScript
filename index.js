
let regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let emailVal = document.getElementById("email");
let submitBtn = document.getElementById("submit");
let myText = document.getElementById("text");

// function validateform(){
emailVal.addEventListener("input", (e) => {
    e.preventDefault();
  if (emailVal.value.match(regEx)) {
    myText.textContent = "Valid Email";
    myText.style.color = "blue";
    return true;
  } else {
    myText.textContent = "Invalid Email";
    myText.style.color = "#a52a2a";
    return false;
  }
});
// }
