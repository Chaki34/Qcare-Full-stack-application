
// ========================================
// PHALENA | QCARE - Base JavaScript
// ========================================

"use strict";

document.addEventListener("DOMContentLoaded", () => {
    initMobileNavigation();
    initSmoothScrolling();
    initCurrentYear();
    initBackToTop();
});

// Mobile navigation
function initMobileNavigation() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!menuToggle || !navLinks) return;

    function closeMenu() {
        menuToggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
    }

    menuToggle.addEventListener("click", () => {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        navLinks.classList.toggle("is-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            menuToggle.focus();
        }
    });

    document.addEventListener("click", (event) => {
        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

// Smooth scrolling for same-page links
function initSmoothScrolling() {
    document.querySelectorAll('a[href*="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const url = new URL(link.href, window.location.href);

            if (
                url.origin !== window.location.origin ||
                url.pathname !== window.location.pathname ||
                !url.hash ||
                url.hash === "#"
            ) {
                return;
            }

            const target = document.querySelector(
                decodeURIComponent(url.hash)
            );

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });

            history.replaceState(null, "", url.hash);
        });
    });
}

// Automatically update copyright year
function initCurrentYear() {
    document.querySelectorAll("[data-current-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });
}

// Optional back-to-top button
function initBackToTop() {
    const backToTop = document.querySelector("[data-back-to-top]");

    if (!backToTop) return;

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches ? "auto" : "smooth"
        });
    });
}