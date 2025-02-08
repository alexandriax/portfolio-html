const strawberry = document.getElementById('strawberry');

// Function to get the current rotation angle
function getRotationAngle(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);

    // Calculate rotation angle from the matrix
    const angle = Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI);
    return (angle < 0) ? angle + 360 : angle;  // Normalize angle to 0-360
}

// Start spinning on hover
strawberry.addEventListener('mouseenter', () => {
    strawberry.style.transition = 'none'; // Remove transition to allow smooth spin
    strawberry.style.animation = 'spin 4s linear infinite';
});

// Stop spinning and snap on mouse leave
strawberry.addEventListener('mouseleave', () => {
    // Capture the current rotation angle before stopping the animation
    const currentAngle = getRotationAngle(strawberry);

    // Stop the animation
    strawberry.style.animation = 'none';

    // Apply the captured rotation to prevent jumping
    strawberry.style.transform = `rotateY(${currentAngle}deg)`;

    // Determine the closest snap position: 0° (full strawberry) or 180° (bitten)
    const snapAngle = (currentAngle < 90 || currentAngle > 270) ? 0 : 180;

    // Apply smooth transition to the snap angle
    setTimeout(() => {
        strawberry.style.transition = 'transform 0.5s ease-out';
        strawberry.style.transform = `rotateY(${snapAngle}deg)`;
    }, 20);  // Add a slight delay to ensure the animation stops before snapping

    // Clean up the transition after snapping
    setTimeout(() => {
        strawberry.style.transition = '';
    }, 520);
});



















