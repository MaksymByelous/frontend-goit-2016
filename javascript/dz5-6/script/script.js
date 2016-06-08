var btnStatus = {
    start: 'Start',
    pause: 'Pause',
    continueT: 'Continue',
    clear: 'Clear'
};
var timer = {
    hour: 0,
    minute: 0,
    second: 0,
    milisecond: 0
};
var watch = document.querySelector('.watch-timer');
var timerHour = document.createElement('span');
timerHour.innerHTML = '0' + timer.hour;
watch.appendChild(timerHour);
var dots = document.createElement('span');
dots.innerHTML = ':';
watch.appendChild(dots);
var timerMinute = document.createElement('span');
timerMinute.innerHTML = '0' + timer.minute;
watch.appendChild(timerMinute);
var dots2 = document.createElement('span');
dots2.innerHTML = ':';
watch.appendChild(dots2);
var timerSecond = document.createElement('span');
timerSecond.innerHTML = '0' + timer.second;
watch.appendChild(timerSecond);
var timerMilisecond = document.createElement('p');
timerMilisecond.innerHTML = timer.milisecond;
watch.appendChild(timerMilisecond);
var startStopBtn = document.querySelector('.start-Pause-Cont');
startStopBtn.value,
startStopBtn.innerHTML = btnStatus.start;
var clearBtn = document.querySelector('.clear');
clearBtn.value,
clearBtn.innerHTML = btnStatus.clear;

var interval = 0;
var iterator = 1;
function timeOn() {
    interval = setInterval(function() {
        timerMilisecond.innerHTML = timer.milisecond.toString();
        (timer.second.toString().length == 1) ? (timerSecond.innerHTML = '0' + timer.second) : (timerSecond.innerHTML = timer.second.toString());
        (timer.minute.toString().length == 1) ? (timerMinute.innerHTML = '0' + timer.minute) : (timerMinute.innerHTML = timer.minute.toString());
        (timer.hour.toString().length == 1) ? (timerHour.innerHTML = '0' + timer.hour) : (timerHour.innerHTML = timer.hour.toString());
        if (iterator == 250) {
            clearInterval(interval);
            timer.second += 1;
            iterator = 1;
            timeOn();
            if (timer.second == 60) {
                timer.minute += 1;
                timer.second = 0;
                if (timer.minute == 60) {
                    timer.hour += 1;
                    timer.minute = 0;
                }
            }
        }
        iterator++;
        timer.milisecond = iterator * 4 - 1;
    }, 4);
}
function clearHandler() {
    timer.hour = 0;
    timer.minute = 0;
    timer.second = 0;
    timer.milisecond = 0;
    timerMilisecond.innerHTML = timer.milisecond;
    timerSecond.innerHTML = '0' + timer.second;
    timerMinute.innerHTML = '0' + timer.minute;
    timerHour.innerHTML = '0' + timer.hour;
    clearInterval(interval);
    var iterator = 1;
    startStopBtn.value = btnStatus.start;
    startStopBtn.innerHTML = btnStatus.start;
    startStopBtn.classList.remove('btn-warning');
    startStopBtn.classList.add('btn-success');
}
function handler() {
    switch (startStopBtn.value) {
    case btnStatus.start:
        startStopBtn.value = btnStatus.pause;
        startStopBtn.innerHTML = btnStatus.pause;
        startStopBtn.classList.remove('btn-success');
        startStopBtn.classList.add('btn-warning');
        timeOn();
        break;
    case btnStatus.pause:
        startStopBtn.value = btnStatus.continueT;
        startStopBtn.innerHTML = btnStatus.continueT;
        clearInterval(interval);
        break;
    case btnStatus.continueT:
        startStopBtn.value = btnStatus.pause;
        startStopBtn.innerHTML = btnStatus.pause;
        timeOn();
        break;
    }
}
startStopBtn.addEventListener("click", handler);
clearBtn.addEventListener("click", clearHandler);
startStopBtn.removeEventListener("click", handler);
clearBtn.removeEventListener("click", clearHandler);
