function drawLeftPaddle() {
    ctx.beginPath();
    ctx.rect(Game.paddle.left.X, 
        Game.paddle.left.Y, 
        Game.paddle.width,
        Game.paddle.height);
    ctx.fill();
}

function drawRightPaddle() {
    ctx.beginPath();
    ctx.rect(Game.paddle.right.X, 
        Game.paddle.right.Y, 
        Game.paddle.width,
        Game.paddle.height);
    ctx.fill();
}

function drawBall() {
    ctx.beginPath();
    ctx.rect(Game.ball.X, Game.ball.Y, Game.ball.size, Game.ball.size);
    ctx.fill();
}
