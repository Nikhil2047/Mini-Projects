var timer = 60;
var score = 0;
var hitVal;


function getHit(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector("#hitList").textContent = hitVal;
}


function getScores(){
    score += 10;
    document.querySelector("#myScore").textContent = score;
}


function runTimer(){
    let timeInt = setInterval(()=>{
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over, Your Score is = ${score}</h1>`
        }
    },1000)
}



function makeBubble(){
    let clutter ="";

    for (let i=1;i<=161;i++){
        let random = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;

}

document.querySelector("#pbtm").addEventListener("click", function(details){
    let value = Number(details.target.textContent)
    if(value === hitVal){
        getScores();
        getHit();
        makeBubble();
    }
})

getHit();
makeBubble();
runTimer();