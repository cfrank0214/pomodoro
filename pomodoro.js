let secondsRemaining = 10;
const tickDelay = 1000;
let clock;
let blink_flag;
let timer;

function start() {
    document.getElementById("reset").disabled = false;
    document.getElementById("pause").disabled = false;
    tick();
}

function tick() {
    secondsRemaining -= 1;
    if (secondsRemaining >= 0) {
        updateClock();
        timer = updatedTimer();

    } else {
        play_single_sound()
        blink()
        document.getElementById("pause").disabled = true;
    }
}

function updatedTimer() {
    return setTimeout(function () {
        var millis = Date.now() - start;
        tick();
        return Math.floor(millis / 1000);
        // expected output : seconds elapsed = 1
    }, 1000);
}

function blink() {
    clock.setAttribute("style", "animation: blinker 1s ease infinite")

}

function updateClock() {
    clock = document.getElementById('clock');
    let countDownFormated = '';
    let mins = Math.floor(secondsRemaining / 60);
    let secs = secondsRemaining % 60;

    countDownFormated += "" + mins + ":" + (secs < 10 ? "0" : "");
    countDownFormated += "" + secs;
    clock.textContent = countDownFormated;
}

function play_single_sound() {
    document.getElementById('timeup').play();
}


function reset() {
    clearInterval(blink_flag)
    clock.setAttribute("style", "animation: none")
    secondsRemaining = 10;
    updateClock();
}


function pause() {
    clearTimeout(timer);

}