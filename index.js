let passwordInput = document.getElementById("my-password");
let form = document.getElementById("my-form");

const isCorrect = password => password.length === 4;

passwordInput.onchange = () => {
  if(isCorrect(passwordInput.value)) {
    passwordInput.setCustomValidity("");
  } else {
    passwordInput.setCustomValidity("Password is incorrect");
  }
}

passwordInput.addEventListener("invalid", e => {
  //form.reset();
  passwordInput.value = "";
  e.preventDefault();
});

form.onsubmit = e => {
  e.preventDefault();
  console.log("form submitted");

  setTimeout(function(){
    form.hidden = true; // this happens for the password modal anyway
    history.replaceState(null, document.title); // this should signal to the browser that the login was successful
}, 1);
};
