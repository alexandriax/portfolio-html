const cherry = document.getElementById('cherry');

cherry.addEventListener('mouseenter', () => {
    cherry.classList.add('bounce');

    // Remove and re-add the class to restart the animation on each hover
    setTimeout(() => {
        cherry.classList.remove('bounce');
    }, 600); // Matches the animation duration
});

