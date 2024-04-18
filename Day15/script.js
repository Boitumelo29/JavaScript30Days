const container = document.getElementById('container');
const circleArr = [];
let row = 15;
let cols = 15;

for (let i = 0; i < row; i++) {
    circleArr[i] = [];
    for (let j = 0; j < cols; j++) {
        const circle = document.createElement('div');
        circle.classList.add('cicle');
        container.appendChild(circle);
        circleArr[i].push(circle);
    }
}

circleArr.forEach((cols, i) => {
    cols.forEach((circle, j) => {
        circle.addEventListener('click', () => {
            growCircle(i, j);
        })
    })
})

function growCircle(i, j) {

    if (circleArr[i] && circleArr[i][j] && !circleArr[i][j].classList.container('grow')) {
        circleArr[i][j].classList.add('grow');

        setTimeout(() => {
            growCircle(i - 1, j);
            growCircle(i + 1, j);
            growCircle(i, 1 - j);
            growCircle(i, 1 + j);
        }, 100);

        setTimeout(() => {
            circleArr[i][j].classList.remove('grow');
        }, 300);
    }
}