const { body } = document;
let ZoomActivated = false;

window.addEventListener('click', () => {
    ZoomActivated = !ZoomActivated;
});


window.addEventListener('mouseover', (e) => {
    const { clientX: x, clientY: y } = e;

    if (ZoomActivated) {
        body.style.transform = 'scale(2)'
        body.style.transformOrigin = `${x}px ${y}px`
    } else {
        body.style.transform = 'none'
    }
});
