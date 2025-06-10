
const noButton = document.getElementById('noButton');
if (noButton) {
    noButton.addEventListener('mouseenter', () => {
        const body = document.body;
        const bodyWidth = body.offsetWidth - noButton.offsetWidth;
        const bodyHeight = body.offsetHeight - noButton.offsetHeight;
        const randX = Math.floor(Math.random() * bodyWidth);
        const randY = Math.floor(Math.random() * bodyHeight);
        noButton.style.left = randX + 'px';
        noButton.style.top = randY + 'px';
    });
}
