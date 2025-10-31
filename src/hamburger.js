export function hamburger_Open_Close (hamburger_svg, close_svg, vertical_nav_menu) {
    hamburger_svg.addEventListener('click', () => {
        vertical_nav_menu.classList.toggle("hidden");
        vertical_nav_menu.classList.add("transition", "duration-300", "ease-out");
        localStorage.setItem("menuOpen", "1");
    });

    close_svg.addEventListener('click', () => {
        vertical_nav_menu.classList.add("hidden");
        vertical_nav_menu.classList.add("transition", "duration-300", "ease-out");
        localStorage.setItem("menuOpen", "0");
    })
} 