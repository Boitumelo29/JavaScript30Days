const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#f2e335', '#ef4a92']

const contanier = document.getElementById('container');
const square_nr = 300;

for (let i = 0; i < square_nr; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setcolorEl(square)
    });

    square.addEventListener('mouseover', () => {
        removeolorEl(square)
    });


    contanier.appendChild(square);

}

function setcolorEl(el) {
    const color = getRandomColor()
    el.style.background = color;
    el.style.boxShadow = `0 0 4px ${color}, 0 0 10px${color}`;
}

function removecolorEl(el) {
    el.style.background = '#11111111';
    el.style.boxShadow = `0 0 2px #fff`;
}


function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];

}