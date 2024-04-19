const button = document.querySelector('button');

button.addEventListener('click', function () {
    let input = document.querySelector('input');
    input.select();
    document.execCommand('copy');
})