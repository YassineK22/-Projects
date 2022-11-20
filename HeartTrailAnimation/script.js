const bodyEl = document.querySelector("body")


signe = [1,-1];
bodyEl.addEventListener("mousemove" , (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span")
    spanEl.style.left=xPos + 'px'
    spanEl.style.top=yPos + 'px'
    //random size of Hearts
    const size = Math.random()*100;
    spanEl.style.width = size + 'px' 
    spanEl.style.height = size + 'px'
    //random speed and direction by useing Variable css
    spanEl.style.setProperty("--Xlevel", signe[Math.round(Math.random()*1)] * Math.random()*5000 + '%') 
    spanEl.style.setProperty("--Ylevel", signe[Math.round(Math.random()*1)] * Math.random()*5000 + '%') 
    //delete heart span after 4 sec
    bodyEl.appendChild(spanEl)
    setTimeout(()=>{
        spanEl.remove();
    }, 4000)
})