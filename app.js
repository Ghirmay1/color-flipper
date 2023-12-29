let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("increase-ten")) {
      count += 10;
    } else if (styles.contains("decrease-ten")) {
      count -= 10;
    } else if (styles.contains("random")) {
      const randomArray = Array.from({ length: 10 }, () =>
        Math.random() > 0.5 ? 10 : -10
      );
      const randomIndex = Math.floor(Math.random() * randomArray.length);
      count += randomArray[randomIndex];
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
