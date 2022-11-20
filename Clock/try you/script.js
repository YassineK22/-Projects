setInterval(setClock , 1000);

hourHand = document.querySelector("[data-hour-hand]");
minuteHand = document.querySelector("[data-minute-hand]");
secondHand = document.querySelector("[data-second-hand]");

function setClock() {
    currentTime = new Date()
    secondRatio = currentTime.getSeconds() / 60
    minuteRatio = (secondRatio + currentTime.getMinutes()) / 60
    hourRatio = (minuteRatio + currentTime.getHours()) / 12
    setRotation(hourHand,hourRatio)
    setRotation(minuteHand,minuteRatio)
    setRotation(secondHand,secondRatio)
}

function setRotation(element , RotationRatio){

    element.style.setProperty("--rotation", RotationRatio * 360)
}

setClock()