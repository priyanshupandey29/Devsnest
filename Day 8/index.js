const box = document.querySelectorAll(".cell");
box.forEach((bo) =>
  bo.addEventListener("click", () => {
    bo.classList.toggle("cell-selected");
  })
);
