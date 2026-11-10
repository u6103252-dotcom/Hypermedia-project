const GRID_SIZE = 6;
const COLORS = [
    "color-blue",
    "color-yellow",
    "color-purple",
    "color-teal",
    "color-orange",
    "color-pink"
];

const LEVELS = [ // Each level contains a name and an array of cars
    {
        name: "Easy",
        cars: [
            { id: "YOU", row: 2, col: 1, length: 2, orientation: "H", main: true },
            { id: "A", row: 1, col: 3, length: 2, orientation: "V" },
            { id: "B", row: 1, col: 4, length: 2, orientation: "V" },
            { id: "C", row: 2, col: 5, length: 3, orientation: "V" },
            { id: "D", row: 0, col: 0, length: 3, orientation: "H" },
            { id: "E", row: 3, col: 0, length: 2, orientation: "H" },
            { id: "F", row: 4, col: 2, length: 2, orientation: "H" },
            { id: "G", row: 5, col: 0, length: 2, orientation: "H" },
            { id: "H", row: 3, col: 3, length: 2, orientation: "H" },
            { id: "I", row: 0, col: 5, length: 2, orientation: "V" }
        ]
    },
    {
        name: "Medium",
        cars: [
            { id: "YOU", row: 2, col: 1, length: 2, orientation: "H", main: true },
            { id: "A", row: 0, col: 3, length: 3, orientation: "H" },
            { id: "B", row: 2, col: 4, length: 2, orientation: "V" },
            { id: "C", row: 5, col: 1, length: 2, orientation: "H" },
            { id: "D", row: 1, col: 3, length: 2, orientation: "H" },
            { id: "E", row: 3, col: 5, length: 2, orientation: "V" },
            { id: "F", row: 2, col: 3, length: 2, orientation: "V" },
            { id: "G", row: 3, col: 0, length: 2, orientation: "V" },
            { id: "H", row: 5, col: 3, length: 2, orientation: "H" },
            { id: "I", row: 3, col: 2, length: 2, orientation: "V" },
            { id: "J", row: 0, col: 0, length: 2, orientation: "H" },
            { id: "K", row: 4, col: 3, length: 2, orientation: "H" }
        ]
    },
    {
        name: "Difficult",
        cars: [
            { id: "YOU", row: 2, col: 1, length: 2, orientation: "H", main: true },
            { id: "A", row: 0, col: 3, length: 2, orientation: "V" },
            { id: "B", row: 0, col: 4, length: 3, orientation: "V" },
            { id: "C", row: 0, col: 5, length: 2, orientation: "V" },
            { id: "D", row: 0, col: 0, length: 2, orientation: "H" },
            { id: "E", row: 1, col: 0, length: 2, orientation: "H" },
            { id: "F", row: 2, col: 0, length: 2, orientation: "V" },
            { id: "G", row: 3, col: 3, length: 2, orientation: "H" },
            { id: "H", row: 4, col: 2, length: 2, orientation: "V" },
            { id: "I", row: 4, col: 3, length: 2, orientation: "H" },
            { id: "J", row: 3, col: 5, length: 3, orientation: "V" },
            { id: "K", row: 5, col: 0, length: 2, orientation: "H" },
            { id: "L", row: 3, col: 1, length: 2, orientation: "H" }
        ]
    },
    {
        name: "Expert",
        cars: [
            { id: "YOU", row: 2, col: 1, length: 2, orientation: "H", main: true },
            { id: "A", row: 1, col: 3, length: 2, orientation: "V" },
            { id: "B", row: 0, col: 4, length: 3, orientation: "V" },
            { id: "C", row: 1, col: 5, length: 2, orientation: "V" },
            { id: "D", row: 0, col: 0, length: 2, orientation: "H" },
            { id: "E", row: 1, col: 0, length: 2, orientation: "V" },
            { id: "F", row: 3, col: 0, length: 2, orientation: "H" },
            { id: "G", row: 3, col: 2, length: 2, orientation: "H" },
            { id: "H", row: 4, col: 2, length: 2, orientation: "V" },
            { id: "I", row: 4, col: 4, length: 2, orientation: "H" },
            { id: "J", row: 5, col: 0, length: 2, orientation: "H" }
        ]
    },
    {
        name: "Impossible",
        cars: [
            { id: "YOU", row: 2, col: 1, length: 2, orientation: "H", main: true },
            { id: "A", row: 0, col: 2, length: 2, orientation: "H" },
            { id: "B", row: 1, col: 5, length: 2, orientation: "V" },
            { id: "C", row: 0, col: 0, length: 2, orientation: "H" },
            { id: "D", row: 2, col: 4, length: 2, orientation: "V" },
            { id: "E", row: 4, col: 4, length: 2, orientation: "H" },
            { id: "F", row: 3, col: 3, length: 2, orientation: "V" },
            { id: "G", row: 4, col: 2, length: 2, orientation: "V" },
            { id: "H", row: 1, col: 3, length: 2, orientation: "V" },
            { id: "I", row: 1, col: 0, length: 2, orientation: "V" },
            { id: "J", row: 3, col: 0, length: 3, orientation: "H" }
        ]
    }
];

// References to DOM elements

const menuScreen = document.getElementById("menu-screen");
const gameScreen = document.getElementById("game-screen");
const victoryScreen = document.getElementById("victory-screen");

const levelList = document.getElementById("level-list");
const boardElement = document.getElementById("game-board");
const undoButton = document.getElementById("undo-button");
const selectionHint = document.getElementById("selection-hint");

const negativeButton = document.getElementById("move-negative");
const positiveButton = document.getElementById("move-positive");
const gameTitle = document.getElementById("game-title");
const moveCounter = document.getElementById("move-counter");
const victoryMessage = document.getElementById("victory-message");
const exitOpening = document.getElementsByClassName("exit-opening")[0];

const backButton = document.getElementById("back-button");
const resetButton = document.getElementById("reset-button");
const victoryMenuButton = document.getElementById("victory-menu-button");
const playAgainButton = document.getElementById("play-again-button");
const nextLevelButton = document.getElementById("next-level-button");

// Variables that store the current game state
var currentLevelIndex = 0;
var cars = [];
var moveHistory = [];
var selectedCarId = null;
var dragState = null;
var gameFinished = false;

function cloneCars(source) { // Creates copies of the cars in a level
    const cars = [];
    for (let i=0; i<source.length; i++) {
        const car = {};
        car.id = source[i].id;
        car.row = source[i].row;
        car.col = source[i].col;
        car.length = source[i].length;
        car.orientation = source[i].orientation;
        car.main = source[i].main;
        cars.push(car);
    }
    return cars;
}

function showScreen(screen) { // Hides all screens and displays only the screen passed as an arg
    menuScreen.className = "screen hidden";
    gameScreen.className = "screen hidden";
    victoryScreen.className = "screen hidden";
    screen.className = "screen";
}

function showMenu() {  // Creayes the level selection menu
    levelList.innerHTML = "";

    LEVELS.forEach((level, index) => { // Create one button for each available level
        const button = document.createElement("button");
        button.type = "button";
        button.className = "level-option";
        const preview = document.createElement("div");
        preview.className = "level-preview";

        level.cars.forEach((car, carIndex) => { // Create a small representation of every car in the level
            const smallCar = document.createElement("span");
            smallCar.className = "small-car ";
            if (car.main) smallCar.className += "main-small-car";
            else smallCar.className += COLORS[(carIndex-1) % COLORS.length];

            smallCar.style.left = (car.col/GRID_SIZE * 100) + "%";
            smallCar.style.top = (car.row/GRID_SIZE * 100) + "%";
            let previewWidth = 1;
            let previewHeight = 1;

            if (car.orientation==="H") previewWidth = car.length;
            else previewHeight = car.length;

            smallCar.style.width = (previewWidth/GRID_SIZE * 100) + "%";
            smallCar.style.height = (previewHeight/GRID_SIZE * 100) + "%";
            preview.appendChild(smallCar);
        });

        // To isplay the level name below its miniature board
        const info = document.createElement("span");
        info.className = "level-info";
        info.textContent = level.name;

        button.appendChild(preview);
        button.appendChild(info);
        button.addEventListener("click", () => startLevel(index));
        levelList.appendChild(button);
    });
}

function startLevel(index) { // Initializes a level and resets all variables from the previous one
    currentLevelIndex = index;
    gameTitle.innerHTML = "Find the exit<br>("+LEVELS[index].name+")";
    cars = cloneCars(LEVELS[index].cars);

    moveHistory = [];
    selectedCarId = null;
    gameFinished = false;
    dragState = null;

    showScreen(gameScreen);
    showBoard();
    updateData();
}

function getInitPosition(car) { // Returns the starting position of a car along its movement
    if (car.orientation==="H") return car.col;
    return car.row;
}


function getCarCells(car, position=getInitPosition(car)) { // Returns all board cells occupied by a car at a position
    const cells = [];
    for (let i=0; i<car.length; i++) {
        if (car.orientation==="H") cells.push({ row: car.row, col: position+i });
        else cells.push({ row: position+i, col: car.col });
    }
    return cells;
}

function isInsideBoard(row, col) { // Checks if a row and column are in a valid board cell
    return (row >= 0) && (row < GRID_SIZE) && (col >= 0) && (col < GRID_SIZE);
}

function freeCell(row, col, movingCarId) { // Checks if a cell is free and can be occupied by a car
    if (!isInsideBoard(row, col)) return false;
    return !cars.some(car => car.id!==movingCarId && getCarCells(car).some
        (cell => cell.row===row && cell.col===col)
    );
}


function canPlaceAt(car, newPosition) { // Checks if a car can be placed at a new position
    if (newPosition<0) return false;
    if (newPosition+car.length > GRID_SIZE) return false;
    return getCarCells(car, newPosition).every(cell =>
        freeCell(cell.row, cell.col, car.id)
    );
}

function showBoard() { // Draws the board, its cells and all the cars in their positions
    boardElement.innerHTML = "";
    for (let i=0; i<GRID_SIZE*GRID_SIZE; i++) {
        const cell = document.createElement("div");
        cell.className = "board-cell";
        boardElement.appendChild(cell);
    }

    cars.forEach((car, index) => { // Create and position every car
        const element = document.createElement("button");
        const position = getInitPosition(car);

        // Now we calculate the size of a cell and the distance between their positions (4px gap in CSS)
        const gap = 4;
        const cellSize = (boardElement.clientWidth-gap * (GRID_SIZE-1)) / GRID_SIZE;
        const step = cellSize + gap;
        element.type = "button";
        element.className = "car";

        // Assigns CSS H/V classes, main cars, store car id in HTML, displays "YOU" and create descriptions:

        if (car.orientation==="H") element.className += " horizontal";
        else element.className += " vertical";

        if (car.main) element.className += " main-car";
        else element.className += " " + COLORS[(index-1) % COLORS.length];

        element.setAttribute("data-car-id", car.id);
        if (car.main) element.textContent = "YOU";
        else element.textContent = car.id;

        // To calculate dimensions and positions for H/V cars, hightlight car selected, mouse-click events and update exit position:

        if (car.orientation==="H") {
            element.style.width = (car.length * cellSize + (car.length-1) * gap) + "px";
            element.style.height = cellSize + "px";
            element.style.left = (position * step) + "px";
            element.style.top = (car.row * step) + "px";
        } 
        else {
            element.style.width = cellSize + "px";
            element.style.height = (car.length * cellSize + (car.length-1) * gap) + "px";
            element.style.left = (car.col * step) + "px";
            element.style.top = (position * step) + "px";
        }
        if (selectedCarId===car.id) element.className += " selected";
        element.addEventListener("mousedown", carPointerDown);
        boardElement.appendChild(element);
    });
    updateExit();
}

function updateExit() { // Positions the exit opening at the same row as the main car
    const target = cars.find(car => car.main);
    const gap = 4;
    const cellSize = (boardElement.clientWidth-gap * (GRID_SIZE-1)) / GRID_SIZE;
    const step = cellSize + gap;

    exitOpening.style.top = (boardElement.offsetTop + target.row * step) + "px";
    exitOpening.style.height = cellSize + "px";
}

function updateSelection() { // Updates the select message and mov buttons according to selected car
    const car = cars.find(item => item.id===selectedCarId);
    if (!car) {
        selectionHint.textContent = "Select a car";
        negativeButton.textContent = "←";
        positiveButton.textContent = "→";
        negativeButton.disabled = true;
        positiveButton.disabled = true;
        return;
    }
    let selectedCarText = "Car " + car.id; // Display ID of selected car
    if (car.main) selectedCarText = "Your Car";
    selectionHint.textContent = "Selected: " + selectedCarText;

    // To set the mov arrows according to the car's orientation
    if (car.orientation==="H") {
        negativeButton.textContent = "←";
        positiveButton.textContent = "→";
    } 
    else {
        negativeButton.textContent = "↑";
        positiveButton.textContent = "↓";
    }
    negativeButton.disabled = false;
    positiveButton.disabled = false;
}

function updateData() { // Updates move counter, undo button and selected car info
    undoButton.disabled = (moveHistory.length===0) || gameFinished;
    moveCounter.textContent = moveHistory.length;
    updateSelection();
}

function moveCar(id, d) { // Moves a car by a specified nº of cells
    if (gameFinished || d===0) return 0;
    const car = cars.find(item => item.id===id);
    if (!car) return 0;

    const oldPosition = getInitPosition(car);
    let direction = 1;
    if (d<0) direction = -1;

    let target = oldPosition;
    // We try moving 1 cell at a time until requested dist is reached (or a car or the board to prevent further movement)
    while (Math.abs(target-oldPosition) < Math.abs(d)) {
        const next = target + direction;
        if (!canPlaceAt(car, next)) break;
        target = next;
    }

    const moved = target-oldPosition;
    if (moved===0) return 0;
    moveHistory.push({ id: id, position: oldPosition });

    if (car.orientation==="H") car.col = target; // To update the car's position according to its orientation
    else car.row = target;

    // Redraw the board and update game info
    selectedCarId = id;
    showBoard();
    updateData();
    checkVictory();
    return moved;
}

function undoMove() { // The function restore the position of a car before the last move
    if (moveHistory.length===0 || gameFinished) return;
    const previous = moveHistory.pop();
    const car = cars.find(item => item.id === previous.id);

    if (car.orientation==="H") car.col = previous.position;
    else car.row = previous.position;
    selectedCarId = car.id;
    showBoard();
    updateData();
}

function checkVictory() { // Checks if the main car has reached the exit
    const target = cars.find(car => car.main);
    if (!target || target.col + target.length < GRID_SIZE) return;
    gameFinished = true;
    victoryMessage.textContent = "Level completed in " + moveHistory.length + " moves!";
    showScreen(victoryScreen);
}

function resetLevel() { startLevel(currentLevelIndex); } // Restarts current level from its original config

function carPointerDown(event) { // Starts the mouse drag operation when user presses a car
    if (gameFinished) return;
    const carId = event.currentTarget.getAttribute("data-car-id");
    const car = cars.find(item => item.id===carId);
    if (!car) return;
    selectedCarId = car.id;

    dragState={ // To save the initial mouse coordinates and car info
        id: car.id,
        orientation: car.orientation,
        mouseX: event.clientX,
        mouseY: event.clientY,
        lastCells: 0
    };
    showBoard();
    updateSelection();
}

function carPointerMove(event) { // To move the selected car while the mouse is being dragged
    if (!dragState || gameFinished) return;
    const gap = 4;
    const cellSize = (boardElement.clientWidth-gap * (GRID_SIZE-1)) / GRID_SIZE;
    const step = cellSize + gap;

    // Only movement along the car's orientation
    let distance = 0;
    if (dragState.orientation==="H") distance = event.clientX-dragState.mouseX;
    else distance = event.clientY - dragState.mouseY;

    // To convert the mouse distance into a nº of board cells & move the car if it has moved at least 1 cell
    const cells = Math.trunc(distance / step);
    const d = cells - dragState.lastCells;
    if (d !== 0) {
        const moved = moveCar(dragState.id, d);
        dragState.lastCells += moved;
    }
}

function carPointerUp() { dragState=null; } // Ends drag operation when mouse button is released

// To allow dragging to continue even when the cursor leaves the board
document.addEventListener("mousemove", carPointerMove);
document.addEventListener("mouseup", carPointerUp);

backButton.addEventListener("click", () => { // Used to return to level selection menu and cancel any active drag
    dragState = null;
    showScreen(menuScreen);
});

// Connect game buttons to their functions
resetButton.addEventListener("click", resetLevel);
undoButton.addEventListener("click", undoMove);

negativeButton.addEventListener("click", () => { // Move selected car one cell in - direction
    if (selectedCarId) moveCar(selectedCarId, -1);
});

positiveButton.addEventListener("click", () => { // Same in + direction
    if (selectedCarId) moveCar(selectedCarId, 1);
});

victoryMenuButton.addEventListener("click", () => { // Return to level selection menu after completing a level
    showScreen(menuScreen);
});

playAgainButton.addEventListener("click", resetLevel); // Restart same level after winning

nextLevelButton.addEventListener("click", () => { // Start next level (% to return 1st level after last one)
    startLevel((currentLevelIndex+1) % LEVELS.length);
});

window.addEventListener("resize", () => { // Redraw board when window changes size to keep cars correctly positioned
    if (gameScreen.className.indexOf("hidden")===-1) showBoard();
});

// Finally, to generate the level selection menu and display it when the page loads
showMenu();
showScreen(menuScreen);