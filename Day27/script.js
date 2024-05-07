async function getPost() {
    fetch(`https://rickandmortyapi.com/api/character/1`).then(function (response) {
        return response.json()
    }).then(function (data) {
        addItemsCollection(data);
    })
}

function addItemsCollection(data) {

}