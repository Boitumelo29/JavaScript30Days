//https://api.countapi.xyz/update/project/pen?amount=1
const count = document.getElementById('count');

updateVisitorsCount();

function updateVisitorsCount() {
    fetch('https://api.countapi.xyz/update/project/pen?amount=1').then(res => res.json()).then(res => {
        count.innerHTML = re.value;
    })

}