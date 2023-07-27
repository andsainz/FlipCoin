let coin = document.querySelector("#coin")
let startBtn = document.querySelector("#play-button")
let resetBtn = document.querySelector("#reset-button")

let headsCounter=0;
let tailsCounter=0;

startBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2)

    coin.style.animation = "none";

    if(i) {
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards"
        }, 100);
        headsCounter++
    }else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards"
        }, 100);
        tailsCounter++
    }
    setTimeout(updateStats, 3000)
    disableButton();
})

function updateStats(){
    document.querySelector("#heads-count").textContent=`Heads: ${headsCounter}`
    document.querySelector("#tails-count").textContent=`Tails: ${tailsCounter}`
}

function disableButton(){
    startBtn.disabled = true;
    setTimeout(function(){
    startBtn.disabled = false;
    }, 3000);
}

resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    headsCounter = 0;
    tailsCounter = 0;
    updateStats();
});

document.getElementById('play-button').addEventListener('click', function() {
    var audio = new Audio('coin-return.mp3');
    audio.play();
});

document.getElementById('reset-button').addEventListener('click', function() {
    var audio = new Audio('mario-bros-die.mp3');
    audio.play();
});