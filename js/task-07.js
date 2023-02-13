const sizeControlBtn = document.querySelector('#font-size-control');
const labelText = document.querySelector('#text')
console.log(labelText.fontSize);
sizeControlBtn.addEventListener('input', onBtnScroll);

function onBtnScroll(event) {
    
    console.log(event.currentTarget.value);
    labelText.style.fontSize = event.currentTarget.value+"px";
   
}