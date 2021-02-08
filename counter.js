
var daysLabel = document.getElementById("days");
var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");

var start = new Date(2020, 9, 27, 0, 0, 0, 0);
var totalSeconds = Math.floor((new Date() - start) / 1000);
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60) % 60)
    hoursLabel.innerHTML = pad(parseInt(totalSeconds / (60 * 60)) % 24);
    daysLabel.innerHTML = pad(parseInt(totalSeconds / (60 * 60 * 24)));

}

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
