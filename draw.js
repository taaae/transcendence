function drawLeftPaddle() {
    ctx.beginPath();
    ctx.rect(Game.paddle.leftX, 
        Game.paddle.leftY, 
        Game.paddle.width,
        Game.paddle.height);
    ctx.fill();
}

function drawRightPaddle() {
    ctx.beginPath();
    ctx.rect(Game.paddle.rightX, 
        Game.paddle.rightY, 
        Game.paddle.width,
        Game.paddle.height);
    ctx.fill();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(Game.ball.X, Game.ball.Y, Game.ball.radius, 0, 2 * Math.PI);
    ctx.fill();
}
