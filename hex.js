const halloweenColors = ["orange", "black", "purple"];
const halloweenBtn = document.getElementById("halloween-btn");

halloweenBtn.addEventListener("click", function () {
  const randomIndex = getRandomNumber(halloweenColors.length);
  document.body.style.backgroundColor = halloweenColors[randomIndex];
});

