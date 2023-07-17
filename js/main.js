"use strict"

const carouselContainer = document.querySelector(".carousel-container");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

//imposto counter
let counter = 0;

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//ciclo la creazione di un container per ogni oggetto nell'array e inserimento iommagini

for(let i = 0; i < images.length; i++){

    const singleEl = images[i];

    let opacity = " ";

    console.log(singleEl)

    let carousImgContainer = document.createElement("div");

    carousImgContainer.classList.add("carousel-img");
    
    carouselContainer.append(carousImgContainer);

    carousImgContainer.innerHTML += `<img src="${singleEl.image}" class="img-carous ${opacity}">`  

    if( i === 0) {
        opacity = "active"
    }

}




