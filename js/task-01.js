const categoryEl = document.querySelector('#categories');

const categoryAllEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryAllEl.length}`);

console.log('');

for (let i = 0; i < categoryAllEl.length; i += 1) {
  const categoryNameEl = categoryEl.children[i].querySelector(`h2`);
  console.log(`Category: ${categoryNameEl.textContent}`);
  const amounOfAnimal = categoryEl.children[i].querySelectorAll(`li`);
  console.log(`Elements: ${amounOfAnimal.length}`);
  console.log(``);
}
