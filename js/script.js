let searchLink = document.querySelector('.search-link');
let searchFormContainer = document.querySelector('.search-form-container');

searchLink.addEventListener('click', function () {
    toggleClass(searchLink, 'search-link--clicked')
    toggleClass(searchFormContainer, 'search-form-container--show')
    toggleClass(searchLink.querySelectorAll("i")[0], 'js-search-input--opened')
    toggleClass(searchLink.querySelectorAll("i")[1], 'js-search-input--closed')
});

let mobileMenu = document.querySelector(".mobile-menu")
let burgerButton = document.querySelector(".burger-button")
////????????????????????????????????
document.addEventListener("click", function (event) {
    if (event.target.closest(".burger-button")) {
        toggleClass(mobileMenu, "mobile-menu--visible")
        toggleClass(burgerButton, "js-slide--right")
        toggleClass(".navbar__logo", "js-slide--right")
        toggleClass("body", "constrained")
        return;
    }
    if (mobileMenu.classList.contains("mobile-menu--visible")) {
        if (event.target.closest(".mobile-menu")) {
            return;

        }
        removeClass(mobileMenu, "mobile-menu--visible")
        removeClass(burgerButton, "js-slide--right")
        removeClass(".navbar__logo", "js-slide--right")
        removeClass("body", "constrained")
    }

})

function addClass(selector, className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.add(className);
}

function removeClass(selector, className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.remove(className);
}

function toggleClass(selector, className) {
    let findedSelector = typeof selector == 'object' ? selector : document.querySelector(selector);
    findedSelector.classList.toggle(className);
}


//Creating cards on main paige

const makeElement = (tagName, classNames) => {
    let element = document.createElement(tagName)

    if (typeof classNames == "string") {
        element.classList.add(classNames)
    } else if (typeof classNames == "object") {
        for (let className of classNames) {
            element.classList.add(className)
        }
    }

    return element
}

const createCard = (obj) => {
    let card = makeElement("a", "card")
    card.href = "#"
    let cardIconContainer = makeElement("div", "card__icon-container")
    card.append(cardIconContainer)
    let cardIcon = makeElement("img")
    cardIcon.src = obj.src
    cardIconContainer.append(cardIcon)
    let cardTitle = makeElement("p", "card__title")
    cardTitle.textContent = obj.title
    card.append(cardTitle)
    let cardDescription = makeElement("p", "card__description")
    cardDescription.textContent = obj.description
    card.append(cardDescription)
    return card;
}

let cardsDataArray = [{
        src: "img/icons/spring-boot.png",
        title: "Spring boot",
        description: "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
    },
    {
        src: "img/icons/spring-framework.png",
        title: "Spring Framework",
        description: "Provides core support for dependency infection, transaction management, webapps, data access, messaging and more."
    },
    {
        src: "img/icons/spring-cloud-data-flow.png",
        title: "Spring Cloud Data Flow",
        description: "An orchestration service for composable data microservice applications on modern runtimes."
    },
    {
        src: "img/icons/spring-cloud.png",
        title: "Spring Cloud",
        description: "An orchestration service for composable data microservice applications on modern runtimes."
    },
    {
        src: "img/icons/spring-data.png",
        title: "Spring Data",
        description: "An orchestration service for composable data microservice applications on modern runtimes."
    },
    {
        src: "img/icons/spring-integration.png",
        title: "Spring Integration",
        description: "An orchestration service for composable data microservice applications on modern runtimes."
    },
    {
        src: "img/icons/spring-batch.png",
        title: "Spring Batch",
        description: "Simplifies and optimizes the work of processing high-volume batch operations."
    },
    {
        src: "img/icons/spring-security.png",
        title: "Spring Security",
        description: "Protects your application with comprehensive and extensible authentication and authorization support."
    },
    {
        src: "img/icons/spring-hateoas.png",
        title: "Spring Hateoas",
        description: "Simplifies creating REST representations that follow the HATEOAS principle."
    },
    {
        src: "img/icons/spring-rest-docs.png",
        title: "Spring Rest Docs",
        description: "Document RESTful services by combining hand-written documentation with auto-generated snippets produced with Spring MVC searchFieldsArray or REST Assured."
    },
    {
        src: "img/icons/spring-amqp.png",
        title: "Spring Amqp",
        description: "Applies core Spring concepts to the development of AMQP-based messaging solutions."
    },
    {
        src: "img/icons/spring-mobile.png",
        title: "Spring Mobile",
        description: "Simplifies the development of mobile web apps through device detection and progressive rendering options."
    },
    {
        src: "img/icons/spring-for-android.png",
        title: "Spring For Android",
        description: "Provides key Spring components for use in developing Android applications."
    },
    {
        src: "img/icons/spring-web-flow.png",
        title: "Spring Web Flow",
        description: "Supports building web applications with controlled navigation such as checking in for a flight or applying for a loan."
    },
    {
        src: "img/icons/spring-web-services.png",
        title: "Spring Web Services",
        description: "Facilitates the development of contract-first SOAP web services."
    },
    {
        src: "img/icons/spring-ldap.png",
        title: "Spring Ldap",
        description: "Simplifies the development of applications using LDAP using Spring's familiar template-based approach."
    },
    {
        src: "img/icons/spring-session.png",
        title: "Spring Session",
        description: "Spring Session provides an API and implementations for managing a user’s session information."
    },
    {
        src: "img/icons/spring-shell.png",
        title: "Spring Shell",
        description: "Provides a powerful foundation for building command-line apps using a Spring-based programming model."
    },
    {
        src: "img/icons/spring-flo.png",
        title: "Spring Flo",
        description: "A JavaScript library that offers a basic embeddable HTML5 visual builder for pipelines and simple graphs."
    },
    {
        src: "img/icons/spring-kafka.png",
        title: "Spring Kafka",
        description: "Provides Familiar Spring Abstractions for Apache Kafka."
    },
    {
        src: "img/icons/spring-statemachine.png",
        title: "Spring Statemachine",
        description: "A framework for application developers to use state machine concepts with Spring applications "
    },
    {
        src: "img/icons/spring-io-platform.png",
        title: "Spring Io Platform",
        description: "Provides a cohesive, versioned platform for building modernapplications. It is a modular, enterprise-grade distribution that delivers a curated set of dependencies."
    }
]

let cards = document.querySelector(".cards")
cardsDataArray.forEach((item) => {
    let card = createCard(item)
    cards.append(card)
})
let cardsList = Array.from(cards.children);

// filter for cards
let searchFieldsArray = document.querySelectorAll(".search-field--js")
for (let searchField of searchFieldsArray) {
    searchField.addEventListener("input", filterCards)
}
let notFoundContainer = makeElement("div", ["not-found-container", "hidden"])
notFoundContainer.textContent = "NOT FOUND"
cards.append(notFoundContainer)

function filterCards() {
    let textInput = event.target.value.trim();

    if (textInput !== "") {
        cardsList.forEach((card) => {
            let counter = 0
            let paragraphs = card.querySelectorAll("p")

            paragraphs.forEach((elem) => {
                if (elem.innerText.toLowerCase().search(textInput.toLowerCase()) !== -1) {
                    counter++
                    elem.innerHTML = addMark(elem.innerText, elem.innerText.toLowerCase().search(textInput.toLowerCase()), textInput.length)
                } else {
                    elem.innerHTML = elem.innerText
                }
            })
            if (counter) {
                removeClass(card, "hidden")
            } else {
                addClass(card, "hidden")
            }
        })
        if (!cards.querySelectorAll("a.card:not(.hidden)").length) {

            removeClass(notFoundContainer, "hidden")
        } else {
            addClass(notFoundContainer, "hidden")

        }

    } else {
        cardsList.forEach((card) => {
            removeClass(card, "hidden")
            let paragraphs = card.querySelectorAll("p")
            paragraphs.forEach((elem) => {
                elem.innerHTML = elem.innerText
            })
        })
        addClass(notFoundContainer, "hidden")

    }

}

const addMark = (str, pos, length) => str.slice(0, pos) + '<mark>' + str.slice(pos, pos + length) + '</mark>' + str.slice(pos + length);