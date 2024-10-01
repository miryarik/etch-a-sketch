// get grid container
gridContainer = document.querySelector(".grid-container");

const createGrid = (gridSize) => {
    // function to create grid

    // erase prev grid
    gridContainer.innerHTML = "";

    // create total number of boxes
    let numBoxes = gridSize * gridSize;

    // initial size of each box
    // wrt grid-container square dimensions
    let boxSize = 100 / gridSize;

    for (let i = 1; i <= numBoxes; i++) {

        let box = document.createElement("div");
        box.classList.add("box");
        box.style.flexBasis = `${boxSize}%`;
        gridContainer.appendChild(box);
        
        styleBorders(box, gridSize, i);

    }
    
    addListenerToGrid();
};


function getrandomColor () {
    // function to generate a random color

    // generate a random value for each color channel
    // and convert it to hexadecimal
    let red = Math.round(Math.random() * 256).toString(16);
    let green = Math.round(Math.random() * 256).toString(16);
    let blue = Math.round(Math.random() * 256).toString(16);
    
    // join the 3 hex values into one color
    return `#${red}${green}${blue}`;
}


function addListenerToGrid () {
    // get all grid-items (boxes in grid)
    const boxes = document.querySelectorAll(".box");
    
    // each box changes color when mouse enters it
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            
            box.style.backgroundColor = setColor();
        });
    });
}

function styleBorders (box, gridSize, i) {

    // smoothen grid corners
    const numBoxes = gridSize ** 2;
    const borderStyle = "1px solid #007aff"
    const cornerRadius = "16px";
            
    if (i == 1)
        box.style.borderTopLeftRadius = cornerRadius;

    if (i == gridSize)
        box.style.borderTopRightRadius = cornerRadius;

    if (i == numBoxes)
        box.style.borderBottomRightRadius = cornerRadius;

    if (i == (numBoxes - gridSize + 1))
        box.style.borderBottomLeftRadius = cornerRadius;


    // make edge borders solid
    if (i >= 1 && i <= gridSize)
        box.style.borderTop = borderStyle;
    
    if (i % gridSize == 0)
        box.style.borderRight = borderStyle;

    if (i <= numBoxes && i >= (numBoxes - gridSize + 1))
        box.style.borderBottom = borderStyle;

    if (i % gridSize == 1)
        box.style.borderLeft = borderStyle;

}


// allow choosing color
const colorInput = document.querySelector("#color-input");
var isRandomColor = true;

function setColor() {
    // function to return color value
    // if the random color button is clicked return random color
    // else return input color

    if (isRandomColor)
        return getrandomColor();

    else {
        return colorInput.value;
    }
}

// random colors button should toggle isRandomColor
// and change button color on toggle
const randColorBtn = document.querySelector("#rand-color-btn");

function toggleBtnColor() {
    isRandomColor = !isRandomColor;

    if (isRandomColor)
        randColorBtn.style.backgroundColor = "#006adb";
    else
        randColorBtn.style.backgroundColor = "#56779b";
}

randColorBtn.addEventListener('click', (event) => {
    toggleBtnColor();
})

// create default grid
createGrid(16);


// get the slider for grid size
const sizeInput = document.querySelector("#grid-size-input");


// set default size as 16
sizeInput.value = 16;

// whenever the slider moves
sizeInput.addEventListener("input", (event) => {
    sizeInput.value = event.target.value
});


// get the button for making new grid as per size
const newGridBtn = document.querySelector("#new-grid-btn");

// button click makes a new grid with given size
newGridBtn.addEventListener("click", () => {
    createGrid(sizeInput.value);
} )