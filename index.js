const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 50);
});

