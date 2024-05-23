document.addEventListener('DOMContentLoaded', function() {
    const backgroundLetters = document.getElementById('background-letters');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numLetters = 100;

    for (let i = 0; i < numLetters; i++) {
        const letter = document.createElement('span');
        letter.textContent = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        letter.style.position = 'absolute';
        letter.style.top = `${Math.random() * 100}%`;
        letter.style.left = `${Math.random() * 100}%`;
        letter.style.color = 'rgba(255, 255, 255, 0.2)';
        letter.style.fontSize = `${Math.random() * 20 + 10}px`;
        backgroundLetters.appendChild(letter);
    }
});
