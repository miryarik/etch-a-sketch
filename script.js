gridContainer = document.querySelector(".grid-container");


// make 16 row
// add row number and flex-row class to each row
// append each row to the grid container
for (let i = 0; i < 16; i++) {
    let divRow = createDivRow();
    divRow.classList.add(`row-${i}`);
    divRow.classList.add("flex-row");
    gridContainer.appendChild(divRow);
}

// function to make a div as a row with 16 inner divs
// each of the inner divs has a column number and a grid-item class
function createDivRow() {

    let rowDiv = document.createElement("div");

    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.classList.add(`col-${i}`);
        div.classList.add("grid-item");
        rowDiv.appendChild(div);
    }

    return rowDiv;
}

// function to generate a random color
function getrandomColor() {
    // generate a random value for each color channel
    // and convert it to hexadecimal
    let red = Math.round(Math.random() * 256).toString(16);
    let green = Math.round(Math.random() * 256).toString(16);
    let blue = Math.round(Math.random() * 256).toString(16);
    
    // join the 3 hex values into one color
    return `#${red}${green}${blue}`;
}

// get all grid-items (boxes in grid)
const gridItems = document.querySelectorAll(".grid-item");

// each boc changes color when mouse enters it
gridItems.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = getrandomColor();
    });
});

