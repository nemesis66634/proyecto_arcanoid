
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 750
canvas.height = 400

const ballRadius = 4;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;


function drawBall() {
  ctx.beginPath(); 
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
}




function draw(){
  drawBall();
  drawPaddle();
  drawBricks();

  collisionDetection();
  ballmovement();
  paddlemovement();
  
  windows.requestAnimationFrame(draw);
  
}

