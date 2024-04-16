const emojis = ["😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗", "😛", "😏", "🤥", "😴", "🥺", "😧", "🤗", "🤩",
    "😎", "🥳", "😍", "😱", "🤓", "😷", "🥴", "😳", "🤯", "🤫", "🤑", "😪", "😴", "😵", "😶‍🌫️", "🥵", "🥶", "😳", "🤪", "😵", "🥴",
    "😵‍💫", "😠", "😡", "🤮", "🤢", "🤒", "😷", "🤬", "🤧", "😇", "🥳"];

const btn = document.getElementById('emoji-btn');

btn.addEventListener('mouseover', function (params) {
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
})

btn.addEventListener('click', function (params) {
    btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
})