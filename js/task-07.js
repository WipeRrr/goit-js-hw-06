const sizeControlBtn = document.querySelector('#font-size-control');
const labelText = document.querySelector('#text')


sizeControlBtn.addEventListener('input', onBtnScroll);
labelText.style.fontSize = sizeControlBtn.value+'px';

function onBtnScroll(event) {
    
    console.log(event.currentTarget.value);
    labelText.style.fontSize = event.currentTarget.value+"px";
   
}