function navSlide() {                                           // selectionne les atribut a partir du dom html
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {                    //fonction  a partir du click 
        //
        nav.classList.toggle("nav-active");                     //ajout de l'element nav-active
        
        //animation link
        navLinks.forEach((link, index) => {
            if (link.style.animation) {                         //animation des liens
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();