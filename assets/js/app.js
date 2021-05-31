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
let playAgain = document.querySelector('.play-again');

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
           guessLeft--;
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

// check true or false Guess and game over
function checkGuess(guess){

    if(guess==winNumber){
        // true guess
        gameOver(`${guess} is true . You are win .` , `green`);
    }else{
        // Check out the guess
        if(guessLeft<1){
            gameOver(`${winNumber} is true . You are not win . game over!!` , `red`);
        }else{
            // false guess
            showMassage(`${guess} is false . ${guessLeft} remaning . try again ... ` , `blue`);
            
        }
    }
}

// Game over function
function gameOver(msg,color){
    showMassage(msg,color);
    submitBtn.value="play again";
    submitBtn.style.border= `1px solid ${color}`;
    submitBtn.classList='play-again';
    guessInput.disabled=true;
    guessInput.value="";
    //submitBtn.disabled=true;
}

//  play Again function 
game.addEventListener('mousedown' , (e)=>{
    
    if(e.target.classList.contains("play-again")){
        window.location.reload();
    }
    
})
