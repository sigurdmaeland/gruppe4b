const figures = document.getElementById("canvas");
const ctx = figures.getContext("2d");
figures.width = window.innerWidth;
figures.height = window.innerHeight;

// Hus (Boks)
ctx.fillStyle = "brown";
ctx.fillRect(225, 450, 450, 300);

// Tak (Trekant)
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(450, 300);
ctx.lineTo(150, 450);
ctx.lineTo(750, 450);
ctx.closePath();
ctx.fill();

// Dør
ctx.fillStyle = "green";
ctx.fillRect(408, 570, 90, 180);

// Vinduer
ctx.fillStyle = "lightblue";
ctx.fillRect(210, 480, 120, 90);
ctx.fillRect(510, 480, 120, 90);