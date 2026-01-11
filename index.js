const navbar = document.querySelector(".navbar");
const menu=document.getElementById("menu-btn")
const navlinks=document.getElementById("nav-links")
const links = document.querySelectorAll("#nav-links a");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 50);
});
menu.addEventListener("click",()=>{
    navlinks.classList.toggle("active")
    if (navlinks.classList.contains("active")) {
        menu.classList.remove("fa-bars")
        menu.classList.add("fa-xmark")
        
    }else {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    }
})
links.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    });
});

