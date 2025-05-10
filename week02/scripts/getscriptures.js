const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML elelement that is unordered list element.
const li = document.createElement('li');
const deleteButton = document.createElement('button');

button.addEventListener('click', function() {
    // Code to execute when the button is clicked
    if(input.value.trim()!=='') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
    }
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
        input.value = ''
    }) 
});


