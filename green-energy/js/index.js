// load imgs on page-load
function preloader() {
    const imagesList = [
        "./img/solution-1.jpg",
        "./img/solution-2.jpg",
        "./img/solution-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // ready to use imgs
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);


// resource-object
let content = {
    "page-1": {
        "heading": "Solar heating",
        "imageUrl": "./img/solution-1.jpg",
        "imageAlt": "house with solar panels",
        "bodyText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    "page-2": {
        "heading": "Wind energy",
        "imageUrl": "./img/solution-2.jpg",
        "imageAlt": "wind turbine",
        "bodyText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    "page-3": {
        "heading": "Vertical farming",
        "imageUrl": "./img/solution-3.jpg",
        "imageAlt": "vertical farming for tomatoes",
        "bodyText": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }
}


// event-target-objects
let controls = document.getElementById("controls").children;
let dc = document.getElementById("dynamic-content");


// This function is event handler
let handleSelection = function (click) {
    let currentListItem = click.target;
    // console.log(currentListItem.innerText);

    for (let i = 0; i < controls.length; i++) {
        // check if current list-item has attribute id:
        if (controls[i].hasAttribute('id')) {
            controls[i].removeAttribute('id');
        }
    }
    // add it-attribute to the currently clicked list-item:
    currentListItem.setAttribute('id', 'active');

    
    // checking the methods and properties event-object has
    // for (let k in click) {
    //     console.log(`${k}: ${click[k]}`);
    // }

    // current li clicked item
    let currentButton = click.target;

    // save the data-page-id value to use as a key to access the corresponding content 
    let currentPage = currentButton.dataset.pageId;

    // accessing corresponding content
    let currentContent = content[currentPage];
    console.log(currentContent);

    // insert markup
    let html = `
        <h2>${currentContent.heading}</h2>
        <img src="${currentContent.imageUrl}" alt="${currentContent.imageAlt}">
        <p>${currentContent.bodyText}</p>
    `;

    dc.innerHTML = html;
};

for (let i = 0; i < controls.length; i++) {
    controls[i].addEventListener("click", handleSelection);
}