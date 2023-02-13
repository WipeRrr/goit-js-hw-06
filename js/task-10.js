function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);

btnDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  divEl.innerHTML = '<div id="boxes"></div>';
}

function createBoxes(amount) {
  amount = input.value;

  for (let index = 0; index < amount; index += 1) {
    let div = document.createElement('div');
    div.style.width = index * 10 + 30 + 'px';
    div.style.height = index * 10 + 30 + 'px';
    div.style.backgroundColor = getRandomHexColor();
    console.log(div);
    divEl.append(div);
  }
}
