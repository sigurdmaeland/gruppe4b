const figures = document.getElementById("canvas");
const ctx = figures.getContext("2d");
figures.width = window.innerWidth;
figures.height = window.innerHeight;

// Hus (Boks)
ctx.fillStyle = "brown";
ctx.fillRect(500, 450, 450, 300);

// Tak (Trekant)
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(720, 300);
ctx.lineTo(420, 450);
ctx.lineTo(1020, 450);
ctx.closePath();
ctx.fill();

// Dør
ctx.fillStyle = "green";
ctx.fillRect(680, 600, 90, 150);

// Vinduer
ctx.fillStyle = "lightblue";
ctx.fillRect(550, 480, 120, 90);
ctx.fillRect(770, 480, 120, 90);