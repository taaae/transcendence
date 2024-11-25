const Game = {
    // x's and y's are for top-left corner
    field: {
        width: 800,
        height: 600,
    },
    paddle: {
        width: 10,
        height: 50,
        speed: 7,
        left: {
            X: 0,
            Y: 275,
            movingUp: false,
            movingDown: false,
        },
        right: {
            X: 790,
            Y: 275,
            movingUp: false,
            movingDown: false,
        },
    },
    ball: {
        X: 395,
        Y: 295,
        size: 10,
        speed: 5,
        angle: 0.5,
    }
};

function updateGame() {
    updateBall();
    updatePaddles();
}

function updateBall() {
    Game.ball.X += Math.cos(Game.ball.angle) * Game.ball.speed;
    Game.ball.Y -= Math.sin(Game.ball.angle) * Game.ball.speed;
    // up
    if (Game.ball.Y < 0) {
        Game.ball.Y = 0;
        Game.ball.angle = 2 * Math.PI - Game.ball.angle;
    }
    // down
    if (Game.ball.Y > Game.field.height - Game.ball.size) {
        Game.ball.Y = Game.field.height - Game.ball.size;
        Game.ball.angle = 2 * Math.PI - Game.ball.angle;
    }
    // right paddle
    if (Game.ball.X + Game.ball.size > Game.paddle.right.X
        && Game.ball.X + Game.ball.size < Game.paddle.right.X + Game.paddle.width
        && Game.ball.Y + Game.ball.size > Game.paddle.right.Y
        && Game.ball.Y < Game.paddle.right.Y + Game.paddle.height
    ) {
        Game.ball.X = Game.paddle.right.X - Game.ball.size;
        Game.ball.angle = Math.PI - Game.ball.angle;
    }
    // left paddle
    if (Game.ball.X > Game.paddle.left.X
        && Game.ball.X < Game.paddle.left.X + Game.paddle.width
        && Game.ball.Y + Game.ball.size > Game.paddle.left.Y
        && Game.ball.Y < Game.paddle.left.Y + Game.paddle.height
    ) {
        Game.ball.X = Game.paddle.left.X + Game.paddle.width;
        Game.ball.angle = Math.PI - Game.ball.angle;
    }
}

function updatePaddles() {
    // move
    if (Game.paddle.right.movingUp && !Game.paddle.right.movingDown) {
        Game.paddle.right.Y -= Game.paddle.speed;
    }
    else if (!Game.paddle.right.movingUp && Game.paddle.right.movingDown) {
        Game.paddle.right.Y += Game.paddle.speed;
    }
    // check borders
    if (Game.paddle.right.Y < 0) {
        Game.paddle.right.Y = 0;
    }
    if (Game.paddle.right.Y > Game.field.height - Game.paddle.height) {
        Game.paddle.right.Y = Game.field.height - Game.paddle.height;
    }

    // move
    if (Game.paddle.left.movingUp && !Game.paddle.left.movingDown) {
        Game.paddle.left.Y -= Game.paddle.speed;
    }
    else if (!Game.paddle.left.movingUp && Game.paddle.left.movingDown) {
        Game.paddle.left.Y += Game.paddle.speed;
    }
    // check borders
    if (Game.paddle.left.Y < 0) {
        Game.paddle.left.Y = 0;
    }
    if (Game.paddle.left.Y > Game.field.height - Game.paddle.height) {
        Game.paddle.left.Y = Game.field.height - Game.paddle.height;
    }
}
