
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 750
canvas.height = 400

//variables
const ballRadius = 4;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = -2;
let dy = -2;

function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawBall() {
  ctx.beginPath(); 
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'blue';
  ctx.fill();
}


function ballMovement(){
  if(
      x + dx > canvas.width ||
      x + dx < ballRadius
  ){
      dx = -dx;
  }

  if(
    y + dy > canvas.height ||
    y + dy < ballRadius
  ){
    dy = -dy;
  }


  
  x += dx;
  y += dy;
}




function draw(){
  cleanCanvas();
  drawBall();
  //drawPaddle();
  //drawBricks();

  //collisionDetection();
  ballMovement();
  //paddleMovement();
  
  window.requestAnimationFrame(draw);
  
}

draw();