async function getPost() {
    fetch(`https://rickandmortyapi.com/api/character/1`).then(function (response) {
        return response.json()
    }).then(function (data) {
        addItemsCollection(data);
    })
}

function addItemsCollection(data) {
    const newElement = document.createElement('div')
    newElement.classList.add('item')
    newElement.innerHTML = (``)
}