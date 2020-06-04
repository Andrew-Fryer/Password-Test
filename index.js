let form = document.getElementById("my-form");
let usernameInput = document.getElementById("my-username");
let passwordInput = document.getElementById("my-password");

const isCorrect = password => password.length === 4;

form.onsubmit = e => {
  e.preventDefault();
  console.log("form submitted");

  // let cred = {
  //   id: usernameInput.value,
  //   password: passwordInput.value,
  // };
  if(isCorrect(passwordInput.value)) {
    let cred = new PasswordCredential({
      id: usernameInput.value,
      password: "testing", //"passwordInput.value",
    });
    window.navigator.credentials.store(cred);
  }
};

console.log(window.navigator.credentials);

window.navigator.credentials.get({password: true}).then(c => {
  console.log(c);
});
