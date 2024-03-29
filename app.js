
const sketch = document.querySelector(".sketch-container");
const colorPad = document.querySelector(".colorPad");

// Create a new grid
function createSketch(size) {
    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add("sketchItem");
        div.style.flexBasis = (sketch.clientWidth / size) + "px";
        // hoverEffectOn(div);
        sketch.appendChild(div);
    }
}

// Apply selected color to the corresponding cell
function hoverEffectOn(item){
    const color = colorPad.value;
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = color;
    })
}

// function hoverEffectOff(item){
//     const color = colorPad.value;
//     item.addEventListener("mouseover", () => {
//         this.style.color = "black";
//     })
// }

// Create a starting grid of 16x16
createSketch(32);

colorPad.addEventListener("click", () =>{
    const color = colorPad.value;
    hoverEffectOn(div, color);
})