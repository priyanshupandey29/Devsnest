const card = document.querySelectorAll(".cards");

let hasFlipppedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipcards() {
  if (lockBoard) return;
  this.classList.add("flip");

  if (!hasFlipppedCard) {
    hasFlipppedCard = true;
    firstCard = this;
  } else {
    hasFlipppedCard = false;
    secondCard = this;
    checkForMatches();
  }
}
function checkForMatches() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
  } else {
    unflipCards();
  }
}
function disableCards() {
  firstCard.removeEventListener("click", flipcards);
  secondCard.removeEventListener("click", flipcards);
}
function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1500);
}
console.log("Function was executed");
card.forEach((cards) => cards.addEventListener("click", flipcards));
