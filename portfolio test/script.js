function toggleMenu(){
    const menu = document.getElementsByClassName("menu-links")[0];
    const icon = document.getElementsByClassName("hamburger-icon")[0];
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}