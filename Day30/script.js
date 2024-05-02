const text = document.getElementById('heading');


const prog = 'We have finished our 30 days of javascript ';

let idx = 1;

setInterval(writeT, 150);

function writeT() {
    text.innerHTML = prog.slice(0, idx);
    idx++
    if (idx > prog.length) {
        idx = 1;
    }
}