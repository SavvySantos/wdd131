const currentYear = new Date ().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu");
    const navList = document.querySelector(".navigation");

    menuButton.addEventListener("click", () =>{
        menuButton.classList.toggle("open");
        navList.classList.toggle("open");
    });
});