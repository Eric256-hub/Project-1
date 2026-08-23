/* ==========================================
   KASAGA ERICKSON PORTFOLIO JS
   PROFESSIONAL INTERACTIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SMOOTH SCROLL NAV LINKS
    ========================== */

    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });


    /* =========================
       STICKY NAVBAR EFFECT
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            header.style.background = "rgba(255,255,255,0.95)";
            header.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
        } else {
            header.style.background = "rgba(255,255,255,0.85)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
        }

    });


    /* =========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".card h2");

    counters.forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {

            const target = +counter.innerText.replace("+", "") || +counter.getAttribute("data-target") || 10;

            let current = +counter.innerText.replace("+", "");

            const increment = target / 50;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment) + "+";
                setTimeout(updateCounter, 40);
            } else {
                counter.innerText = target + "+";
            }

        };

        updateCounter();
    });


    /* =========================
       SIMPLE FADE IN ANIMATION
    ========================== */

    const elements = document.querySelectorAll(
        ".hero-text, .hero-image, .card, .skill-box div, .project-card"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, { threshold: 0.1 });

    elements.forEach(el => {

        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";
        el.style.transition = "0.6s ease";

        observer.observe(el);

    });


});