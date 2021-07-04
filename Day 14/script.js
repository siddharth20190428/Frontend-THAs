let doubleClickDiv = document.querySelector(".double-click");
let keyDownDiv = document.querySelector(".key-down");
let downEl = document.querySelector(".down");

doubleClickDiv.addEventListener("dblclick", () => {
  doubleClickDiv.classList.toggle("enlarge");
});

document.addEventListener("keydown", (e) => {
  console.log(e);
  downEl.innerText = `You pressed ${e.key}, code ${e.code}`;
});
