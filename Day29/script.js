const progress = document.querySelector('.progress-done');

setInterval(() => {
    progress.style.width = progress.dataset.width;
    progress.style.opacity = 1;
}, 500);