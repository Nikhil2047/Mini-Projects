let buttonColors = ["red","green","blue","yellow"];

let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;

document.addEventListener("keypress",()=>{
    if(!started){
        started = true;
        nextSequence();
    }
})

const btns = document.querySelectorAll(".btn");

btns.forEach((button)=>{
    button.addEventListener("click",(event)=>{
        let userChoosenColor = event.target.id;
        userClickedPattern.push(userChoosenColor);
        animatePress(userChoosenColor);
        checkAnswer(userClickedPattern.length - 1);

    })
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
        if(userClickedPattern.length == gamePattern.length){
            setTimeout(()=>{
                nextSequence();
            })
        }

    }else{
        document.querySelector("h1").innerText = "Game over, please restart."
        document.querySelector("body").classList.add("game-over");
        setTimeout(()=>{
            document.querySelector("body").classList.remove("game-over");
        },200);
        startOver();
    }
}


function nextSequence(){
    userClickedPattern = [];
    level++;
    document.querySelector("h1").innerText = "Level " + level;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    document.querySelector("#" + randomChoosenColor).setAttribute("style","opacity:0.3");
    setTimeout(()=>{
        document.querySelector("#" + randomChoosenColor).setAttribute("style","opacity:1");
    },200)
}


function animatePress(color){
    document.querySelector("#" + color).classList.add("pressed");
    setTimeout(()=>{
        document.querySelector("#" + color).classList.remove("pressed")
    },200)
}

function startOver(){
    level = 0;
    gamePattern =[];
    started = false;
}

