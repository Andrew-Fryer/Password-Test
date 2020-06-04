let el = document.getElementById("my-form");
el.onsubmit = e => {
  e.preventDefault();
  console.log("form submitted");

  // refreshing the page can signal to the browser that the form has been submitted
  window.history.go()
};

const breakFn = (e, s) => {
  console.log(s); // put breakpoint here
}
for(let elem of document.querySelectorAll('*')) {
  const event = "keypress";
  elem.addEventListener(event, e => breakFn(e, `Capturing: ${elem.tagName}`), true);
  elem.addEventListener(event, e => breakFn(e, `Bubbling: ${elem.tagName}`));
}
