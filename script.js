document.addEventListener("DOMContentLoaded", () => {
    // Activa el mode fosc
    document.body.classList.add('dark-mode');

    // Configura el text inicial de la barra lateral a "Light Theme" en anglès
    const sidebarButton = document.querySelector('.sidebar');
    sidebarButton.textContent = 'Light Theme';
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Actualitza el text del botó de mode
    const sidebarButton = document.querySelector('.sidebar');
    if (document.body.classList.contains('dark-mode')) {
        sidebarButton.textContent = 'Light Theme';
    } else {
        sidebarButton.textContent = 'Night Theme';
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const dropdownContent = document.getElementById("dropdownContent");
    const footerText = document.querySelector(".footer-text");
    const socialLinks = document.querySelectorAll(".social-link");

    // Ensure the menu is visible on page load and hamburger is shifted
    dropdownContent.style.display = "block";
    hamburgerMenu.classList.add("hamburger-shift");

    // Trigger the slide-in animation for footer text and social links
    setTimeout(() => {
        footerText.classList.add("slide-in");
        socialLinks.forEach(link => link.classList.add("slide-in"));
    }, 500); // Start the animation with a 0.5s delay
});

function toggleDropdown() {
    const dropdownContent = document.getElementById("dropdownContent");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const footerText = document.querySelector(".footer-text");
    const socialLinks = document.querySelectorAll(".social-link");

    if (dropdownContent.style.display === "block") {
        // Hide the menu
        dropdownContent.style.display = "none";
        hamburgerMenu.classList.remove("hamburger-shift");

        // Remove animation classes to reset
        footerText.classList.remove("slide-in");
        socialLinks.forEach(link => link.classList.remove("slide-in"));
    } else {
        // Show the menu
        dropdownContent.style.display = "block";
        hamburgerMenu.classList.add("hamburger-shift");

        // Add animation classes with a delay
        setTimeout(() => {
            footerText.classList.add("slide-in");
            socialLinks.forEach(link => link.classList.add("slide-in"));
        }, 0); // Start the animation immediately on toggle
    }
}
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionem els enllaços i els elements objectiu
    const links = {
        about: document.querySelector('.dropdown-content a[href="#top"]'),
        skills: document.querySelector('.dropdown-content a[href="#my-skills"]'),
        projects: document.querySelector('.dropdown-content a[href="#my-projects"]')
    };

    const targets = {
        skills: document.querySelector('#my-skills'),
        projects: document.querySelector('#my-projects')
    };

    // Desplaçament al sostre per "ABOUT ME" sense destacat
    links.about.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el salt automàtic
        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplaçament suau cap al sostre
    });

    // Funció per aplicar el destacat i desplaçament suau als títols de "MY SKILLS" i "MY PROJECTS"
    function applyHighlight(link, targetElement) {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evita el salt automàtic
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            }); // Desplaçament suau a la secció

            // Afegeix la classe de destacat i després la treu
            targetElement.classList.add("highlight");
            setTimeout(() => {
                targetElement.classList.remove("highlight");
            }, 1000); // Retira el destacat després d'1 segon
        });
    }

    // Aplica l'efecte de destacat per "MY SKILLS" i "MY PROJECTS"
    applyHighlight(links.skills, targets.skills);
    applyHighlight(links.projects, targets.projects);
});

