let tags = [];

function addTags(e) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if (code != 13) {
        return
    }


    let tag = e.target.value.trim();
    if (tag.length < 1 || tags.includes(tag)) {
        e.target.value = '';
        return
    }

    let index = tags.push(tag);

    let tagItem = document.createElement('div');
    tagItem.classList.add('item');
    tagItem.innerHTML = ` <span class="delete-btn" onclick ="deleteTag(this, ${tag})">&times;</span>
    <span>${tag}</span>`;

    document.querySelector('.tag-input .tag-list').appendChild(tagItem);
    e.target.value = '';
}


function deleteTag(ref, tag) {
    let parent = ref.parentnNode.parentNode;
    parent.removeChild(ref.parenetNode);
    let index = tags.indexOf(tag);
    tag.splice(index);
}
document.querySelector('.tag-input input ').addEventListener('keyup', addTags)