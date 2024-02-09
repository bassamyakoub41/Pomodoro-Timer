
// difined a variabels 
let timer;
let minutes = 25 ;
let seconds = 0 ; 
let isRunning = false;
let isBreak = false;


//select elemnet from HTML 

document.getElementById("startBtn").addEventListener("click", function () {
    if (isBreak) {
        isBreak = false;
        document.getElementById("startBtn").textContent = "Start";
    }
    startTimer();
});

    document.getElementById("pauseBtn").addEventListener("click", function () {
    pauseTimer();
});

    document.getElementById("resetBtn").addEventListener("click", function () {
    isBreak = false;
    document.getElementById("startBtn").textContent = "Start";
    resetTimer(document.getElementById("pomodoroLength").value || 25);
});

    document.getElementById("breakBtn").addEventListener("click", function () {
    isBreak = true;
    document.getElementById("startBtn").textContent = "Start Break";
    resetTimer(document.getElementById("breakLength").value || 5);
});

 //display function
    function displayTime() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


//update display time & Break

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    isRunning = false;

    if (isBreak) {
        alert("Break is over!");
    } else {
        alert("Pomodoro Completed! Take a break.");
        isBreak = true;
        resetTimer(document.getElementById("breakLength").value || 5);
        document.getElementById("startBtn").textContent = "Start Break";
    }
    } else {
    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    displayTime();
}
}

//start timer function 

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

//reset timer 

function resetTimer(length) {
    clearInterval(timer);
    isRunning = false;
    minutes = length || 25
    seconds = 0;
    displayTime();
}

//pause timer function

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}
