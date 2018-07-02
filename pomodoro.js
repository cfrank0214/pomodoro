let secondsRemaining = 5;
const tickDelay = 1000;
let clock;
let blinik_flag;

function start() {
    setTimeout(tick, tickDelay);
}

function tick() {
    secondsRemaining -= 1;
    
    if (secondsRemaining >= 0) {
        updateClock();
        setTimeout(tick, tickDelay);
    } else {
        play_single_sound()
       blinik_flag = setInterval(blink, 1000);
    }
}

function blink () {
    clock.style.color = (clock.style.color == 'white' ? 'red' : 'white');

}

function updateClock() {
    clock = document.getElementById('clock');
    var countDownFormated = '';
    var mins = Math.floor(secondsRemaining / 60);
    var secs = secondsRemaining % 60;

    countDownFormated += "" + mins + ":" + (secs < 10 ? "0" : "");
    countDownFormated += "" + secs;
    clock.textContent = countDownFormated;
}

function play_single_sound() {
    document.getElementById('timeup').play();
}


function reset() {
    clearInterval(blinik_flag)
    clock.style.color = 'black';
    secondsRemaining = 5;
    updateClock();
}