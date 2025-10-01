
var date = new Date ();
var year = date.getFullYear();
document.getElementById("currentyear").innerHTML = year;
var date = document.lastModified;
document.getElementById("lastmodified").innerHTML = date;
let counter = localStorage.getItem("reviewCounter");

if (counter === null)
{
    counter = 0;
}
else
{
    counter = parseInt(counter, 10);
}

counter++;

localStorage.setItem("reviewCounter", counter);

document.getElementById("message").textContent = "Number of Submissions: " + counter;