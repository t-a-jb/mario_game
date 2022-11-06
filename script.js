

// create a selector function to select elements in the DOM

function get(selector) {
    return document.querySelector(selector);
};



// create a two diemnsional loop for the game board
// loop flow Y then X
// two dimensional array

const tiles = [
    ['green', 'green', 'green', 'green', 'green', 'brown'],
    ['green', 'green', 'green', 'green', 'green', 'green'],
    ['green', 'green', 'brown', 'green', 'green', 'green'],
    ['brown', 'green', 'green', 'green', 'green', 'blue'],
    ['green', 'green', 'green', 'green', 'blue', 'blue']
]



// iterate through the Y axis then the X axis to create a table in the DOM

for (let y = 0; y < tiles.length; y += 1) {
    for (let x =0; x < tiles[y].length; x += 1) {

        // as we move down the y axis we move the tile top 0*100, 1*100 etc, and change background colour
        const template = 
            `<div class="tile" 
                style="
                    top:${y * 100}px; 
                    left:${x * 100}px;
                    background-color: ${tiles[y][x]};
                "> 
            </div>`;
        // select the game-board and add template via innerHTML
        get('.game-board').innerHTML += template;

    }
};

// create a counter to count the number of squares

let counterX = 0;
let counterY = 0;

for (let y = 0; y < tiles.length; y += 1) {
    counterY++;
    for (let x =0; x < tiles[y].length; x += 1) {
        counterX++;
    };
};

console.log(counterY);
console.log(counterX);




// create Mario and Bowser character

// store image in a variable
const marioImg = './images/marioImg.png';

// place mario on gameboard

get('.game-board').innerHTML += `<img src="${marioImg}" class="mario" alt="Mario">`;

// place Bowser on the game-board
const bowserImg = './images/bowserImg.png';

get('.game-board').innerHTML += `<img src="${bowserImg}" class="bowser" alt="Bowser">`;



// Create Mario's movements

// need to store a JS variable that links to the DOM mario
const mario = get('.mario');

// top position
let marioY = 0;
// left position
let marioX = 0; 

/*
Keycodes
Left = 37
Up = 38
Right = 39
Down = 40
*/

document.addEventListener('keydown', (event) => {
    // console.log(event.keyCode);

    // switch turns an action on
    // code to connect keyboard events with onscreen actions
    switch(event.keyCode) {
        case 37:
            console.log('left');
            if (marioX > 0 && tiles[marioY][marioX - 1] === 'green') {
                marioX -= 1;
                mario.style.left = marioX * 100 + 'px';
            };
            console.log(marioX);
            console.log(marioY);
            break;
        
        case 38:
            console.log('Up');
            if (marioY > 0 && tiles[marioY - 1][marioX] === 'green') {
                marioY -= 1;
                mario.style.top = marioY * 100 + 'px';
            };
            console.log(marioX);
            console.log(marioY);
            break;

        case 39:
            console.log('Right');
            if (marioX < counterX / counterY -1 && tiles[marioY][marioX + 1] === 'green') {
                marioX += 1;
                mario.style.left = marioX * 100 + 'px';
            };
            console.log(marioX);
            console.log(marioY);
            break; 

        case 40:
            console.log('Down');
            if (marioY < counterY - 1 && tiles[marioY + 1][marioX] === 'green') {
                marioY += 1;
                mario.style.top = marioY * 100 + 'px';  
            };
            console.log(marioX);
            console.log(marioY);
            break;

        default:
            console.log('No case');
            break;
    };
});


// Bowser movement

// store a JS variable that links to Bowser in the DOM

const bowser = get('.bowser');

// create a random number for X and Y within the count values
// i.e. Y = 0, 1, 2, 3, 5
// X = counterX / counter Y

function generateRandomY (minLimitY = 1, maxLimitY = counterY - 1) {
    let differenceY = maxLimitY - minLimitY;
    let randY = Math.random();
    randY = Math.floor(randY * differenceY);
    randY = randY + minLimitY;
    return randY;
};

function generateRandomX (minLimitX = 1, maxLimitX = counterX / counterY - 1) {
    let differenceX = maxLimitX - minLimitX;
    let randX = Math.random();
    randX = Math.floor(randX * differenceX);
    randX = randX + minLimitX;
    return randX;
}


// place bowser randomly on board
generateRandomY();
generateRandomX();

let bowserY = generateRandomY();
let bowserX = generateRandomX();

let placeBowser = function () {
    bowser.style.left = bowserX * 100 + 'px';
    bowser.style.top = bowserY * 100 + 'px';
};

placeBowser();

console.log(bowserX);
console.log(bowserY);


// move Bowser randomly

// generate a random number of 0 or 1

function generateZeroToFour (min = 0, max = 4) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
    
    /*let rand = Math.round(Math.random());
    return rand; */
};


let bowserMovement = function () {
    generateZeroToFour();
    console.log(generateZeroToFour());

    // Bowser Down
    if ((generateZeroToFour() === 0) && (bowserY < counterY - 1) && (tiles[bowserY + 1][bowserX] === 'green')) {
        bowserY += 1;
        bowser.style.top = bowserY * 100 + 'px';  
    }

        // Bowser Up
        else if ((generateZeroToFour() === 1) && (bowserY > 0) && (tiles[bowserY - 1][bowserX] === 'green')) {
                bowserY -= 1;
                bowser.style.top = bowserY * 100 + 'px';
            } 
            
            // Bowser Right
            else if ((generateZeroToFour() === 2) && (bowserX < counterX / counterY -1) && (tiles[bowserY][bowserX + 1] === 'green')) {
                bowserX += 1;
                bowser.style.left = bowserX * 100 + 'px';
            } 
                
                // Bowser Left
                else if ((generateZeroToFour() === 3) && (bowserX > 0) && (tiles[bowserY][bowserX - 1] === 'green')) {
                    bowserX -= 1;
                    bowser.style.left = bowserX * 100 + 'px';
                } 
                
                    // else no movement - Bowser is not very smart
                    else {
                        bowserY += 0;
                        bowser.style.top = bowserY * 100 + 'px';
                        bowserY -= 0;
                        bowser.style.top = bowserY * 100 + 'px';
                        bowserX += 0;
                        bowser.style.left = bowserX * 100 + 'px';
                        bowserX -= 0;
                        bowser.style.left = bowserX * 100 + 'px'; 
                    }
};

let bowserTimer = setInterval(bowserMovement, 1000);

// Mario is caught by Bowser

if((marioX === bowserX) && (marioY === bowserY)) {
    alert('Game Over');
};


