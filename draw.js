function drawLeftPaddle() {
    ctx.beginPath();
    ctx.rect(GameConfig.paddle.leftX, 
        GameConfig.paddle.leftY, 
        GameConfig.paddle.width,
        GameConfig.paddle.height);
    ctx.fill();
}

function drawRightPaddle() {
    ctx.beginPath();
    ctx.rect(GameConfig.paddle.rightX, 
        GameConfig.paddle.rightY, 
        GameConfig.paddle.width,
        GameConfig.paddle.height);
    ctx.fill();
}
