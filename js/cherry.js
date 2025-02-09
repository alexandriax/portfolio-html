const cherry = document.getElementById('cherry');

cherry.addEventListener('mouseenter', () => {
    cherry.classList.add('bounce');

    
    setTimeout(() => {
        cherry.classList.remove('bounce');
    }, 600); 
});

