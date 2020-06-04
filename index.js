let passwordInput = document.getElementById("my-password");

const isCorrect = password => password.length === 4;

passwordInput.onchange = () => {
  if(isCorrect(passwordInput.value)) {
    passwordInput.setCustomValidity("");
  } else {
    passwordInput.setCustomValidity("Password is incorrect");
  }
}

let form = document.getElementById("my-form");
form.onsubmit = e => {
  e.preventDefault();
  console.log("form submitted");
};

const breakFn = s => {
  console.log(s); // put a breakpoint here
}
for(let elem of document.querySelectorAll('*')) {
  
  elem.addEventListener("submit", e => breakFn(`Capturing: ${elem.tagName}`), true);
  elem.addEventListener("submit", e => breakFn(`Bubbling: ${elem.tagName}`));
}
