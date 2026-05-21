// NAVBAR SHADOW

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    nav.classList.toggle("active", window.scrollY > 20);

});


// CARD ANIMATION

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


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll(".btn, .card a");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});