setInterval(setClock , 1000)

const HourEl = document.getElementById("hours")
const MinuteEl = document.getElementById("minutes")
const SecondEl = document.getElementById("seconds")
const AmPmEl= document.getElementById("ampm")

function setClock(){
    currentTime = new Date()
    Hour = currentTime.getHours()
    Minute = currentTime.getMinutes()
    Second = currentTime.getSeconds()
    ampm = "AM"
    if (Hour > 12){
        Hour = Hour - 12
        ampm = "PM"
    }
    Hour = Hour < 10 ? "0" + Hour : Hour;
    Minute = Minute < 10 ? "0" + Minute : Minute;
    Second = Second < 10 ? "0" + Second : Second;
    AmPmEl.innerText = ampm;
    HourEl.innerText = Hour ;
    MinuteEl.innerText = Minute;
    SecondEl.innerText = Second;
}

setClock()