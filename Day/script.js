let survery_option = document.getElementById('survey_options');
let add_fields = document.getElementById('add_fields');
let remove_fields = document.getElementById('remove_fields');


add_fields.onclick = function () {
    let newFields = document.createElement('input');
    newFields.setAttribute('type', 'text');
    newFields.setAttribute('Name', 'survey_options []');
    newFields.setAttribute('class', 'survey_options []');
    newFields.setAttribute('size', '50');
    newFields.setAttribute('placeholder', 'Another Fields');
    survery_option.appendChild(newFields);
}