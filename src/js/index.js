const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

const tripTargets = [
    {
      category: 'red',
      left:'25%',
      top:'35%',
      title: 'Górskie trasy rowerowe',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/mountain-bike-routes.jpg'
    },
    {
      category: 'red',
      left:'90%',
      top:'50%',
      title: 'Monterroller',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/monsterroler.jpg'
    },
    {
      category: 'red',
      left:'80%',
      top:'30%',
      title: 'Szczyt Fichtelberg',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/fichtelberg-peak.jpg'
    },
    {
      category: 'red',
      left:'12%',
      top:'45%',
      title: 'Sporty zimowe',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/winter-sports.jpg'
    },
    {
      category: 'blue',
      left:'55%',
      top:'22%',
      title: 'Zwickau – miasto muzyki i motoryzacji',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/zwickau.jpg'
    },
    {
      category: 'blue',
      left:'45%',
      top:'30%',
      title: 'Tradycja i nowoczesność w Chemnitz',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/chemnitz.jpg'
    },
    {
      category: 'blue',
      left:'26%',
      top:'90%',
      title: 'Ach, ten Freiberg...',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/freiberg.jpg'
    },
    {
      category: 'blue',
      left:'21%',
      top:'15%',
      title: 'Poznaj Annaberg-Buchholz – srebrne miasto Rudaw',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/annaberg-buchholz.jpg'
    },
    {
      category: 'blue',
      left:'32%',
      top:'25%',
      title: 'Kurort Oberwiesenthal przyciąga o każdej porze roku',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/oberwiesenthal.jpg'
    },
    {
      category: 'orange',
      left:'12%',
      top:'90%',
      title: 'Jedyny taki Park Przygody',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/adventure-park.jpg'
    },
    {
      category: 'orange',
      left:'82%',
      top:'80%',
      title: 'Zwiedzanie kopalni',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/visiting-mine.jpg'
    },
    {
      category: 'grey',
      left:'64%',
      top:'30%',
      title: 'Kopalnia srebra Dippoldiswalde',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/silver-mine.jpg'
    },
    {
      category: 'grey',
      left:'25%',
      top:'40%',
      title: 'Cynowe królestwo - Altenberg-Zinnwald',
      image: 'https://saksonianaweekend.pl/rudawy_example/img/tin-kingdom.jpg'
    },
  ];
  
  
    let activeTripTargets = tripTargets;
    const sortByCategory = (color) => {
    activeTripTargets = [];
    tripTargets.forEach(el => {
        if( el.category === color || color==='none' ) {
        activeTripTargets.push(el);
        } else {
        activeTripTargets.push({category: 'emptyTarget', left: 0});
        }
    });
    console.log(activeTripTargets);
    displayAllTripElements(activeTripTargets);
    };
  
    const displayAllTripElements = (tripTargetsArray) => {
    console.log('trip targets array');
    console.log(tripTargetsArray);
    console.log('axasda0');
    console.log(document.getElementById('slider'));
    document.getElementById('slider').innerHTML='';
    let itemsInSlide = 0;
    let HTMLToAdd = '';
    document.getElementById('graphic-elements').innerHTML = '';
    tripTargetsArray.forEach(el => {
        document.getElementById('graphic-elements').innerHTML += `<div class="${el.category}" style='left:${el.left};top:${el.top}'></div>`;

        if(el.category !== "emptyTarget") {
        if(itemsInSlide === 0) {
            HTMLToAdd += '<div class="mySlides fade">';
        }
        console.log(el);
        console.log(HTMLToAdd);
        HTMLToAdd += `<img src="${el.image}" style="max-width:100%; display: flex; margin: 0 auto; height: 400px"><div class="text"><h2>${el.title}</h2></div>`;
        itemsInSlide++;
            if(itemsInSlide === 2) {
            HTMLToAdd += '</div>';
            console.log(HTMLToAdd);
            document.getElementById('slider').innerHTML += HTMLToAdd;
            showSlides(1);
            console.log('axadsad');
            itemsInSlide = 0;
            HTMLToAdd = '';
            }
        }
    });
    };
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  const plusSlides = n => {
    showSlides(slideIndex += n);
  };
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }
  
document.getElementById('getAll').addEventListener("click", () => sortByCategory('none'));
document.getElementById('getRed').addEventListener("click", () => sortByCategory('red'));
document.getElementById('getGrey').addEventListener("click", () => sortByCategory('grey'));
document.getElementById('getOrange').addEventListener("click", () => sortByCategory('orange'));
document.getElementById('getBlue').addEventListener("click", () => sortByCategory('blue'));
document.getElementById('next').addEventListener("click", () => plusSlides(1));
document.getElementById('prev').addEventListener("click", () => plusSlides(-1));
  
sortByCategory('none');

