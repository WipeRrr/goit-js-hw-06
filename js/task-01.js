const categoryEl = document.querySelector('#categories');

const categoryAllEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryAllEl.length}`);

console.log('');

const categoryNameEl = document.querySelector('.item h2');
console.log(`Category: ${categoryNameEl.textContent}`);
const amounOfAnimal = categoryEl.children[0].querySelectorAll(`li`);
console.log(`Elements: ${amounOfAnimal.length}`);

console.log(``);

const categoryNameEl2 = categoryEl.children[1].querySelector(`h2`);
console.log(`Category: ${categoryNameEl2.textContent}`);
const amounOfProducts = categoryEl.children[1].querySelectorAll(`li`);
console.log(`Elements: ${amounOfProducts.length}`);

console.log(``);

const categoryNameEl3 = categoryEl.children[2].querySelector(`h2`);
console.log(`Category: ${categoryNameEl3.textContent}`);
const amounOfTechnologies = categoryEl.children[2].querySelectorAll(`li`);
console.log(`Elements: ${amounOfTechnologies.length}`);
