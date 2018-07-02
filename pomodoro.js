let secondsRemaining = 10;
const tickDelay = 1000;
let clock;
let blink_flag;
let timer;

function start() {
    tick();
}

function tick() {
    secondsRemaining -= 1;
    
    if (secondsRemaining >= 0) {
        updateClock();
        timer = setTimeout(tick, tickDelay);
    } else {
        play_single_sound()
       blink_flag = setInterval(blink, 1000);
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
    clearInterval(blink_flag)
    clock.style.color = 'black';
    secondsRemaining = 10;
    updateClock();
}


function pause(){
    clearTimeout(timer);

}