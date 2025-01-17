const canvas = document.getElementById('gameBoard');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

function drawBoard() {
    // Задній фон
    ctx.fillStyle = 'yellow';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Малювання трикутників
    const triangles = [
        {x: 50, y: 0, height: 200, color: 'black'},
        {x: 100, y: 0, height: 200, color: 'beige'},
        // Додати інші трикутники...
    ];

    triangles.forEach(triangle => {
        ctx.fillStyle = triangle.color;
        ctx.beginPath();
        ctx.moveTo(triangle.x, triangle.y);
        ctx.lineTo(triangle.x + 50, triangle.y);
        ctx.lineTo(triangle.x + 25, triangle.y + triangle.height);
        ctx.closePath();
        ctx.fill();
    });

    // Малювання драконів (або інших декоративних елементів)
    // Наприклад, ви можете використати зображення:
    const dragonImg = new Image();
    dragonImg.src = 'path_to_dragon_image.png';
    dragonImg.onload = () => {
        ctx.drawImage(dragonImg, canvas.width / 2 - 50, canvas.height / 2 - 50, 100, 100);
    };
}

drawBoard();
