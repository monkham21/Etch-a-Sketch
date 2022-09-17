function createGrid(grid) {
    const container = document.querySelector('.div-container');

    // create divs (squares) in a loop
    for (let i = 0; i < grid; i++) {
        const subContainer = document.createElement('div');
        subContainer.classList.add('sub-container');

        for (let j = 0; j < grid; j++) {
            const square = document.createElement('div');
            square.classList.add('square');

            // add the divs to sub container
            subContainer.appendChild(square);
            console.log(1);
        }
        // add sub containers to div container
        container.appendChild(subContainer);
    }
}


// default grid
createGrid(20);
document.querySelectorAll(".square").forEach(square => draw(square));


// hover effect
function draw(square) {
    square.onmouseover = function() {
        square.style.backgroundColor = "black"
    }
}


// reset grid button
document.querySelector('.reset-grid').onclick = () => {
    let grid = prompt("Please enter the number of squares (max = 60)", 20);
    if (grid <= 60) {
        document.querySelector('.div-container').innerHTML = "";
        createGrid(grid);
        document.querySelectorAll(".square").forEach(square => draw(square));
    } else {
        alert("The number exceeds the maximum.")
    }
}


// clear button
document.querySelector('.clear').onclick = () => {
    document.querySelectorAll('.square').forEach((square) => {
        square.style.backgroundColor = "white";
    })
}
