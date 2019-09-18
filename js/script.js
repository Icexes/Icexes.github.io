let searchButton = document.querySelector('.search-link');
let searchFormContainer = document.querySelector('.search-form-container');
searchButton.addEventListener('click', function() {
    if (document.querySelector('.search-link_clicked')) {
        searchButton.classList.remove('search-link_clicked');
        searchFormContainer.classList.remove('search-form-container_show');
}
    else {
        searchButton.classList.add('search-link_clicked');
        searchFormContainer.classList.add('search-form-container_show');
    }
}); 

