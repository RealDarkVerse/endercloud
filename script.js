// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 20){

        nav.classList.add("active");

    }else{

        nav.classList.remove("active");

    }

});


// CARD REVEAL ANIMATION

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", revealCards);

function revealCards(){

    const triggerBottom = window.innerHeight / 1.2;

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.classList.add("show");

        }

    });

}

revealCards();


// PANEL BUTTON EFFECT

const panelBtn = document.querySelector(".panel-btn");

if(panelBtn){

    panelBtn.addEventListener("mouseenter", () => {

        panelBtn.style.letterSpacing = "1px";

    });

    panelBtn.addEventListener("mouseleave", () => {

        panelBtn.style.letterSpacing = "0px";

    });

}


// BUTTON HOVER EFFECT

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});
