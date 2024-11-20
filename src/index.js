import "./css/style.css";



function dropDown() {

    let hamMenu = document.querySelector("#ham__menu");

    hamMenu.addEventListener("click", (e) => {
        e.preventDefault();

        document.querySelector("#nav__menu").classList.toggle("hide");
    });
}

// dropDown();

function carousel() {
    let leftButton = document.querySelector("#left__button");
    let rightButton = document.querySelector("#right__button");
    let currentSlideIndex = 0;
    let imageWidth = 500;
    document.querySelector(".carousel").style.width = `${4 * imageWidth}px`;
    rightButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Transform:", document.querySelector(".carousel").style.transform);
        currentSlideIndex += 1;
        document.querySelector(".carousel").style.transform = `translateX(${-currentSlideIndex * imageWidth}px)`;
        
    });

    leftButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Transform:", document.querySelector(".carousel").style.transform);
        currentSlideIndex -= 1;
        document.querySelector(".carousel").style.transform = `translateX(${-currentSlideIndex * imageWidth}px`;
        
    });
}

carousel();