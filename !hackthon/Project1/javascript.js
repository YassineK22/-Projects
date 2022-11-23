const SubEL = document.getElementById("btn");
const thanksContainer = document.getElementById("thx-container")
const howContainer = document.getElementById("how-container")
const valueRated = document.getElementById("value-rated")
const R1 = document.getElementById("R1");
const R2 = document.getElementById("R2");
const R3 = document.getElementById("R3");
const R4 = document.getElementById("R4");
const R5 = document.getElementById("R5");

value = "0";
console.log("Clicked")
SubEL.addEventListener("click", ()=>{
    console.log("Clicked")
    thanksContainer.classList.add("active")
    howContainer.classList.add("off")
})

R1.addEventListener("click", ()=>{
    R1.classList.add("hoverC")
    R2.classList.remove("hoverC")
    R3.classList.remove("hoverC")
    R4.classList.remove("hoverC")
    R5.classList.remove("hoverC")
    valueRated.innerText = 1;
})

R2.addEventListener("click", ()=>{
    R1.classList.remove("hoverC")
    R2.classList.add("hoverC")
    R3.classList.remove("hoverC")
    R4.classList.remove("hoverC")
    R5.classList.remove("hoverC")
    valueRated.innerText = 2;
})

R3.addEventListener("click", ()=>{
    R1.classList.remove("hoverC")
    R2.classList.remove("hoverC")
    R3.classList.add("hoverC")
    R4.classList.remove("hoverC")
    R5.classList.remove("hoverC")
    valueRated.innerText = 3;
})

R4.addEventListener("click", ()=>{
    R1.classList.remove("hoverC")
    R2.classList.remove("hoverC")
    R3.classList.remove("hoverC")
    R4.classList.add("hoverC")
    R5.classList.remove("hoverC")
    valueRated.innerText = 4;
})

R5.addEventListener("click", ()=>{
    R1.classList.remove("hoverC")
    R2.classList.remove("hoverC")
    R3.classList.remove("hoverC")
    R4.classList.remove("hoverC")
    R5.classList.add("hoverC")
    valueRated.innerText = 5;
})

valueRated.innerText = value;
