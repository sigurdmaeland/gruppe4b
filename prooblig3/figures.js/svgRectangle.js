
function createRectangle(width, height, color) {
    const svgContainer = document.getElementById('svg-container');

    const rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectangle.setAttribute("x", (100 - width) / 2 + "%");
    rectangle.setAttribute("y", (100 - height) / 2 + "%");
    rectangle.setAttribute("width", width + "%");
    rectangle.setAttribute("height", height + "%");
    rectangle.setAttribute("fill", color);

    svgContainer.appendChild(rectangle);
}
createRectangle(30, 20, "blue");