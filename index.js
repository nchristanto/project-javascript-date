// Set the global date 
let time = new Date()
let hours = time.getHours()
let minutes = time.getMinutes()
let seconds = time.getSeconds()

// Display clock
const clock = () => {
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    document.querySelectorAll(".clock")[0].innerHTML = timeToday(hours) + ":" + timeToday(minutes) + ":" + timeToday(seconds)
}


const timeToday = (digitHours) => {
    if (digitHours < 10) {
        digitHours = "0" + digitHours
    }
    return digitHours;
}

setInterval(clock, 1000);

// Display name of the hours
const displayNameTheHours = () => {
    
    document.getElementsById("name-the-hours") = nameTheHours(hours)
}

// Name the hours on the clock
const nameTheHours = (hours) => {
    let title = ""
    if (hours >= 6 && hours <= 12) {
        title = "Good Morning";
    } else if (hours >= 13 && hours <= 17) {
        title = "Good Afternoon";
    } else if (hours >= 18 && hours <= 22) {
        title = "Good Evening";
    } else {
        title = "Good Night"
    }
    return title
}

// Test case base on hours
console.log(nameTheHours(hours))
