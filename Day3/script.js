function clock() {
    let seconds = document.getElementById('seconds');
    let minutes = document.getElementById('minutes');
    let hours = document.getElementById('hour');
    let ampm = document.getElementById('ampm');

    let s = new Date().getSeconds();
    let m = new Date().getMinutes();
    let h = new Date().getHours();

    var am = "AM";


    if (h > 12) {
        h = h - 12;
        var am = 'PM';
    }

    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;
    ampm.innerHTML = am;
};

let interval = setInterval(clock, 1000);