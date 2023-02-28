function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const nameBgColor = document.querySelector('.color');
const randomColor = getRandomHexColor();

btnChangeColor.addEventListener("click", (event)=>{
    bgColor.style.backgroundColor = randomColor;
    nameBgColor.textContent = randomColor;
});