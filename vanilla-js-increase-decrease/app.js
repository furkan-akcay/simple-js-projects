const countDiv = document.querySelector(".number");
const decreaseButton = document.querySelector(".decrease-button");
const resetButton = document.querySelector(".reset-button");
const increaseButton = document.querySelector(".increase-button");

decreaseButton.addEventListener("click", () => {
    countDiv.innerHTML = parseInt(countDiv.innerHTML) - 1;
});
increaseButton.addEventListener("click", () => {
    countDiv.innerHTML = parseInt(countDiv.innerHTML) + 1;
});
resetButton.addEventListener("click", () => {
    countDiv.innerHTML = 0;
});
