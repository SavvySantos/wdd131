const button = document.querySelector('button');
const input = document.querySelector('#favchap');
const list = document.querySelector('ul'); // you need to fill in the blank to reference the HTML elelement that is unordered list element.
const chaptersArray =  getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);    
});

button.addEventListener('click', function() {
    // Code to execute when the button is clicked
    if(input.value !=='') {
        displayList(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = item;
        deleteButton.textContent = '❌';

        deleteButton.classList.add('delete');
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);

            deleteChapter(li.textContent);
            input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavoriteBOM', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavoriteBOM'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}