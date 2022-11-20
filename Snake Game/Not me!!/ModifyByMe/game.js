const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')
const score = document.getElementById("score")
const restart = document.getElementById("restart")
const timerEl = document.getElementById("timer")
const speednuEl = document.getElementById("speednu")
more = document.getElementById("more")
less = document.getElementById("less")
fps = 15
time = 1000
speed = time/fps
times = 0
timm = 0
speedNumber = 0

window.onload = () => {
    gameLoop()
}

setInterval(timer , 1000)

function timer(){
    times++
    times = times < 10 ? "0" + times : times
    if (times == 60){
        timm ++
        times = 0
    }
    timerEl.innerText = timm + ":" +times
}


restart.onclick = function() { document.location.reload () }; 

function gameLoop() {
    
    sho = setInterval(show, speed) // here 15 is our fps value (speed)
    
    
}

function show() {
    
    update()
    draw()
    more.onclick = function() {
        speed = speed - 5
        console.log(speed)
        clearInterval (sho)
        speedNumber++
        speednuEl.innerText = speedNumber
        gameLoop()
    };
    less.onclick = function() {
        speed = speed + 5
        console.log(speed)
        clearInterval (sho)
        speedNumber--
        speednuEl.innerText = speedNumber
        gameLoop()
    };
    
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    snake.move()
    eatApple()
    checkHitWall()
    
}

function eatApple() {
    if(snake.tail[snake.tail.length - 1].x == apple.x &&
        snake.tail[snake.tail.length - 1].y == apple.y){
            snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
            apple = new Apple();
        }
    if(snake.tail[snake.tail.length - 1].x == 400 && apple.x==0 &&
            snake.tail[snake.tail.length - 1].y == apple.y){
                snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
                apple = new Apple();
            }
    if(snake.tail[snake.tail.length - 1].x == -20 && apple.x==380 &&
            snake.tail[snake.tail.length - 1].y == apple.y){
                snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
                apple = new Apple();
            }
    if(snake.tail[snake.tail.length - 1].x == apple.x &&
        snake.tail[snake.tail.length - 1].y == 400 && apple.y==0){
                snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
                apple = new Apple();
            }
    if(snake.tail[snake.tail.length - 1].x == apple.x &&
        snake.tail[snake.tail.length - 1].y == -20 && apple.y==380){
                snake.tail[snake.tail.length] = {x:apple.x, y: apple.y}
                apple = new Apple();
            }
}

function checkHitWall() {
    let headTail = snake.tail[snake.tail.length -1]
    if (headTail.x == - snake.size) {
        headTail.x = canvas.width - snake.size
    } else if (headTail.x == + canvas.width) {
        headTail.x = 0
    } else if (headTail.y == - snake.size) {
        headTail.y = canvas.height - snake.size
    } else if (headTail.y == canvas.height) {
        headTail.y = 0 
    }
}

function draw() {
    createRect(0,0,canvas.width, canvas.height, "black")
    createRect(0,0, canvas.width, canvas.height)

    for (let i = 0; i < snake.tail.length; i++){
        co = "white"
        if (i == snake.tail.length -1) co = "lightgreen";
        createRect(snake.tail[i].x + 2.5, snake.tail[i].y + 2.5,
            snake.size - 5, snake.size- 5, co)
          
    }
    
    score.innerText = (snake.tail.length -1),canvas.width - 120, 18
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color)
}

function createRect(x,y,width, height,color) {
    canvasContext.fillStyle = color
    canvasContext.fillRect(x, y, width, height)
}

window.addEventListener("keydown", (event) => {
    setTimeout(() => {
        if (event.keyCode == 37 || event.keyCode == 81 && snake.rotateX != 1) {
            snake.rotateX = -1
            snake.rotateY = 0
        } else if (event.keyCode == 38 || event.keyCode == 90 && snake.rotateY != 1) {
            snake.rotateX = 0
            snake.rotateY = -1
        } else if (event.keyCode == 39 || event.keyCode == 68 && snake.rotateX != -1) {
            snake.rotateX = 1
            snake.rotateY = 0
        } else if (event.keyCode == 40 || event.keyCode == 83 && snake.rotateY != -1) {
            snake.rotateX = 0
            snake.rotateY = 1
        }
    }, 20)
})

class Snake {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
        this.tail = [{x:this.x, y:this.y}]
        this.rotateX = 1
        this.rotateY = 1
    }

    move() {
        let newRect

        if (this.rotateX == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x + this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateX == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x - this.size,
                y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateY == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y + this.size
            }
        } else if (this.rotateY == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y - this.size
            }
        }

        this.tail.shift()
        this.tail.push(newRect)
    }
}

class Apple{
    constructor(){
        let isTouching
        
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true
                }
            }

            this.size = snake.size
            this.color = "red"

            if (!isTouching) {
                break;
            }
        }
    }
}


const snake = new Snake(20,20,20);
let apple = new Apple();
