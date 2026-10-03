
/* ==========================================
   PHALENA | QCARE HERO INTERACTIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".qcare-hero");

    if (!hero) return;

    const samePageLinks = document.querySelectorAll(
        'a[href*="#ecosystem"], a[href*="#modules"], a[href*="#team"], a[href*="#roadmap"]'
    );

    samePageLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const url = new URL(link.href, window.location.href);

            // Only handle links pointing to the current page.
            if (url.pathname !== window.location.pathname ||
                url.origin !== window.location.origin ||
                !url.hash) {
                return;
            }

            const target = document.querySelector(url.hash);

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

});