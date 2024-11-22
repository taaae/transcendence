function getCanvas() {
    return document.getElementById("gamecanvas");
}

function drawBall(ballX, ballY) {
    const ballSize = 5;
    const c = getCanvas();
    const ctx = c.getContext("2d");
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}
