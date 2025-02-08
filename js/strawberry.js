const strawberry = document.getElementById('strawberry');

function getRotationAngle(element) {
    const style = window.getComputedStyle(element);
    const matrix = new DOMMatrixReadOnly(style.transform);

    
    const angle = Math.atan2(matrix.m21, matrix.m11) * (180 / Math.PI);
    return (angle < 0) ? angle + 360 : angle;  
}

// start spinning on hover
strawberry.addEventListener('mouseenter', () => {
    strawberry.style.transition = 'none'; 
    strawberry.style.animation = 'spin 4s linear infinite';
});

// stop spinning and snap on mouse leave
strawberry.addEventListener('mouseleave', () => {
    
    const currentAngle = getRotationAngle(strawberry);

    strawberry.style.animation = 'none';
    strawberry.style.transform = `rotateY(${currentAngle}deg)`;

    const snapAngle = (currentAngle < 90 || currentAngle > 270) ? 0 : 180;

    setTimeout(() => {
        strawberry.style.transition = 'transform 0.5s ease-out';
        strawberry.style.transform = `rotateY(${snapAngle}deg)`;
    }, 20); 

    
    setTimeout(() => {
        strawberry.style.transition = '';
    }, 520);
});



















