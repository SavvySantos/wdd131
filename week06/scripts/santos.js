const currentYear = new Date ().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;


document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu");
    const navList = document.querySelector(".navigation");

    let currentPage = window.location.pathname.split("/").pop();
    if(currentPage === "" || currentPage ==="/")
    {
        currentPage = "index.html";
    }

    let navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        let linkPage = link.getAttribute("href").split("/").pop();
        if(linkPage === "" || linkPage === "/") {
            linkPage = "index.html";
        }

        if (linkPage === currentPage) {
            link.classList.add("using");
        }
        else {
            link.classList.remove("using")
        }
    });

    menuButton.addEventListener("click", () =>{
        menuButton.classList.toggle("open");
        navList.classList.toggle("open");
    });
});