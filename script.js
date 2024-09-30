gridContainer = document.querySelector(".grid-container");


for (let i = 0; i < 16; i++) {
    let divRow = createDivRow();
    divRow.classList.add(`row-${i}`);
    divRow.classList.add("flex-row");
    gridContainer.appendChild(divRow);
}


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