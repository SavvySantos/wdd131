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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Cedar City Utah",
    location: "Cedar City, UT",
    dedicated: "2017, December, 10",
    area: 42657,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
  },  
  {
    templeName: "Nauvoo Illinois",
    location: "Nauvoo Illinois",
    dedicated: "2002, June, 27",
    area: 54000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/800x500/nauvoo-temple-756499-wallpaper.jpg"
  },
  {
    templeName: "Freiberg Germany",
    location: "Freiberg Germany",
    dedicated: "1985, June, 29",
    area: 21500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/freiberg-germany/800x500/freiberg-germany-temple-lds-664670-wallpaper.jpg"
  },
];

//let cardContainer = document.getElementById('photo-container');
createTempleCard(temples)

const oldTemples = document.querySelector("#old");

let container = document.querySelector(".temple-cards");

function createTempleCard(temple) {
    let templeCard = document.createElement('section');
    templeCard.classList.add('temple-card')

    let img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    let name = document.createElement('h3');
    name.textContent = temple.templeName;

    let location = document.createElement('p');
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;

    let dedication = document.createElement('p');
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;

    let areaSpFt = document.createElement('p');
    areaSpFt.innerHTML = `<span class="label">Area: </span>${temple.area} sq ft.`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    templeCard.appendChild(img);
    templeCard.appendChild(name);
    templeCard.appendChild(location);
    templeCard.appendChild(dedication);
    templeCard.appendChild(areaSpFt);

      return templeCard;
  //document.querySelector(".photo-container").appendChild(templeCard);
};

function displayTemples(filteredTemples)
  {
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
      filteredTemples.addEventListener("click", () => {
        let filteredCards = createTempleCard(temple);
        container.appendChild(filteredCards);
    });
  });

  function displayOldTemples(temple)
  {
    const dedication = new Date(temple.dedicated).getFullYear();
    return dedication > 2000;
  }

  function displayNewTemples(temple)
  {
    const dedication = new Date(temple.dedicated).getFullYear();
    return dedication < 1900;
  }

  function displayLargeTemples(temple)
  {
    return temple.area > 90000;
  }

  function displaySmallTemples(temple)
  {
    return temple.area < 10000;
  }
  function apply(filtered) {
    if (filtered){
      let filteredTemples = temples.filter(filtered);
      displayTemples(filteredTemples);
    }
  }

  navList.addEventListener('click', event => {
    if (event.target.tagName == 'A') {
      event.preventDefault();
      let filter = event.target.closest('li').dataset.filter;
      
      if (filter == 'old') {
        applyFilter(displayOldTemples);
      }

      else if (filter == 'new') {
        applyFilter(displayNewTemples);
      }

      else if (filter == 'large') {
        applyFilter(displayLargeTemples);
      }

      else if (filter == 'small') {
        applyFilter(displaySmallTemples);
      }
    }
  });


  document.addEventListener('DOMContentLoaded', () => {
      displayTemples(temples);
        });
      }
  
    temples.forEach(temple =>  {
      const card = createTempleCard(temple);
      container.appendChild(card);
  });

