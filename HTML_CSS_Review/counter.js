const incrementButton = document.getElementById("incrementButton");
const decrementButton = document.getElementById("decrementButton");
const counterDisplay = document.getElementById("counter");

incrementButton.addEventListener("click", function () {
  let currentCount = parseInt(counterDisplay.innerText, 10);
  currentCount += 1;
  counterDisplay.innerText = currentCount;
});
decrementButton.addEventListener("click", function () {
  if (parseInt(counterDisplay.innerText, 10) === 0) return;
  let currentCount = parseInt(counterDisplay.innerText, 10);
  currentCount -= 1;
  counterDisplay.innerText = currentCount;
});
