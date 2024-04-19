window.addEventListener('keydown', (e) => {
    document.getElementById('result').innerHTML = `The Key Press is <h2>${e.key}</h2> <p>The key code presses is: ${e.keyCode}</p>`
})