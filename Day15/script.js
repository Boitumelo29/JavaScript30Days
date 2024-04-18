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
        circle.addEventListiner('click', () => {
            //stopped at 3:33
        })
    })
})