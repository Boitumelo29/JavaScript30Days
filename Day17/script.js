const inputTextarea = document.getElementById('input-textare');
const charCount = document.getElementById('charc-count');
const wordCount = document.getElementById('word-count');

inputTextarea.addEventListener('input', () => {
    charCount.textContent = inputTextarea.value.length;

    let txt = inputTextarea.value.trim();
    wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
})