// figur laget med canvas

const figures = document.getElementById('canvas');
const ctx = figures.getContext('2d');
figures.width = window.innerWidth;
figures.height = window.innerHeight;



var x = 500;
var y = 550;
var width = 125;
var height = 125;

function drawRectangle() {
    ctx.fillStyle = 'brown';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.fillRect(x, y, width, height);
    ctx.fill();
    ctx.beginPath();
    ctx.closePath();
    ctx.stroke();

}

function drawCircle() {
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(550, 150, 75, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();

}


    function drawTriangle() {
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(200, 550);
        ctx.lineTo(950, 550);
        ctx.lineTo(550, 150);
        ctx.lineTo(200, 550);
        ctx.closePath();
        ctx.fill();
    }

        
        drawRectangle()
        drawCircle()
        drawTriangle()