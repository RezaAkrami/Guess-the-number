// ==== Define game variables ====

let 
min=1,
max=10, 
guessLeft=3,
winNumber=Math.floor(Math.random()*(max-min+1)+min);

// ==== Define ui variables ====
let minNum = document.querySelector('.min-num');
let maxNum = document.querySelector('.max-num');
let game = document.querySelector('#game');
let guessInput = document.querySelector('#guss-input');
let submitBtn = document.querySelector('#submit-Btn');
let message = document.querySelector('.massage');

// add min and max num to the DOM
minNum.textContent=min;
maxNum.textContent=max;

// ==== submit Event Listener ====
submitBtn.addEventListener('click',()=>{

    // Convert guessInput value to number
    let guess = Number(guessInput.value);

    //cheack input value full or empty
    if(guess=="" ){
        showMassage(`please Enter a number between min and max`,'#ffd034')
    }else{
       
    }
    
})

// show message function
function showMassage(msg,color){
    message.textContent=msg;
    message.style.color=color;
    guessInput.style.border= `1px solid ${color}`;
    guessInput.value="";
}