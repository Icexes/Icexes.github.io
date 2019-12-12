let searchButton = document.querySelector('.search-link');
let searchFormContainer = document.querySelector('.search-form-container');
searchButton.addEventListener('click', function () {
    toggle(searchButton, 'search-link--clicked')
    toggle(searchFormContainer, 'search-form-container--show')
});
document.querySelector(".mobile-menu__button").addEventListener("click", function (event) {
    toggle(".mobile-menu", "mobile-menu__visible")
    toggle(".mobile-menu__button", "mobile-menu__open")
    toggle(".navbar__logo", "mobile-menu__open")
    toggle("body", "constrained")
});
function toggle(selector, className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.toggle(className);
}