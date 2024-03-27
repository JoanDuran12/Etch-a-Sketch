
const sketch = document.querySelector(".sketch-container");



function createSketch(size) {
    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add("sketchItem");
        div.style.width = (sketch.clientWidth / size) + "px";
        sketch.appendChild(div);
    }
}

createSketch(8);
