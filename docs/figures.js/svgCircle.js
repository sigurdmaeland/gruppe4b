function createCircle(radius, color) {
    const svgContainer = document.getElementById('svg-container');

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "50%");
    circle.setAttribute("cy", "50%");
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", color);

    svgContainer.appendChild(circle);
}

createCircle(10, "green");
