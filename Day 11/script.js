import questions from "./question.js";

let container = document.querySelector(".container");
let scoreEl = document.querySelector(".score");
let buttons = document.querySelectorAll(".op-btn");
let questionElem = document.querySelector(".question");
let optionElems = document.querySelectorAll(".option");
let stats = document.querySelector(".stats");
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
      button.style.background = "green";
      score++;
      scoreEl.innerHTML = `Score : ${score}`;
      console.log(qNo);
      if (qNo == 4) {
        alert(
          `Congratulations! You completed the Quiz with a score of ${score}`
        );
        return;
      }
    }
    button.style.background = "red";
    qNo++;
    loadQuestion(qNo);
  });
});

loadQuestion(qNo);
