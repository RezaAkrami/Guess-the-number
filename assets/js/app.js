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
    if(guessInput.value=="" ){
        showMassage(`please Enter a number `,'#ffd034')
    }else{
        // ==== check true value ====
       if(isNaN(guess) || guess>max || guess<min){
           // false value
        showMassage(`please Enter a number between min and max` , `darkred`);
       }else{
           //true value
           checkGuess(guess);
       }
    }
    
})

// show message function
function showMassage(msg,color){
    message.textContent=msg;
    message.style.color=color;
    guessInput.style.border= `1px solid ${color}`;
    guessInput.value="";
}

// check true or false Guess
function checkGuess(guess){

    if(guess==winNumber){
        
    }else{
        showMassage(`${guess} is false . ${guessLeft} remaning . try again ... ` , `red`);
        guessInput.value="";
    }
}
console.log(winNumber);