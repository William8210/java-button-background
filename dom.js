document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Function to generate a random hexadecimal color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Event listener to change the color of the box
  changeColorBtn.addEventListener("click", () => {
    const newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
