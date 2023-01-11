const targetDate = "01/01/2025";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(countdown, 1000);

function countdown() {
    const target = new Date(targetDate);
    const now = new Date();

    timer = (target - now) / 1000; // seconds

    days = Math.floor(timer / (3600 * 24));
    remainder = timer % (3600 * 24);
    hours = Math.floor(remainder / 3600);
    remainder = remainder % 3600;
    minutes = Math.floor(remainder / 60);
    seconds = Math.floor(remainder % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = format(hours);
    minutesEl.innerHTML = format(minutes);
    secondsEl.innerHTML = format(seconds);
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}
