const inputPx = document.getElementById('input-px');
const inputEm = document.getElementById('input-em');

const pxToEm = () => {
    const pxVal = inputPx.value;
    if (pxVal != 0) {
        inputEm.value = pxVal / 16;
    } else {
        inputEm.value = ""
    }
}

inputPx.oninput = pxToEm;

const emToPx = () => {
    const emVal = inputEm.value;
    if (emVal != 0) {
        inputEm.value = emVal / 16;
    } else {
        inputEm.value = ""
    }
}

inputEm.oninput = emToPx;
