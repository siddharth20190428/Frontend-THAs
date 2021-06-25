let cards = document.querySelectorAll(".card");
let timeParaEL = document.querySelector(".time p");
let time = 0;
let min = 0;
let sec = 0;
let flips = 0;

function win() {
  let matched = document.querySelectorAll(".matched");
  if (matched.length == 12) {
    alert(
      `Congratulations! You won you took ${min}:${sec} to complete the game.`
    );
  }
}

function shuffle() {
  cards.forEach((card) => {
    let ran = Math.floor(Math.random() * 10);
    card.style.order = ran;
  });
}

shuffle();

setInterval(() => {
  time++;
  min = Math.floor(time / 60);
  sec = time % 60;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  timeParaEL.innerHTML = `${min}:${sec}`;
}, 1000);

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("flip") && flips < 2) {
      card.classList.add("flip");
      flips++;
    }
    if (flips == 2) {
      let flipped_cards = document.querySelectorAll(".flip");
      setTimeout(() => {
        flips = 0;
        var s1 = flipped_cards[0].childNodes[3].src;
        var s2 = flipped_cards[1].childNodes[3].src;
        if (s1 == s2) {
          flipped_cards.forEach((card) => {
            card.classList.add("matched");
            win();
          });
        }
        flipped_cards.forEach((card) => card.classList.remove("flip"));
      }, 1000);
    }
  });
});
