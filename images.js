const images = [
    "url('https://i.vgy.me/3CCEOo.jpg')",
    "url('https://i.vgy.me/WUEBr5.jpg')",
    "url('https://i.vgy.me/zgoPZ0.jpg')",
    "url('https://i.vgy.me/lMxoig.jpg')",
    // Add more image URLs as needed
  ];
  
  const imageBtn = document.getElementById("image-btn");
  
  imageBtn.addEventListener("click", function () {
    const randomIndex = getRandomNumber(images.length);
    document.body.style.backgroundImage = images[randomIndex];
  });
  
  function getRandomNumber(length) {
    return Math.floor(Math.random() * length);
  }
  
  