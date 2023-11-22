// figur laget med canvas
const figures = document.getElementById('canvas');
const ctx = figures.getContext('2d');
figures.width = window.innerWidth;
figures.height = window.innerHeight;

function drawCircle(){
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(550, 600, 240, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 
}

var x = 470;
var y = 250;
var width = 140;
var height = 20;

function drawRectangle() {
    ctx.fillStyle = 'white';
    ctx.lineWidth = 10;
    ctx.fillRect(x, y, width, height);
    ctx.fill();
    ctx.beginPath();
    ctx.closePath();
}

function drawCircle2() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(550, 400, 175, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 
}

function drawCircle3() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(550, 200, 125, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 
}

function drawCircle4() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(500, 175, 20, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.stroke(); 
    ctx.fill
}

function drawCircle5() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(600, 175, 20, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function drawCircle6() {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(500, 175, 15, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

    function drawTriangle() {
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(525, 240);
      ctx.lineTo(575, 240);
      ctx.lineTo(550, 200);
      ctx.lineTo(525, 240);
      ctx.closePath();
      ctx.fill();
    }

        drawCircle()
        drawCircle2()
        drawCircle3()
        drawCircle4()
        drawCircle5()
        drawCircle6()
        drawRectangle()
        drawRectangle2()
        drawTriangle()