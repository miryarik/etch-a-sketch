gridContainer = document.querySelector(".grid-container");


function createGrid(size) {
    // function to create grid of given size
    // make size number of rows
    // add row number and flex-row class to each row
    // append each row to the grid container

    let tempDiv = document.createElement("div");

    for (let i = 0; i < size; i++) {
        let divRow = createDivRow(size);
        divRow.classList.add(`row-${i}`);
        divRow.classList.add("flex-row");
        tempDiv.appendChild(divRow);
    }

    gridContainer.innerHTML = tempDiv.innerHTML;
    addListenerToGrid();
}

function createDivRow(size) {
    // function to make a div as a row with 16 inner divs
    // each of the inner divs has a column number and a grid-item class
    
    let rowDiv = document.createElement("div");

    for (let i = 0; i < size; i++) {
        let div = document.createElement("div");
        div.classList.add(`col-${i}`);
        div.classList.add("grid-item");
        rowDiv.appendChild(div);
    }

    return rowDiv;
}

function getrandomColor() {
    // function to generate a random color

    // generate a random value for each color channel
    // and convert it to hexadecimal
    let red = Math.round(Math.random() * 256).toString(16);
    let green = Math.round(Math.random() * 256).toString(16);
    let blue = Math.round(Math.random() * 256).toString(16);
    
    // join the 3 hex values into one color
    return `#${red}${green}${blue}`;
}

function addListenerToGrid() {
    // get all grid-items (boxes in grid)
    const gridItems = document.querySelectorAll(".grid-item");
    
    // each box changes color when mouse enters it
    gridItems.forEach(box => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = getrandomColor();
        });
    });
}


// create default grid
createGrid(16);

// get the slider for grid size
const sizeSlider = document.querySelector("#grid-size-slider");
// get the header on it used as label
const sliderLabel = document.querySelector(".grid-size-label");

// set default size as 16
// show this on label as well
sizeSlider.value = 16;
sliderLabel.innerText = "Grid Size: 16";

// whenever the slider moves
sizeSlider.addEventListener("input", (event) => {
    sizeSlider.value = event.target.value
    sliderLabel.innerText = `Grid Size: ${sizeSlider.value}`;
});


// get the button for making new grid as per size
const newGridBtn = document.querySelector("#new-grid-btn");

// button click makes a new grid with given size
newGridBtn.addEventListener("click", () => {
    createGrid(sizeSlider.value);
} )