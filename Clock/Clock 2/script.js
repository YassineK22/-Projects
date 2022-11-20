setInterval(setClock , 1000)

hourHand = document.querySelector('[data-hour-hand]')
minuteHand = document.querySelector('[data-minute-hand]')
secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    currentDate = new Date()
    secondRatio = currentDate.getSeconds() / 60
    minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    hourRatio= (minuteRatio + currentDate.getHours()) / 12
    setRotation(hourHand, hourRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(secondHand, secondRatio)
}

function setRotation(element , tempRatio){
    element.style.setProperty('--rotation', tempRatio * 360)
}
setClock()