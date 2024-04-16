function shuffle() {
    const img = document.getElementById('img')
    let random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute('src', `/Day7/images/${random}.png`);

}

function animation() {
    setTimeout(shuffle, 500);
    const img = document.getElementById('img')
    img.setAttribute('src', `/Day7/images/dice-rol.gif`);
}