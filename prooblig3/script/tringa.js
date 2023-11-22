
const figures = document.getElementById("canvas");
const ctx = figures.getContext("2d");
figures.width = window.innerWidth;
figures.height = window.innerHeight;

// brown square
var x = 350;
var y = 300;
var width = 700;
var height = 400;

function drawRectangle() {
    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.fillRect(x, y, width, height);
    ctx.fill();
    ctx.closePath();
}

function drawTriangle() {
    ctx.fillStyle = 'crimson';
    ctx.beginPath();
    ctx.moveTo(350, 300);
    ctx.lineTo(1050, 300);
    ctx.lineTo(700, 100);
    ctx.lineTo(350, 300);
    ctx.closePath();
    ctx.fill();
}

drawRectangle()
drawTriangle()