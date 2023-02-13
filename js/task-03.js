const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makeImages = images => {
  return images.map(image => {
    
    const imgEl = document.createElement(`img`);
    const liEl = document.createElement(`li`);
    liEl.appendChild(imgEl);
    imgEl.src = image.url;
    imgEl.alt = image.alt;
    imgEl.width = 400;
    imgEl.height = 225;
    liEl.classList.add(`flex`)
  
    return liEl
  });
};



const ulEl = document.querySelector(`.gallery`)
const elements = makeImages(images)
  ulEl.append(...elements)