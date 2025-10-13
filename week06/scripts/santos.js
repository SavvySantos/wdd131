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
    
    const businessInfo = {
        name: "Santos Roofing & Construction",
        phone: "405-590-5701",
        hours: "Mon-Sat 8am-5pm"
    };
    console.log(`Content ${businessInfo.name} at ${businessInfo.phone}`);

    const services = ["Roofing", "Siding", "Remodeling", "New Construction"]
    const shortList = services.filter(service => service.length < 10);
    console.log("Our short services list:", shortList);

    const welcomeMessage = `Welcome to ${businessInfo.name}! We're open ${businessInfo.hours}.`;
    console.log(welcomeMessage);

    if (!localStorage.getItem("visitCount")) {
        localStorage.setItem("visitCount", 1);
    }

    console.log(`You've visited this page ${localStorage.getItem("visitCount")} times.`)
});