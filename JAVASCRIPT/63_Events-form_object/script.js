const userNameInput = document.querySelector("#userNameInput");
const paragraph = document.querySelector("p");
const form = document.querySelector("form");

// userNameInput.addEventListener("click", () => {
//   console.log("input click");
// });

// ===== input event

// userNameInput.addEventListener("input", (e) => {
//   paragraph.innerText = e.target.value;
//   console.log(e.target.value);
// });

//======on change event is fired when we click outside after enter value also work like blur

// userNameInput.addEventListener("change", (e) => {
//   paragraph.innerText = e.target.value;
//   console.log(e.target.value);
// });

//====== focuc

// userNameInput.addEventListener("focus", (e) => {
//   paragraph.innerText = e.target.value;
//   console.log(e.target.value);
//   console.log(e.type);
// });

//====== blur

// userNameInput.addEventListener("blur", (e) => {
//   paragraph.innerText = e.target.value;
//   console.log(e.target.value);
//   console.log(e.type);
// });

//=== form submit===

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const myFormData = new FormData(form);
  for (p of myFormData.entries()) {
    console.log(p);
  }
});
