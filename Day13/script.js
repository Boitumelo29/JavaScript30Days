circles = document.querySelectorAll('.circle');

let activeLight = 0;

setInterval(changeLight, 1000);

function changeLight() {
    circles[activeLight].classList = 'circle';
    activeLight++;

    if (activeLight >= circles.length) {
        activeLight = 0;
    }

    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'));
}