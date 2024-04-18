
search();

function search() {
    let textSearch = document.getElementById('tex-search').value;
    let paragraph = document.getElementById('paragraph');

    textSearch = textSearch.replace();
    let patter = new RegExp(`${textSearch}`, 'gi');
    paragraph.innerHTML = paragraph.textContent.replace(patter, match =>
        `<mark>${match}</mark>`)
}