let searchButton = document.querySelector('.search-link');
let searchFormContainer = document.querySelector('.search-form-container');
searchButton.addEventListener('click', function () {
    toggle(searchButton, 'search-link--clicked')
    toggle(searchFormContainer, 'search-form-container--show')
});

document.addEventListener("click", function(event) {
    if (event.target.closest(".mobile-menu__button")) {
        toggle(".mobile-menu", "mobile-menu__visible")
        toggle(".mobile-menu__button", "mobile-menu__opened")
        toggle(".navbar__logo", "mobile-menu__opened")
        toggle("body", "constrained")
        return;
    }
    if (document.querySelector(".mobile-menu").classList.contains("mobile-menu__visible")) {
    if (event.target.closest(".mobile-menu")) {
        return;
        
    }
    toggle(".mobile-menu", "mobile-menu__visible")
    toggle(".mobile-menu__button", "mobile-menu__opened")
    toggle(".navbar__logo", "mobile-menu__opened")
    toggle("body", "constrained")
    }

}) 


function toggle(selector, className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.toggle(className);
}