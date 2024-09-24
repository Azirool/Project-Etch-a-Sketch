const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {

    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    
    gridBox.onmouseover = function mouseOver(){
        gridBox.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    }
    
    container.appendChild(gridBox);
}