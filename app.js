
// Dom elements used
const sketch = document.querySelector(".sketch-container");
const colorPad = document.querySelector(".colorPad");
const sizeBar = document.querySelector(".gridSize-bar");
const sizeTitle = document.querySelector(".size-title");
const randomColor = document.querySelector(".btn-random");
const darker = document.querySelector(".btn-darker");
const eraser = document.querySelector(".btn-eraser");
const clear = document.querySelector(".btn-clear");

let color = colorPad.value;

let boolRandom = false;
let boolDarker = false;
let boolEraser = false;

// -----------------------------------FUNCTIONS-------------------------------------------------

// Create a new grid
function createGrid(size) {
    deleteActualGrid()
    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add("sketchItem");
        div.style.flexBasis = (sketch.clientWidth / size) + "px";
        hoverEffectOn(div);
        sketch.appendChild(div);
    }
}

// Add Event Listener to the grid
function hoverEffectOn(item){
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = color;
    });
};

// Update future grid background color with selected color
function updateColor(e){
    if(boolRandom){
        let randomR = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        color =  `rgb(${randomG}, ${randomB}, ${randomR})`;
        boolRandom = false;
    }
    else if(boolDarker){
        boolDarker = false;
    }
    else if(boolEraser){
        color = "#FFFFFF"
        boolEraser = false;
    }
    else{
        color = colorPad.value;
    }
};

// Delete actual grid
function deleteActualGrid(){
    sketch.innerHTML = " ";
}

// -----------------------------------MAIN-------------------------------------------------

// Create a starting grid of 16x16
createGrid(16);

// Update the current color
colorPad.addEventListener("input", updateColor);

// randomColor.addEventListener("click", () =>{
//     boolRandom = true;
//     updateColor();
// });

// darker.addEventListener("click", () =>{
//     boolDarker = true;
//     updateColor();
// });

eraser.addEventListener("click", () =>{
    boolEraser = true;
    updateColor();
});

// Handle Clear btn -> Clear the entire sketch pad
clear.addEventListener("click", () => {createGrid(sizeBar.value)});

// Create a new grid according to what the user range is
sizeBar.addEventListener("mousemove", () => {
    sizeTitle.textContent = `Grid Size: ${sizeBar.value}x${sizeBar.value}`
});

sizeBar.addEventListener("change", () => {createGrid(sizeBar.value)});