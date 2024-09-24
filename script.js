const container = document.querySelector('.container');


function createGrid(squaresPerSide){

    container.innerHTML = '';
        
    const totalSize = 960;
    const boxSize = totalSize / squaresPerSide; 
    
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {

        const gridBox = document.createElement("div");
        gridBox.classList.add("grid-box");
        gridBox.style.width = `${boxSize}px`;
        gridBox.style.height = `${boxSize}px`;

        gridBox.onmouseover = function mouseOver(){
            gridBox.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        }
        
        container.appendChild(gridBox);
    }

    document.getElementById('generateGrid').addEventListener('click', () => {
        let input = prompt("Enter the canvas size you want");
        let squaresPerSide = parseInt(input);

        if(!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <=100){
            createGrid(squaresPerSide);
        } else {
            alert("Please enter between the range 1 to 100!")
        }
    });
}

createGrid(16);
