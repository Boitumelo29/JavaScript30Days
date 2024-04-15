function clock() {
    let seconds = document.getElementById('seconds ');

    let s = new Date().getSeconds();

    seconds.innerHTML = s;

};

let interval = setInterval(clock, 1000);