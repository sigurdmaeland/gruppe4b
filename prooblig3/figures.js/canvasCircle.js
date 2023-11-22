const figures = document.getElementById('canvas');
const ctx = figures.getContext('2d');
figures.width = window.innerWidth;
figures.height = window.innerHeight;

function drawCircle(){
    ctx.fillStyle = 'black'; //colour og mode
    ctx.strokeStyle = 'white'; //mode
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.arc(550, 600, 240, 0,  Math.PI * 2); //radius
    ctx.closePath();
    ctx.fill();
    ctx.stroke(); 
}