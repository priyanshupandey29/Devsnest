/* Create the project shown in the lec. */
const box = document.querySelectorAll(".seats");
box.forEach((s) =>
  s.addEventListener("click", () => {
    s.classList.toggle("boxclicked");
    let bookedSeats = document.querySelectorAll(".boxclicked").length;
    let remainingSeats = 36 - bookedSeats;
    let bookedSeatsValue = document.querySelector(".seatsbooked");
    let remainingSeatsValue = document.querySelector(".seatsremaining");
    bookedSeatsValue.textContent = bookedSeats;
    remainingSeatsValue.textContent = remainingSeats;
  })
);
