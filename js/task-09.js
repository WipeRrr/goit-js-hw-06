function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector('.change-color');
const changedColor = document.querySelector('.color');
const bodyEl = document.querySelector('body');
console.log(bodyEl.style)
btnColor.addEventListener('click', onBtnColorClick);

function onBtnColorClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  changedColor.textContent = getRandomHexColor();
}