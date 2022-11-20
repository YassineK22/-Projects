const textaeraEl = document.getElementById("textarea");
const totalCharEl = document.getElementById("total-counter")
const remainCharEl = document.getElementById("remaining-counter")
const offEl = document.getElementById("off")
const x20El = document.getElementById("x20")
const x50El = document.getElementById("x50")
const customEl = document.getElementById("custom")
const customNumberEl = document.getElementById("custom-number")

textaeraEl.addEventListener("keyup" , ()=>{
    updateCounter()
    
})

offEl.addEventListener("click", () => {
    modRemaining = false;
    customNumberEl.classList.remove('show')
    customEl.innerText = 'Custom'
    remainCharEl.innerText = "Disabled";
    off.classList.remove('active')
    x20.classList.remove('active')
    x50.classList.remove('active')
    custom.classList.remove('active')
    off.classList.add('active')
    document.getElementById("textarea").removeAttribute('maxLength');
})
x20El.addEventListener("click", () => {
    modRemaining = true;
    off.classList.remove('active')
    x20.classList.remove('active')
    x50.classList.remove('active')
    custom.classList.remove('active')
    x20.classList.add('active')
    document.getElementById("textarea").maxLength = 20;
    customNumberEl.classList.remove('show')
    customEl.innerText = 'Custom'
    updateCounter()

})
x50El.addEventListener("click", () => {
    modRemaining = true;
    off.classList.remove('active')
    x20.classList.remove('active')
    x50.classList.remove('active')
    custom.classList.remove('active')
    x50.classList.add('active')
    document.getElementById("textarea").maxLength = 50;
    customNumberEl.classList.remove('show')
    customEl.innerText = 'Custom'
    updateCounter()
})

function num(x){
    x = String(x)
    for (i=0;i<x.length;i++){
        if(x.charAt(i)<"0" || x.charAt(i)>"9") return false
    }
    return true
}

customEl.addEventListener("click", () => {
    customNumberEl.value = ''
    modRemaining = true;
    off.classList.remove('active')
    x20.classList.remove('active')
    x50.classList.remove('active')
    custom.classList.remove('active')
    customNumberEl.classList.add('show')
    custom.classList.add('active')
    document.getElementById("custom-number").focus();
    customNumberEl.addEventListener("keyup" , (event)=>{
    setTimeout(() => {
    if (event.keyCode == 13 || event.keyCode == 9){
        if (num(customNumberEl.value) == false){
            alert('Write a numberr !!')
            customNumberEl.classList.remove('show')
        }else{
        document.getElementById("textarea").maxLength = customNumberEl.value;
        customEl.innerText = customNumberEl.value;
        customNumberEl.classList.remove('show')
        updateCounter()
        }
    }
    }, 20)})
})

function updateCounter(){
    totalCharEl.innerText = textaeraEl.value.length
    if (modRemaining == true){
        remainCharEl.innerText = textaeraEl.getAttribute("maxLength") 
        - textaeraEl.value.length ;
    }
}