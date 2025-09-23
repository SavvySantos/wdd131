const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navigationList = document.querySelector('.main-nav');
const pageTitle = document.querySelector('h2');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

var date = new Date ();
var year = date.getFullYear();
document.getElementById("currentyear").textContent = year;
var date = document.lastModified;
document.getElementById("lastmodified").textContent = date;

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

const container = document.querySelector('.temple-cards')

function createTempleCard(temple) {
    const templeCard = document.createElement('section');
    templeCard.classList.add('temple-card');

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = "400";
    image.height = "auto";

    const name = document.createElement('h3');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;

    const dedication = document.createElement('p');
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;

    const areaSpFt = document.createElement('p');
    areaSpFt.innerHTML = `<span class="label">Area: </span>${temple.area} sq ft.`;

    templeCard.appendChild(image);
    templeCard.appendChild(name);
    templeCard.appendChild(location);
    templeCard.appendChild(dedication);
    templeCard.appendChild(areaSpFt);

      return templeCard;
};

function displayTemples(filteredTemples)
  {
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
        const filteredCards = createTempleCard(temple);
        container.appendChild(filteredCards);
      });

  };

  const displayOldTemples = (temple) =>
  {
    const dedication = new Date(temple.dedicated).getFullYear();
    return dedication < 1900;
  };

  const displayNewTemples = (temple) =>
  {
    const dedication = new Date(temple.dedicated).getFullYear();
    return dedication > 2000;
  };

  const displayLargeTemples = (temple) => temple.area > 90000;


  const displaySmallTemples = (temple) => temple.area < 10000;

  function apply(filtered) {
    if (filtered){
      const filteredTemples = temples.filter(filtered);
      displayTemples(filteredTemples);
    }
    else {
      displayTemples(temples);
    }
  }

  function updateActiveLinks(activeLinkText) {
    const links = navigationList.querySelectorAll('a');
    links.forEach(link => {
      link.classList.remove('using');
    });

    const activeLink = Array.from(links).find(link => link.textContent === activeLinkText);

    if (activeLink) {
        activeLink.classList.add("using");
    }
  }

  const titles = {
    'Home': 'Home',
    'Old': 'Old Temples',
    'New': "New Temples",
    'Large': 'Large Temples',
    'Small': 'Small Temples',
};

  navigationList.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const filter = event.target.textContent.trim();
      const filterFunction = filter[filter];

      if (pageTitle && titles[filter]) {
        pageTitle.textContent = titles[filter];
      }

      updateActiveLinks(filter);
      apply(filterFunction);
      
      if (filter === 'Home') {
        apply(null);
      }

      if (filter === 'Old') {

        apply(displayOldTemples);
      }

      else if (filter === 'New') {
        apply(displayNewTemples);
      }

      else if (filter === 'Large') {
        apply(displayLargeTemples);
      }

      else if (filter === 'Small') {
        apply(displaySmallTemples);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    displayTemples(temples);
      updateActiveLinks('Home');
        });
