const boxEl = document.getElementById("box")
const containerEl = document.getElementById("container")

var boxLeft = 0
var boxTop = 0
function move(e){
    if(e.keyCode==39 || e.keyCode==68){
        boxLeft+=5;
        if(boxLeft>600-50){
            boxLeft-=5;
        }
        boxEl.style.left= boxLeft + 'px';
    }
    if(e.keyCode==37 || e.keyCode==81){
        boxLeft-=5
        if(boxLeft<0){
            boxLeft+=5
        }
        boxEl.style.left= boxLeft + 'px';
    }
    if(e.keyCode==40 || e.keyCode==83){
        boxTop+=5
        if(boxTop>400-50){
            boxTop-=5
        }
        boxEl.style.top= boxTop + 'px';
    }
    if(e.keyCode==38 || e.keyCode==90){
        boxTop-=5
        if(boxTop<0){
            boxTop+=5
        }
        boxEl.style.top= boxTop + 'px';
    }
    // if((e.keyCode==39 || e.keyCode==68) && (e.keyCode==40 || e.keyCode==83)){
    //     boxLeft+=5;
    //     if(boxLeft>600-50){
    //         boxLeft-=5;
    //     }
    //     boxTop+=5
    //     if(boxTop>400-50){
    //         boxTop-=5
    //     }
    //     boxEl.style.top= boxTop + 'px';
    //     boxEl.style.left= boxLeft + 'px';
    // }
}

document.onkeydown = move