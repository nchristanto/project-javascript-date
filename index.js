const digitalClock = () => {

    let myDate = new Date()
    let year = myDate.getYear()

    // Year starts at 1900
    if (year < 1000) {
        year += 1900
    }

    // Get the current days and months based on date
    let day = myDate.getDay()
    let month = myDate.getMonth()
    let currentMonth = myDate.getDate()
    // Array of days and months
    let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Get current hours, minutes, and second based on date
    let h = myDate.getHours()
    let currentHours = myDate.getHours()
    let m = myDate.getMinutes()
    let s = myDate.getSeconds()
    let title = ""

    // Function name the hour
    if (currentHours >= 6 && currentHours  <= 12) {
        title = "Good Morning";
    } else if (currentHours  >= 13 && currentHours  <= 17) {
        title = "Good Afternoon";
    } else if (currentHours  >= 18 && currentHours  <= 22) {
        title = "Good Evening";
    } else {
        title = "Good Night"
    }

    // Formating clock
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }

    // Display name the hours
    document.getElementById("name-the-hours").textContent = title

    // Display days 
    document.getElementById("days").innerHTML = `${daysArray[day]}`

    // Display date
    document.getElementsByClassName("date")[0].innerHTML = `${monthsArray[month]} ${currentMonth} ${year}`

    // Display clock
    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`

    setInterval("digitalClock()", 1000);
}

digitalClock()
