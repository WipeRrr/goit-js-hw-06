const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement(`li`)
    liEl.textContent = ingredient;
    liEl.classList.add(`item`)
  
    return liEl
  });
};

const ulEl = document.querySelector(`#ingredients`)
const elements = makeIngredients(ingredients)
  ulEl.append(...elements)








//LONG METHOD

// const liEl1 = document.createElement(`li`)
// liEl1.textContent = ingredients[0];
// liEl1.classList.add(`item`)
// console.log(liEl1.textContent)

// const liEl2 = document.createElement(`li`)
// liEl2.textContent = ingredients[1];
// liEl2.classList.add(`item`)
// console.log(liEl2.textContent)

// const liEl3 = document.createElement(`li`)
// liEl3.textContent = ingredients[2];
// liEl3.classList.add(`item`)
// console.log(liEl3.textContent)

// const liEl4 = document.createElement(`li`)
// liEl4.textContent = ingredients[3];
// liEl4.classList.add(`item`)
// console.log(liEl4.textContent)

// const liEl5 = document.createElement(`li`)
// liEl5.textContent = ingredients[4];
// liEl5.classList.add(`item`)
// console.log(liEl5.textContent)

// const liEl6 = document.createElement(`li`)
// liEl6.textContent = ingredients[5];
// liEl6.classList.add(`item`)
// console.log(liEl6.textContent)

// const ulEl = document.querySelector(`#ingredients`)
// ulEl.append(liEl1,liEl2,liEl3,liEl4,liEl5,liEl6)



// OLD SCHOOL

// const elements = []
// for (let i = 0; i < ingredients.length; i +=1) {
//   const liEl = document.createElement(`li`)
//  liEl.textContent = ingredients[i];
//   liEl.classList.add(`item`)
//   elements.push(liEl)
// }
// console.log(elements)


// const ulEl = document.querySelector(`#ingredients`)
//  ulEl.append(...elements)
