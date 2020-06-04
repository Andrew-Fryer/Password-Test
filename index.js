let el = document.getElementById("my-form");
el.onsubmit = e => {
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