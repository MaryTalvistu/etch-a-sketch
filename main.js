// Get our container and button
const container = document.querySelector('#container');
const button = document.querySelector('#clear-btn');

// Listen for clicks
button.addEventListener('click', clearScreen);

// Create a grid with n by n squares
function createGrid(squaresPerSide) {
    // Create n columns and rows to hold our squares
    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 40px)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 40px)`;

    // Create n*n squares
    for (let i=0; i < (squaresPerSide * squaresPerSide); i++){
        const square = document.createElement('div');
        square.classList.add('square');
        // Every square has a lightness value
        square.setAttribute("lightness", 50);

        square.addEventListener('mouseover', function(e){
            // Get the lightness value of the square we are hovering over
            currentLightness = e.target.getAttribute("lightness");
            // Set a random color and its lightness
            e.target.style.backgroundColor = `hsl(${Math.floor(Math.random()*361)}, 100%, ${currentLightness}%)`;
            e.target.setAttribute("lightness", currentLightness-5);
        });
        container.appendChild(square);
    }
}

// Clear the screen and make new grid from user input
function clearScreen() {
    const squares = document.querySelectorAll('.square');
    // Remove squares from DOM
    squares.forEach((square) => {
        square.remove();
    });
    const userSquares = prompt("Enter number of squares per side");
    createGrid(userSquares);
}

createGrid(16);

