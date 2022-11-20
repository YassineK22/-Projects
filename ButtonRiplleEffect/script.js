const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event)=>{
    let x = event.pageX - btnEl.offsetLeft;
    let y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})