/* dark mode */

const themeToggle =
document.getElementById("theme-toggle");

/*Vérification localStorage*/
if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");

    themeToggle.innerHTML = "☀️";
}

// Changement thème
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

        themeToggle.innerHTML = "☀️";

    }else{

        localStorage.setItem("theme","dark");

        themeToggle.innerHTML = "🌙";
    }

});

/* navbar scroll */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");
    }

});

/* retour en haut */

const backToTop =
document.getElementById("backToTop");

/* Apparition bouton */
window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";
    }

});

/* Scroll smooth */
backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"
    });

});
/*FADE IN AU SCROLL*/

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

fadeElements.forEach((element) => {

    fadeObserver.observe(element);

});


/* COMPTEURS ANIMES */

const counters = document.querySelectorAll(".counter-number");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(count < target){

                    count += increment;

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {
    threshold: 0.5
});

counters.forEach((counter) => {

    counterObserver.observe(counter);

});