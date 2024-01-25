function moveButton(button) {
    if (button.classList.contains('no-button')) {
        const distance = 50 + Math.random() * 400;
        const angle = Math.random() * 360;
        const x = distance * Math.cos(angle * Math.PI / 180);
        const y = distance * Math.sin(angle * Math.PI / 180);

        // Get the viewport dimensions
        const viewportWidth = 414;
        const viewportHeight = 896;

        // Calculate the maximum allowable coordinates
        const maxX = viewportWidth - button.clientWidth;
        const maxY = viewportHeight - button.clientHeight;

        // Ensure the button stays within the viewport bounds
        const constrainedX = Math.max(0, Math.min(maxX, x));
        const constrainedY = Math.max(0, Math.min(maxY, y));

        button.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
    }
}
