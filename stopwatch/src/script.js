let [seconds, minutes, hours] = [0, 0, 0];  //array: sec 0, min 0, hr 0.
let distym = document.querySelector("#dis-tym");
let timer = null;

stopWatch = () => {
    seconds++;  //increase sec by 1
    if (seconds == 60) {  //when sec = 60
        seconds = 0;  //make sec = 0
        minutes++;  //and increase min by 1
        if (minutes == 60) {  //when min = 60
            minutes = 0;  //make min = 0
            hours++;  //and increase hr by 1
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    distym.innerHTML = h + ":" + m + ":" + s;
}

watchStart = () => {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

watchStop = () => {
    clearInterval(timer);
}

watchReset = () => {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    distym.innerHTML = "00:00:00";
}