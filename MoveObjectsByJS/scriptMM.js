const cursorEl = document.getElementById("cursor");
const containerEl = document.getElementById("container")

document.addEventListener("mousemove", function(e){
    var x = e.clientX;
    var y = e.clientY
    if(x >= containerEl.offsetLeft && y >=containerEl.offsetTop && x <= containerEl.offsetLeft+containerEl.offsetWidth && y <=containerEl.offsetTop+containerEl.offsetHeight){
        cursorEl.style.top=y-25-containerEl.offsetTop+"px"
        cursorEl.style.left=x-25-containerEl.offsetLeft+"px"
        cursorEl.style.cursor="crosshair"
    }
})