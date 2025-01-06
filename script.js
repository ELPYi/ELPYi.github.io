// JavaScript for bouncing and rotating the image
const img = document.getElementById('bouncingImage');

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let dx = 3; // X speed
let dy = 3; // Y speed
let angle = 0; // Initial rotation angle

function animate() {
    x += dx;
    y += dy;
    angle += 1;  // Increase angle for rotation (adjust for speed)

    // Check for collision with screen edges and reverse direction
    if (x + img.width >= window.innerWidth || x <= 0) {
        dx *= -1;
    }

    if (y + img.height >= window.innerHeight || y <= 0) {
        dy *= -1;
    }

    // Update position and rotation
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(animate); // Recursively call for smooth animation
}

animate();
