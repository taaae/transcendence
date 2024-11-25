const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawGame() {
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    drawLeftPaddle();
    drawRightPaddle();
    ctx.stroke();
}

function animate() {
    canvas.width = GameConfig.field.width;
    canvas.height = GameConfig.field.height;
    const scaleFactor = Math.min(window.innerWidth / canvas.width, window.innerHeight / canvas.height);
    canvas.style.width = `${canvas.width * scaleFactor}px`;
    canvas.style.height = `${canvas.height * scaleFactor}px`;
    canvas.style.left = `${(window.innerWidth - canvas.width * scaleFactor) / 2}px`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGame();
}

window.onload = () => {
    window.addEventListener('resize', animate);
    setInterval(animate, 1000/30);
}
