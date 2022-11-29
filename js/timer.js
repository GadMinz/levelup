let sec = 1800
let countDiv = document.getElementById("timer");
const countDown = setInterval(function () {
    secpass();
}, 1000);

function secpass() {
    let min = Math.floor(sec / 60),
        remSec = sec % 60;

    if (remSec < 10) {
        remSec = "0" + remSec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    countDiv.innerHTML = min + ":" + remSec;

    if (sec > 0) {
        sec = sec - 1;
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = "countdown done";
    }
}
