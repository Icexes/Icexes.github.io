let searchLink = document.querySelector('.search-link');
let searchFormContainer = document.querySelector('.search-form-container');

searchLink.addEventListener('click', function () {
    toggleClass(searchLink, 'search-link--clicked')
    toggleClass(searchFormContainer, 'search-form-container--show')
    toggleClass(searchLink.querySelectorAll("i")[0] ,'js-search-input--opened')
    toggleClass(searchLink.querySelectorAll("i")[1] ,'js-search-input--closed')
});

let mobileMenu = document.querySelector(".mobile-menu")
let mobileMenuButton = document.querySelector(".mobile-menu__button")

document.addEventListener("click", function(event) {
    if (event.target.closest(".mobile-menu__button")) {
        toggleClass(mobileMenu, "mobile-menu--visible")
        toggleClass(mobileMenuButton, "js-slide--right")
        toggleClass(".navbar__logo", "js-slide--right")
        toggleClass("body", "constrained")
        return;
    }
    if (mobileMenu.classList.contains("mobile-menu--visible")) {
    if (event.target.closest(".mobile-menu")) {
        return;
        
    }
    removeClass(mobileMenu, "mobile-menu--visible")
    removeClass(mobileMenuButton, "js-slide--right")
    removeClass(".navbar__logo", "js-slide--right")
    removeClass("body", "constrained")
    }

}) 

function addClass(selector,className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.add(className);
}
function removeClass(selector,className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.remove(className);
}
function toggleClass(selector, className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.toggle(className);
}
test