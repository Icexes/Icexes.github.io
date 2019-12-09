let searchButton = document.querySelector('.search-link');
let searchFormContainer = document.querySelector('.search-form-container');
searchButton.addEventListener('click', function() {
    if (document.querySelector('.search-link--clicked')) {
        searchButton.classList.remove('search-link--clicked');
        searchFormContainer.classList.remove('search-form-container--show');
}
    else {
        searchButton.classList.add('search-link--clicked');
        searchFormContainer.classList.add('search-form-container--show');
    }
}); 

document.querySelector(".mobile-menu__button").addEventListener("click", function(event) {


    document.querySelector(".navbar").classList.toggle("test")
})

