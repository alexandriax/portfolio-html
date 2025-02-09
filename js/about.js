document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('mouseenter', () => {
        const content = frame.getAttribute('data-content');
        frame.querySelector('.frame-overlay').innerText = content;
    });
});



