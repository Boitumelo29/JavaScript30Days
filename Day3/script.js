function clock() {
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    let hours = document.getElementById('hour');

    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();
    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;


};

let interval = setInterval(clock, 1000);