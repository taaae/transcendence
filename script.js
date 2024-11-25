const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawGame() {
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    drawLeftPaddle();
    drawRightPaddle();
    drawBall();
    ctx.stroke();
}

function animate() {
    canvas.width = Game.field.width;
    canvas.height = Game.field.height;
    const scaleFactor = Math.min(window.innerWidth / canvas.width, window.innerHeight / canvas.height);
    canvas.style.width = `${canvas.width * scaleFactor}px`;
    canvas.style.height = `${canvas.height * scaleFactor}px`;
    canvas.style.left = `${(window.innerWidth - canvas.width * scaleFactor) / 2}px`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGame();
}

function addKeyListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.code === "ArrowUp") {
            Game.paddle.right.movingDown = false;
            Game.paddle.right.movingUp = true;
        }
        if (e.code === "ArrowDown") {
            Game.paddle.right.movingDown = true;
            Game.paddle.right.movingUp = false;
        }
        if (e.code === "KeyW") {
            Game.paddle.left.movingDown = false;
            Game.paddle.left.movingUp = true;
        }
        if (e.code === "KeyS") {
            Game.paddle.left.movingDown = true;
            Game.paddle.left.movingUp = false;
        }
    });
    document.addEventListener('keyup', (e) => {
        if (e.code === "ArrowUp")    Game.paddle.right.movingUp = false;
        if (e.code === "ArrowDown")    Game.paddle.right.movingDown = false;
        if (e.code === "KeyW")    Game.paddle.left.movingUp = false;
        if (e.code === "KeyS")    Game.paddle.left.movingDown = false;
    });
}

window.onload = () => {
    addKeyListeners();
    window.addEventListener('resize', animate);
    setInterval(updateGame, 1000/60);
    setInterval(animate, 1000/60);
}
