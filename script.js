var timer = 60;
var score = 0;
var hitrn;

function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 192; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function playSound(soundId) {
    document.querySelector(soundId).play();
}

function runTimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(`#timerval`).textContent = timer;
        } else {
            clearInterval(timeint);
            playSound("#gameOverSound");
            document.querySelector("#pbtm").innerHTML = `<h1 style="font-size: 3rem; color: green;">Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector(`#hitval`).textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector(`#scoreval`).textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        playSound("#clickSound");
        increaseScore();
        makebubble();
        getNewHit();
    }
});

runTimer();
makebubble();
getNewHit();
