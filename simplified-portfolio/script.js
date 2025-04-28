document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const navUl = document.querySelector("nav ul");
    const menuToggle = document.querySelector(".menu-toggle");

    // Header scroll effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile menu toggle
    if (menuToggle && navUl) {
        menuToggle.addEventListener("click", () => {
            navUl.classList.toggle("active");
        });
        // Close menu when a link is clicked
        navUl.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navUl.classList.remove("active");
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll reveal animations
    const animatedElements = document.querySelectorAll("section, .project-card, .skill-category, .about-section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Optional: Unobserve after animation
                // observer.unobserve(entry.target);
            } else {
                 // Optional: Remove class if you want animation to repeat on scroll up/down
                 // entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => {
        // Add appropriate animation class based on element or desired effect
        if (el.classList.contains("project-card") || el.classList.contains("skill-category")) {
            el.classList.add("fade-in");
        } else if (el.id === "about") {
             el.classList.add("slide-in-left");
        } else {
            el.classList.add("fade-in"); // Default fade-in
        }
        observer.observe(el);
    });

    // 3D Tilt Effect for Project Cards
    const tiltElements = document.querySelectorAll(".project-card");

    tiltElements.forEach(element => {
        element.addEventListener("mousemove", (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateX = (y / rect.height) * -10; // Max rotation 5 degrees
            const rotateY = (x / rect.width) * 10;  // Max rotation 5 degrees

            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
        });

        element.addEventListener("mouseleave", () => {
            element.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
        });
    });

});
