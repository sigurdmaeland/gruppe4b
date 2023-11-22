<canvas id="canvasCircle" width="100" height="100" style="border:1px solid #000;"></canvas>

<svg id="svgCircle" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <circle id="svgCircleElement" cx="50" cy="50" r="40" fill="#ffcc00" stroke="#333" stroke-width="2" />
</svg>

<canvas id="canvasRectangle" width="100" height="100" style="border:1px solid #000;"></canvas>

<svg id="svgRectangle" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect id="svgRectangleElement" x="10" y="10" width="80" height="60" fill="#ffcc00" stroke="#333" stroke-width="2" />
</svg>


    function drawCircleCanvas(radius, color) {
        var canvas = document.getElementById("canvasCircle");
        var context = canvas.getContext("2d");

        context.beginPath();
        context.arc(50, 50, radius, 0, 2 * Math.PI);
        context.fillStyle = color;
        context.fill();
        context.stroke();
    }

    // Function to draw a circle using SVG API
    function drawCircleSVG(radius, color) {
        var circleElement = document.getElementById("svgCircleElement");
        circleElement.setAttribute("r", radius);
        circleElement.setAttribute("fill", color);
    }

    // Function to draw a rectangle using Canvas API
    function drawRectangleCanvas(width, height, color) {
        var canvas = document.getElementById("canvasRectangle");
        var context = canvas.getContext("2d");

        context.fillStyle = color;
        context.fillRect(10, 10, width, height);
        context.strokeRect(10, 10, width, height);
    }

    // Function to draw a rectangle using SVG API
    function drawRectangleSVG(width, height, color) {
        var rectangleElement = document.getElementById("svgRectangleElement");
        rectangleElement.setAttribute("width", width);
        rectangleElement.setAttribute("height", height);
        rectangleElement.setAttribute("fill", color);
    }

    // Test the functions
    drawCircleCanvas(40, "#ffcc00");
    drawCircleSVG(40, "#ffcc00");
    drawRectangleCanvas(80, 60, "#ffcc00");
    drawRectangleSVG(80, 60, "#ffcc00");
