const jokeContaier = document.getElementById('joke_container');
const jokeBtn = document.getElementById('joke_btn');


const API_URL = 'https://icanhazdadjoke.com/';

getJoke;
async function getJoke() {
    const res = await fetch(API_URL, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const date = await res.json();
    jokeContaier.innerHTML = date.joke;
};

jokeBtn.addEventListener('click', getJoke);