const btnEl = document.querySelector(".btn")
const colseIconEl = document.querySelector(".close-icon")
const trailerContainer = document.querySelector(".trailer-container")
const videoEl = document.querySelector("video")

btnEl.addEventListener("click", ()=>{
    trailerContainer.classList.remove("active")
})

colseIconEl.addEventListener("click", ()=>{
    trailerContainer.classList.add("active")
    // videoEl.requestPictureInPicture();
    videoEl.pause();
    videoEl.currentTime = 0;
})