console.log("a game by Ismail Halili aka Izzy, have fun :D!");


let greenLight = document.getElementById("green");
let redLight = document.getElementById("red");
let yellowLight = document.getElementById("yellow");
let yourTime = document.getElementById("yourtime");
let feedback = document.getElementById("feedback");
let isGreen = false;
let finished = false;
let alphaTime = Date.now();
let betaTime = Date.now();


function startGame(){
    if(finished){
        finished = false;
    }

    if(!isGreen){
        yourTime.innerHTML ="<strong>Good luck</strong>";
        feedback.innerText =". . .";
        //rot yellow
        redLight.style.backgroundColor = "red";

        setTimeout(function(){
            redLight.style.backgroundColor="rgba(209, 20, 20, 0.164)";
            yellowLight.style.backgroundColor ="yellow";
        }, Math.floor(Math.random()*3000+ 1000));

        setTimeout(function(){
            yellowLight.style.backgroundColor ="rgba(255, 255, 0, 0.287)";
            greenLight.style.backgroundColor="green";
            alphaTime = Date.now();
            isGreen = true;
        }, Math.floor(Math.random()*4000 + 2000));
    }

}

function throttle(){
    if(isGreen){
        betaTime = Date.now();
        deltaTime = betaTime - alphaTime;
        greenLight.style.backgroundColor = "rgba(0, 128, 0, 0.109)";
        isGreen = false;
        finished = true;
        console.log(deltaTime/1000 + " seconds");
        if(finished){
            yourTime.innerText = deltaTime/1000 + " seconds";
        }

        giveFeedback();
    }
}

function giveFeedback(){
    if(deltaTime < 350){
        feedback.innerText = "WOW, you are a beast! Your opponent will have difficulties against you. ";
    } else if(deltaTime < 650){
        feedback.innerText = "You are good, but to be unstoppable, you need to be unbelievably good.";
    } else {
        feedback.innerText ="Snoozer... Try again. You'll definetely lose the drag race.";
    }
}


function hearDragrace(){
    let audio = new Audio("scripts/audio/dragrace.mp3");
    audio.play();
    console.log("free sound for non-commercial use found on: https://www.freesoundeffects.com/free-track/corvette-pass-466332/ ")
}
  