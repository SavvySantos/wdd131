const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

var date = new Date ();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;
var date = document.lastModified;
document.getElementById("lastmodified").innerHTML = date;