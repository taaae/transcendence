const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function drawGame() {
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function animate() {
    canvas.width = GameConfig.field.width;
    canvas.height = GameConfig.field.height;
    const scaleFactor = Math.min(window.innerWidth / canvas.width, window.innerHeight / canvas.height);
    canvas.style.width = `${GameConfig.field.width * scaleFactor}px`;
    canvas.style.height = `${GameConfig.field.height * scaleFactor}px`;
    canvas.style.left = `${(window.innerWidth - GameConfig.field.width * scaleFactor) / 2}px`;
    ctx.scale(scaleFactor, scaleFactor);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGame();
}

window.onload = setInterval(animate, 1000/30);
