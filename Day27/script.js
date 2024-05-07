getPost()

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
    newElement.innerHTML = (`<div class="char-id">${data.id}</div>
    <div class="char-name">${data.name}</div>
    <img src="${data.image}" alt="" class="char-img">
    <div class="char-species">${data.species}</div>`)

    items_container.appendChild(newElement)
}