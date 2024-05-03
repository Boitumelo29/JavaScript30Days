const submit = document.getElementById('button');

const outPut = document.getElementById('output');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const bullet = document.querySelectorAll('bullet');

const MAX_STEPS = 4;
let currentStep = 1;


nextBtn.addEventListener('click', () => {
    const currentBullet = bullet[currentStep - 1];
    currentBullet.classList.add('completed');
    currentBullet++;

    prevBtn.disabled = false;

    if (currentStep === MAX_STEPS) { nextBtn.disabled = true; }
});

prevBtn.addEventListener('click', () => {
    const currentBullet = bullet[currentStep - 2];
    currentBullet.classList.remove('completed');
    currentBullet--;

    nextBtn.disabled = false;

    if (currentStep === 1) { prevBtn.disabled = true; }
})