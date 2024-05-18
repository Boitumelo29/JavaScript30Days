const sc = document.getElementById('sc');
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');

const deg = 6;

setInterval(() => {
    let day = new Date();
    let ms = day.getMillisecond() * deg;
    let ss = day.getSeconds() * deg + ms / 1000;
    let mm = day.getMinutes() * deg;
    let hh = day.getHours() * 30;

    mn.style.transform = `rotateZ(${mm}deg)`;
    hr.style.transform = `rotateZ(${hh}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, interval);