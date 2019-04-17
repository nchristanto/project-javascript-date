const clock = () => {
    let time = new Date()

    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    return document.querySelectorAll('.clock')[0].innerHTML = timeToday(hours) + ":" + timeToday(minutes) + ":" + timeToday(seconds)
}

const timeToday = (digitHours) => {
    if (digitHours < 10) {
        digitHours = '0' + digitHours
    }
    return digitHours;
}

setInterval(clock, 1000);
