const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

// Here you can add code to draw the board and pieces
function drawBoard() {
    // Example: draw background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Example: draw grid lines (you can customize these)
    ctx.strokeStyle = 'black';
    for (let x = 0; x < canvas.width; x += 50) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y < canvas.height; y += 50) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();
}

drawBoard();
