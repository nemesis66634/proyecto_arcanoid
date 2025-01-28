
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');


canvas.width = 750
canvas.height = 400



const jill = document.querySelector("jill1");

//variables pelota
const ballRadius = 4;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = -2;
let dy = -2;


//variables paleta
const paddleHeight = 10;
const paddleWidth = 50;
let paddlex = (canvas.width - paddleWidth) / 2;
let paddley  = canvas.height - 40;
let rightPressed = false;
let leftPressed = false;




function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}




function drawBall() {
  ctx.beginPath(); 
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}




function drawPaddle(){
  ctx.drawImage{jill,0,100,paddleWidth,paddleHeight,paddlex,paddley,paddleWidth,paddleHeight}
}




function ballMovement(){
  if(x + dx > canvas.width || x + dx < ballRadius){
      dx = -dx;
  }
  if(y + dy > canvas.height || y + dy < ballRadius){
    dy = -dy;
  }  
  x += dx;
  y += dy;
}




function initEvents(){
  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
  
  function keyDownHandler(event){
    const {key} = event;
    if(key === 'Right' || key === 'ArrowRight'){
      rightPressed = true;
    }else if(key === 'left' || key === 'ArroLeft'){
      leftPressed = true;
    }
  }
  function keyUpHandler(event){
    const {key} = event;
    if(key === 'Right' || key === 'ArrowRight'){
      rightPressed = false;
    }else if(key === 'left' || key === 'ArroLeft'){
      leftPressed = false;
    }
  }

}




function paddleMovement(){
  if(rightPressed === 'true'){
    paddlex += 7;  
  }else if(rightPressed === 'true'){
    paddlex -= 7;
  }  
}




function draw(){
  cleanCanvas();
  drawBall();
  drawPaddle();
  //drawBricks();
  //collisionDetection();
  ballMovement();
  paddleMovement();
  window.requestAnimationFrame(draw);
}

initEvents()
draw();



