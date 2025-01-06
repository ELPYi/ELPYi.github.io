// JavaScript for bouncing and rotating image around the entire screen
const img = document.getElementById('bouncingImage');

// Set initial position and speed
let x = Math.random() * (window.innerWidth - img.width);
let y = Math.random() * (window.innerHeight - img.height);
let dx = 3; // X-axis speed
let dy = 3; // Y-axis speed
let angle = 0; // Rotation angle

// Animation function
function animate() {
    x += dx;
    y += dy;
    angle += 1;  // Rotation speed (adjust for slower or faster spin)

    // Check for collisions with window edges and reverse direction
    if (x + img.width >= window.innerWidth || x <= 0) {
        dx *= -1;  // Reverse X direction
    }
    if (y + img.height >= window.innerHeight || y <= 0) {
        dy *= -1;  // Reverse Y direction
    }

    // Apply position and rotation
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `rotate(${angle}deg)`;

    // Request next animation frame for smooth movement
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Optional: Resize handling to keep within the screen bounds
window.addEventListener('resize', () => {
    x = Math.min(x, window.innerWidth - img.width);
    y = Math.min(y, window.innerHeight - img.height);
});
