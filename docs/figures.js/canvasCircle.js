const figures = document.getElementById('canvas');
const ctx = figures.getContext('2d');
figures.width = window.innerWidth;
figures.height = window.innerHeight;

function drawCircle(radius, color) {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(figures.width / 2, figures.height / 2, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

// Examples of using the function:
drawCircle(300, "red"); // Filled circle with red color
