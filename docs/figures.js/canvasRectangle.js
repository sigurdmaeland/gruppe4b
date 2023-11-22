const figures = document.getElementById('canvas');
const ctx = figures.getContext('2d');
figures.width = window.innerWidth;
figures.height = window.innerHeight;

function drawRectangle(width, height, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.fillRect((figures.width - width) / 2, (figures.height - height) / 2, width, height);
    ctx.closePath();
}

drawRectangle(1000, 50, "green");