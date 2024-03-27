
function createSketch(size) {

    const sketch = document.querySelector(".sketch-container");
    let divNum = 0;

    for(let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add("sketchItem");
        // div.style.padding = "30px"
        // div.style.height = "30px";
        // div.style.width = "30px";
        div.style.flexBasis = "auto";
        divNum++;
        div.textContent = divNum;
        sketch.appendChild(div);
    }
}

createSketch(16);
