document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const burgerMenu = document.getElementById("burger-menu");
    const menuMobile = document.querySelector(".nav");

    // Активация мобильного меню
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("active");
        menuMobile.classList.toggle("active");
    });

     // Включает фон для header при скролле
    const handleHeader = () => {
        if (window.scrollY > 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    };

    // Отключает мобильное меню при десктопной версии
    const handleDisableMobileMenu = () => {
        if (window.innerWidth > 1024) {
            burgerMenu.classList.remove("active");
            menuMobile.classList.remove("active");
        }
    };
    
    // Обработчик события прокрутки страницы
    window.addEventListener("scroll", handleHeader);
     // Обработчик события изменения размера окна
    window.addEventListener("resize", handleDisableMobileMenu);
});