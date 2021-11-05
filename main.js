let newInput = document.querySelector("#text");
let newBtn = document.querySelector("#submit");
let myDiv = document.querySelector("#mylist");

newBtn.addEventListener("click", () => {
  let newList = document.createElement("li");
  newList.textContent = newInput.value;
  myDiv.appendChild(newList);
  newInput.value = "";
});
