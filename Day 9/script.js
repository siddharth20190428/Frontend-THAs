let container = document.getElementById("container");

for (let i = 0; i < 36; i++) {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");
let booked = document.querySelector(".booked");
let remaining = document.querySelector(".remaining");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let bookedValue = parseInt(booked.innerText);
    let remainingValue = parseInt(remaining.innerText);
    if (box.classList.contains("boxClicked")) {
      box.classList.remove("boxClicked");
      bookedValue -= 1;
      remainingValue += 1;
      booked.innerText = bookedValue;
      remaining.innerText = remainingValue;
    } else {
      box.classList.add("boxClicked");
      bookedValue += 1;
      remainingValue -= 1;
      booked.innerText = bookedValue;
      remaining.innerText = remainingValue;
    }
  });
});
