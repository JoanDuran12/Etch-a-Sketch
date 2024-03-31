
// Elements used
const sketch = document.querySelector(".sketch-container");
const colorPad = document.querySelector(".colorPad");
const sizeBar = document.querySelector(".gridSize-bar")
const sizeTitle = document.querySelector(".size-title")
let color = colorPad.value;

// -----------------------------------FUNCTIONS-------------------------------------------------

// Create a new grid
function createGrid(size) {
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
function updateColor(){
    color = colorPad.value;
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

// Create a new grid according to what the user range is
sizeBar.addEventListener("mousemove", () => {
    sizeTitle.textContent = `Grid Size: ${sizeBar.value}x${sizeBar.value}`
});
sizeBar.addEventListener("change", () => {
    deleteActualGrid();
    createGrid(sizeBar.value);
})