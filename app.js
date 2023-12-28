const christmasColors = ["green", "red", "white", "gold"];
const christmasBtn = document.getElementById("christmas-btn");
const halloweenColors = ["orange", "black", "purple"];
const halloweenBtn = document.getElementById("halloween-btn");
const images = [
  "url('https://i.vgy.me/3CCEOo.jpg')",
  "url('https://i.vgy.me/WUEBr5.jpg')",
  "url('https://i.vgy.me/zgoPZ0.jpg')",
  "url('https://i.vgy.me/lMxoig.jpg')",
  // Add more image URLs as needed
];
const imageBtn = document.getElementById("image-btn");

christmasBtn.addEventListener("click", function () {
  const randomIndex = getRandomNumber(christmasColors.length);
  document.body.style.background = christmasColors[randomIndex];
});

halloweenBtn.addEventListener("click", function () {
  const randomIndex = getRandomNumber(halloweenColors.length);
  document.body.style.background = halloweenColors[randomIndex];
});

imageBtn.addEventListener("click", function () {
  const randomIndex = getRandomNumber(images.length);
  document.body.style.backgroundImage = images[randomIndex];
});

function getRandomNumber(length) {
  return Math.floor(Math.random() * length);
}

