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
/* =========================
   FILTRAGE FREELANCES
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const freelanceItems = document.querySelectorAll(".freelance-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        freelanceItems.forEach(item => {

            if (
                filter === "all" ||
                item.dataset.category === filter
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});
/* ==========================
   VALIDATION FORMULAIRE CONTACT
========================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let valid = true;

        // Champs
        const nom = document.getElementById("nom");
        const prenom = document.getElementById("prenom");
        const email = document.getElementById("email");
        const sujet = document.getElementById("sujet");
        const message = document.getElementById("message");

        // Erreurs
        const errNom = document.getElementById("errNom");
        const errPrenom = document.getElementById("errPrenom");
        const errEmail = document.getElementById("errEmail");
        const errSujet = document.getElementById("errSujet");
        const errMessage = document.getElementById("errMessage");

        // Reset
        errNom.textContent = "";
        errPrenom.textContent = "";
        errEmail.textContent = "";
        errSujet.textContent = "";
        errMessage.textContent = "";

        // Nom
        if (nom.value.trim() === "") {
            errNom.textContent = "Le nom est obligatoire";
            valid = false;
        }

        // Prénom
        if (prenom.value.trim() === "") {
            errPrenom.textContent = "Le prénom est obligatoire";
            valid = false;
        }

        // Email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email.value.trim())) {
            errEmail.textContent = "Adresse email invalide";
            valid = false;
        }

        // Sujet
        if (sujet.value === "") {
            errSujet.textContent = "Veuillez choisir un sujet";
            valid = false;
        }

        // Message
        if (message.value.trim().length < 20) {
            errMessage.textContent =
                "Le message doit contenir au moins 20 caractères";
            valid = false;
        }

        // Succès
        if (valid) {

            document.getElementById("success").innerHTML =
                "✅ Message envoyé avec succès !";

            document.getElementById("success").style.color = "green";

            contactForm.reset();
        }

    });

}