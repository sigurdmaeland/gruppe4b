// figur laget med canvas

const figures = document.getElementById('canvas');
const ctx = figures.getContext('2d');
figures.width = window.innerWidth;
figures.height = window.innerHeight;



var rec1x = 360;
var rec1y = 300;
var rec1Width = 400;
var rec1Height = 250;

function drawRectangle() {
    ctx.fillStyle = 'red';
    ctx.fillRect(rec1x, rec1y, rec1Width, rec1Height);
    ctx.fill();
    ctx.beginPath();
    ctx.closePath();
}

var rec2x = 500;
var rec2y = 300;
var rec2Width = 100;
var rec2Height = 250;

function drawRectangle2() {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.fillRect(rec2x, rec2y, rec2Width, rec2Height);
    ctx.fill();
    ctx.closePath();
}

var rec3x = 360;
var rec3y = 400;
var rec3Width = 400;
var rec3Height = 50;

function drawRectangle3() {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.fillRect(rec3x, rec3y, rec3Width, rec3Height);
    ctx.fill();
    ctx.closePath();
}


function drawCircle() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(550, 290, 50, 0,  Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}       
        drawRectangle()
        drawCircle()
        drawRectangle2()
        drawRectangle3()