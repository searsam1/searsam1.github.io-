

function getTimeHMS() {
    
    // Create a new Date object
    var currentDate = new Date();

    // Get the current hours, minutes, and seconds
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    // Format the time as a string
    var timeString = hours + ":" + minutes + ":" + seconds;

    return timeString
}

function changeClockInTime(){
    document.querySelector("#timeIn").textContent = getTimeHMS()
}

function changeClockOutTime(){
    document.querySelector("#timeOut").textContent = getTimeHMS()
}