setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]")
const minuteHand = document.querySelector("[data-minute-hand]")
const secondHand = document.querySelector("[data-second-hand]")
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")

function setClock(){
    currentTime = new Date()
    secondRatio = currentTime.getSeconds() / 60
    minuteRatio = (secondRatio + currentTime.getMinutes() ) / 60
    hourRatio = (minuteRatio + currentTime.getHours() ) / 12
    
    h = currentTime.getHours()
    m = currentTime.getMinutes()
    s = currentTime.getSeconds()
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    hourEl.innerText = h
    minuteEl.innerText = m
    secondEl.innerText = s
    

    setRotation(hourHand, hourRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(secondHand, secondRatio)
}

function setRotation(element , RotationRatio){
    element.style.setProperty("--rotation", RotationRatio * 360)
}

setClock()