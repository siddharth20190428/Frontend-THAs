import questions from "./question.js";

let container = document.querySelector(".container");
let scoreEl = document.querySelector(".score");
let buttons = document.querySelectorAll(".op-btn");
let questionElem = document.querySelector(".question");
let optionElems = document.querySelectorAll(".option");
let stats = document.querySelector(".stats");

var modal = document.getElementById("myModal");
var modalMsg = document.getElementById("modal-message");
var span = document.getElementsByClassName("close")[0];

let qNo = 0;
let score = 0;

function loadQuestion(num) {
  let ques = questions[num];
  stats.innerHTML = `Question ${num + 1} of 5`;
  questionElem = document.querySelector(".question");
  optionElems = document.querySelectorAll(".option");
  questionElem.innerHTML = ques.question;
  optionElems.forEach((opt, ind) => {
    opt.innerHTML = ques[`option${ind + 1}`];
  });
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (optionElems[index].innerHTML == questions[qNo].answer) {
      score++;
      scoreEl.innerHTML = `Score : ${score}`;
      button.classList.add("green");
    } else {
      button.classList.add("red");
    }
    if (qNo == 4) {
      if (score == 5) {
        modalMsg.innerHTML = `Congratulations! You won`;
        modalMsg.style.color = "green";
      } else {
        modalMsg.innerHTML = `Sorry! You lost, your score was ${score}`;
        modalMsg.style.color = "red";
      }
      modal.style.display = "block";
      return;
    }
    qNo++;
    setTimeout(() => {
      button.classList.remove("green", "red");
      loadQuestion(qNo);
    }, 1000);
  });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

loadQuestion(qNo);
