const textElement = document.querySelector('.squiggly-text');
const words = ["DEVELOPER", "DESIGNER", "CONCEPTUALIST"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    textElement.innerHTML = currentWord.substring(0, charIndex) + '<span class="typing-cursor"></span>';

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); 
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();