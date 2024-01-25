function moveButton(button) {
    if (button.classList.contains('no-button')) {
        const distance = 50 + Math.random() * 400;
        const angle = Math.random() * 360;
        const x = distance * Math.cos(angle * Math.PI / 180);
        const y = distance * Math.sin(angle * Math.PI / 180);

        button.style.transform = `translate(${x}px, ${y}px)`;
    }
}
