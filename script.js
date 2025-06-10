
const noButton = document.getElementById('noButton');
if (noButton) {
    const moveButton = () => {
        const body = document.body;
        const bodyWidth = body.offsetWidth - noButton.offsetWidth;
        const bodyHeight = body.offsetHeight - noButton.offsetHeight;
        const randX = Math.floor(Math.random() * bodyWidth);
        const randY = Math.floor(Math.random() * bodyHeight);
        noButton.style.position = 'absolute';  // Penting supaya bisa bergerak
        noButton.style.left = randX + 'px';
        noButton.style.top = randY + 'px';
    };

    noButton.addEventListener('mouseenter', moveButton);
    noButton.addEventListener('click', moveButton);
}
