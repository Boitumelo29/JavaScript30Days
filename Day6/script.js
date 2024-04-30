const counter = document.querySelector('.counter');
const reset = document.querySelector('.btn-reset');
const increase = document.querySelector('.increase');
const decrease = document.querySelector('.decrease');

let count = 0;

increase.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
})
decrease.addEventListener('click', () => {
    count--;
    counter.innerHTML = count;
})

reset.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
})