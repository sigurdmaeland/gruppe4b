const figures = document.getElementById("canvas");
const ctx = figures.getContext("2d");
figures.width = window.innerWidth;
figures.height = window.innerHeight;

// Hus (Boks)
ctx.fillStyle = "brown";
ctx.fillRect(725, 450, 450, 300);

// Tak (Trekant)
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(950, 300);
ctx.lineTo(650, 450);
ctx.lineTo(1250, 450);
ctx.closePath();
ctx.fill();

// Dør
ctx.fillStyle = "green";
ctx.fillRect(900, 590, 110, 160);

// Vinduer
ctx.fillStyle = "lightblue";
ctx.fillRect(760, 480, 120, 90);
ctx.fillRect(1010, 480, 120, 90);