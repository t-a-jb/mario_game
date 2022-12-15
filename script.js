
// // music

// const audio = new Audio('./images/mario.mp3');

// // const player = document.getElementById("player");

// function playPauseTrack() {

//     if( document.body.classList.contains("playing") ) {
//         audio.pause();
//         document.getElementById("player").classList.remove("playing");
//         console.log('music paused');
       
//     } else {
//         audio.play();
//         document.getElementById("player").classList.add("playing")
//         console.log('music playing');

//     }
// }

let on_off = document.querySelector('.player .button');
let audioMain = document.querySelector('.musicOn audio');
let audioDie = new Audio('./images/deathmusic.mp3');
let audioVictory = new Audio('./images/victorymusic.mp3');
let audioCoin = new Audio('./images/coinmusic.mp3');

on_off.onclick = function() {
  audioMain.paused ? audioMain.play() : musicStop();
};

function musicStop() {
  audioMain.pause();
  audioMain.currentTime = 0;
};




























// create a selector function to select elements in the DOM

function get(selector) {
    return document.querySelector(selector);
};


// open page to top left of screen

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


// create a two diemnsional loop for the game board
// loop flow Y then X
// two dimensional array

const color = ['brown', 'blue'];

// console.log(color.length)

// create function that calls a random color but has greater chance of green
function ranCol () { 
    let r = Math.random();
    return r < 0.4 || r > 0.6 ? 'green' : color[Math.floor(r*color.length)];
}

ranCol();

const tiles = [
    ['green' , ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()],
    ['green' , ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()],
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
    [ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol(), ranCol()], 
]


// const tiles = [
//     ['green', 'green', 'green', 'green', 'green', 'brown'],
//     ['green', 'green', 'green', 'green', 'green', 'green'],
//     ['green', 'green', 'brown', 'green', 'green', 'green'],
//     ['brown', 'green', 'green', 'green', 'green', 'blue'],
//     ['green', 'green', 'green', 'green', 'blue', 'blue']
// ]



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

// console.log(counterY);
// console.log(counterX);




// create Mario and Bowser character

// store image in a variable
const marioImg = './images/marioImg.png';

// place mario on gameboard

get('.game-board').innerHTML += `<img src="${marioImg}" id="mario" class="mario" alt="Mario">`;

// place Bowser on the game-board
const bowserImg = './images/bowserImg.png';

get('.game-board').innerHTML += `<img src="${bowserImg}" class="bowser" alt="Bowser">`;

// place Goomba on the game-board
const goombaImg = './images/goomba.png';

get('.game-board').innerHTML += `<img src="${goombaImg}" class="goomba" alt="goomba">`;




// COINS


// store coin image in a variable
const coinImg = './images/coin.png';

// place coin one gameboard

get('.game-board').innerHTML += `<img src="${coinImg}" id="coinOne" class="coin coinOne" alt="coin">`;

let coinOneY = 0;
let coinOneX = 0;
let coinOne = get(`.coinOne`);

function placeCoinOne() {
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
    generateRandomY();
    generateRandomX();
    coinOneY = generateRandomY();
    coinOneX = generateRandomX();

    if (tiles[coinOneY][coinOneX] !== 'green') {
        placeCoinOne();
    }

    function dropCoinOne() {
        coinOne.style.left = coinOneX * 100 + 'px';
        coinOne.style.top = coinOneY * 100 + 'px';
    }
    dropCoinOne();
}

placeCoinOne();


//  Coin Two

get('.game-board').innerHTML += `<img src="${coinImg}" id="coinTwo" class="coin coinTwo" alt="coin">`;

let coinTwoY = 0;
let coinTwoX = 0;
let coinTwo = get(`.coinTwo`);

function placeCoinTwo() {
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
    generateRandomY();
    generateRandomX();
    coinTwoY = generateRandomY();
    coinTwoX = generateRandomX();

    if (tiles[coinTwoY][coinTwoX] !== 'green') {
        placeCoinTwo();
    }

    function dropCoinTwo() {
        coinTwo.style.left = coinTwoX * 100 + 'px';
        coinTwo.style.top = coinTwoY * 100 + 'px';
    }
    dropCoinTwo();
}

placeCoinTwo();

// Coin Three

get('.game-board').innerHTML += `<img src="${coinImg}" id="coinThree" class="coin coinThree" alt="coin">`;

let coinThree = get(`.coinThree`);
let coinThreeY = 0;
let coinThreeX = 0;

function placeCoinThree() {
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
    generateRandomY();
    generateRandomX();
    coinThreeY = generateRandomY();
    coinThreeX = generateRandomX();

    if (tiles[coinThreeY][coinThreeX] !== 'green') {
        placeCoinThree();
    }
    
    function dropCoinThree() {
                coinThree.style.left = coinThreeX * 100 + 'px';
                coinThree.style.top = coinThreeY * 100 + 'px';
    }
    dropCoinThree();
}
placeCoinThree();



// Coin Four

get('.game-board').innerHTML += `<img src="${coinImg}" id="coinFour" class="coin coinFour" alt="coin">`;

let coinFour = get(`.coinFour`);
let coinFourY = 0;
let coinFourX = 0;

function placeCoinFour() {
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
    
    generateRandomY();
    generateRandomX();
    
    coinFourY = generateRandomY();
    coinFourX = generateRandomX();

    if (tiles[coinFourY][coinFourX] !== 'green') {
        placeCoinFour();
    }
    
    function dropCoinFour() {
        coinFour.style.left = coinFourX * 100 + 'px';
        coinFour.style.top = coinFourY * 100 + 'px';
    }
    dropCoinFour();
}

placeCoinFour();


// Coin Five

get('.game-board').innerHTML += `<img src="${coinImg}" id="coinFive" class="coin coinFive" alt="coin">`;

let coinFive = get(`.coinFive`);
let coinFiveY = 0;
let coinFiveX = 0;

function placeCoinFive () {
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
    generateRandomY();
    generateRandomX();
    coinFiveY = generateRandomY();
    coinFiveX = generateRandomX();

    if (tiles[coinFiveY][coinFiveX] !== 'green') {
        placeCoinFive();
    }
    
    function dropCoinFive() {
                coinFive.style.left = coinFiveX * 100 + 'px';
                coinFive.style.top = coinFiveY * 100 + 'px';
    }
    dropCoinFive();
}
placeCoinFive();


// Coin Six

get('.game-board').innerHTML += `<img src="${coinImg}" id="coinSix" class="coin coinSix" alt="coin">`;

let coinSix = get(`.coinSix`);
let coinSixY = 0;
let coinSixX = 0;

function placeCoinSix() {
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
    generateRandomY();
    generateRandomX();
    coinSixY = generateRandomY();
    coinSixX = generateRandomX();

    if (tiles[coinSixY][coinSixX] !== 'green') {
        placeCoinSix();
    }
    
    function dropCoinSix() {
                coinSix.style.left = coinSixX * 100 + 'px';
                coinSix.style.top = coinSixY * 100 + 'px';
    }
    dropCoinSix();
}

placeCoinSix();



console.log(`coin one Y ${coinOneY} and X ${coinOneX} `)
console.log(`coin two Y ${coinTwoY} and X ${coinTwoX} `)
console.log(`coin three Y ${coinThreeY} and X ${coinThreeX} `)
console.log(`coin four Y ${coinFourY} and X ${coinFourX} `)
console.log(`coin five Y ${coinFiveY} and X ${coinFiveX} `)
console.log(`coin six Y ${coinSixY} and X ${coinSixX} `)





// Create Mario's movements

// need to store a JS variable that links to the DOM mario
const mario = get('.mario');

// top position
let marioY = 0;
// left position
let marioX = 0; 

let gameOn = true;

// function checkGameEnd()  {
//   if(marioY === bowserY && marioX === bowserX) {
//     gameOn = false;
//   }
// }

let marioScore = 0;


/*
Keycodes
Left = 37
Up = 38
Right = 39
Down = 40
*/

document.addEventListener('keydown', (event) => {

    function scrollToMario() {
        mario.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
      };

    scrollToMario();

      
    // console.log(event.keyCode);

    // switch turns an action on
    // code to connect keyboard events with onscreen actions
    switch(event.keyCode) {

        case 37:
            // console.log('left');
            if (marioX > 0 && tiles[marioY][marioX - 1] === 'green') {
                marioX -= 1;
                mario.style.left = marioX * 100 + 'px';
            };
            console.log(`mario Y is ${marioY}`);
            console.log(`mario X is ${marioX}`);
            break;
        
        case 38:
            // console.log('Up');
            if (marioY > 0 && tiles[marioY - 1][marioX] === 'green') {
                marioY -= 1;
                mario.style.top = marioY * 100 + 'px';
            };
            console.log(`mario Y is ${marioY}`);
            console.log(`mario X is ${marioX}`);
            break;

        case 39:
            // console.log('Right');
            if (marioX < counterX / counterY -1 && tiles[marioY][marioX + 1] === 'green') {
                marioX += 1;
                mario.style.left = marioX * 100 + 'px';
            };
            console.log(`mario Y is ${marioY}`);
            console.log(`mario X is ${marioX}`);
            break; 

        case 40:
            // console.log('Down');
            if (marioY < counterY - 1 && tiles[marioY + 1][marioX] === 'green') {
                marioY += 1;
                mario.style.top = marioY * 100 + 'px';  
            };
            console.log(`mario Y is ${marioY}`);
            console.log(`mario X is ${marioX}`);
            break;

        default:
            console.log('No case');
            break;
    };




    // Count the score

    function checkScore() {
    
        if ( (marioY === coinOneY && marioX === coinOneX) || (marioY === coinTwoY && marioX === coinTwoX) || (marioY === coinThreeY && marioX === coinThreeX) || (marioY === coinFourY && marioX === coinFourX) || (marioY === coinFiveY && marioX === coinFiveX) || (marioY === coinSixY && marioX === coinSixX) ) {
            console.log('score!');
            marioScore = marioScore + 1; 
            console.log(marioScore);
            document.getElementById("total").innerHTML = `SCORE: ${marioScore} out of 6`;
            // audioCoin.play();
        }
    }

    checkScore();


    function checkCoinOne() {
        if ((marioY === coinOneY && marioX === coinOneX)) {
            // console.log(`coin one Y ${coinOneY} and X ${coinOneX} `);
            function hideCoinOne() {
                document.getElementById("coinOne").style.display = "none";
                coinOneY = 1000;
                coinOneX = 1000;
            }
            hideCoinOne();
            audioCoin.pause();
            audioCoin.play();
        } 
    }
    checkCoinOne();

    function checkCoinTwo() {
        if ((marioY === coinTwoY && marioX === coinTwoX)) {
            function hideCoinTwo() {
                document.getElementById("coinTwo").style.display = "none";
                coinTwoY = 1000;
                coinTwoX = 1000;
            }
            hideCoinTwo();
            audioCoin.pause();
            audioCoin.play();
        } 
    }
    checkCoinTwo();

    function checkCoinThree() {
        if ((marioY === coinThreeY && marioX === coinThreeX)) {
            function hideCoinThree() {
                document.getElementById("coinThree").style.display = "none";
                coinThreeY = 1000;
                coinThreeX = 1000;
            }
            hideCoinThree();
            audioCoin.pause();
            audioCoin.play();
        } 
    }
    checkCoinThree();

    function checkCoinFour() {
        if ((marioY === coinFourY && marioX === coinFourX)) {
            function hideCoinFour() {
                document.getElementById("coinFour").style.display = "none";
                coinFourY = 1000;
                coinFourX = 1000;
            }
            hideCoinFour();
            audioCoin.pause();
            audioCoin.play();
        } 
    }
    checkCoinFour();

    function checkCoinFive() {
        if ((marioY === coinFiveY && marioX === coinFiveX)) {
            function hideCoinFive() {
                document.getElementById("coinFive").style.display = "none";
                coinFiveY = 1000;
                coinFiveX = 1000;
            }
            hideCoinFive();
            audioCoin.pause();
            audioCoin.play();
        } 
    }
    checkCoinFive();

    function checkCoinSix() {
        if ((marioY === coinSixY && marioX === coinSixX)) {
            function hideCoinSix() {
                document.getElementById("coinSix").style.display = "none";
                coinSixY = 1000;
                coinSixX = 1000;
            }
            hideCoinSix();
            audioCoin.pause();
            audioCoin.play();
        } 
    }
    checkCoinSix();



    // End game - i.e. Mario gets caught by Bowser or Goomba

    if( (marioY === bowserY && marioX === bowserX) || (marioY === goombaY && marioX === goombaX) ) {
        console.log('Mario is in trouble!');
      } else {
        console.log('Mario is safe!');
      }


    function checkGameEnd()  {
        

        if( (marioY === bowserY && marioX === bowserX) || (marioY === goombaY && marioX === goombaX) ) {
            gameOn = false;

            if(!gameOn) {
                console.log('game over');

                musicStop();

                alertTimeout = setTimeout( function () {
                    if(alert('GAME OVER!!! Bowser and Goomba ate you for breakfast.')){

                    } else {
                        window.location.reload()
                    }; 
                }, 100)

                audioDie.play();
            };
        };      
    };

    checkGameEnd();

    console.log(`gameOn is ${gameOn}`);

    function checkGameWon()  {
        

        if (marioScore === 6 ) {
            gameOn = false;

            if(!gameOn) {
                console.log('YOU WON!!!');
                alertTimeout = setTimeout( function () {
                    if(alert('YOU WON!!!')){
    
                    } else {
                        window.location.reload()
                    }; 
                }, 100)

                musicStop();

                audioVictory.play();
            };
        };
    };

    checkGameWon();

    console.log(`gameOn is ${gameOn}`);

});






// Bowser movement

// store a JS variable that links to Bowser in the DOM

const bowser = get('.bowser');

// create a random number for X and Y within the count values
// i.e. Y = 0, 1, 2, 3, 5
// X = counterX / counter Y

// function generateRandomY (minLimitY = 1, maxLimitY = counterY - 1) {
//     let differenceY = maxLimitY - minLimitY;
//     let randY = Math.random();
//     randY = Math.floor(randY * differenceY);
//     randY = randY + minLimitY;
//     return randY;
// };

// function generateRandomX (minLimitX = 1, maxLimitX = counterX / counterY - 1) {
//     let differenceX = maxLimitX - minLimitX;
//     let randX = Math.random();
//     randX = Math.floor(randX * differenceX);
//     randX = randX + minLimitX;
//     return randX;
// }


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

// console.log(bowserX);
// console.log(bowserY);



// move Bowser randomly
// generate a random number from 0 to 1

function fiftyFifty () {
    return Math.random();
};


let bowserMovement = function () {

     function bowserMove() {

        generateZeroToFour();

        let diffbetweenY = marioY - bowserY;
        let diffbetweenX = marioX - bowserX;

        // console.log(`diff between Y ${diffbetweenY}`);
        // console.log(`diff between X ${diffbetweenX}`);
        // console.log(diffbetweenX)



        // Bowser Down
        if ( (diffbetweenY > 0) && (generateZeroToFour() === 0) && (bowserY < counterY - 1) && (tiles[bowserY + 1][bowserX] === 'green')) {
            bowserY += 1;
            bowser.style.top = bowserY * 100 + 'px';  
        } else if ( (diffbetweenY > 0) && (generateZeroToFour() === 0) && ((bowserY > counterY - 1) || (tiles[bowserY + 1][bowserX] !== 'green'))) {
            bowserMove();
        } /*Bowser Up*/ else if ( (diffbetweenY < 0) && (generateZeroToFour() === 1) && (bowserY > 0) && (tiles[bowserY - 1][bowserX] === 'green')) {
            bowserY -= 1;
            bowser.style.top = bowserY * 100 + 'px';
        } else if ( (diffbetweenY < 0) && (generateZeroToFour() === 1) && ((bowserY < 0) || (tiles[bowserY - 1][bowserX] !== 'green'))) {
            bowserMove();
        } /*Bowser Right*/ else if ( (diffbetweenX > 0) && (generateZeroToFour() === 2) && (bowserX < counterX / counterY -1) && (tiles[bowserY][bowserX + 1] === 'green')) {
            bowserX += 1;
            bowser.style.left = bowserX * 100 + 'px';
        } else if ((diffbetweenX > 0) && (generateZeroToFour() === 2) && ((bowserX > counterX / counterY -1) || (tiles[bowserY][bowserX + 1] !== 'green'))) {
            bowserMove();
        } /*Bowser Left*/ else if ( (diffbetweenX < 0) && (generateZeroToFour() === 3) && (bowserX > 0) && (tiles[bowserY][bowserX - 1] === 'green')) {
            bowserX -= 1;
            bowser.style.left = bowserX * 100 + 'px';
        } else if ( (diffbetweenX < 0) && (generateZeroToFour() === 3) && ((bowserX < 0) && (tiles[bowserY][bowserX - 1] !== 'green'))) {
            bowserMove();
        } /*else try again*/ else {

            bowserMove();

        };
    };

    bowserMove();

 
    
    
    
    
    
    
    // // Old Code for Bowser's random movements
    
    // generateZeroToFour();
    // // console.log(generateZeroToFour());

    // function bowserMove() {
    //     // Bowser Down
    //     if ((generateZeroToFour() === 0) && (bowserY < counterY - 1) && (tiles[bowserY + 1][bowserX] === 'green')) {
    //         bowserY += 1;
    //         bowser.style.top = bowserY * 100 + 'px';  
    //     } /*Bowser Up*/ else if ((generateZeroToFour() === 1) && (bowserY > 0) && (tiles[bowserY - 1][bowserX] === 'green')) {
    //         bowserY -= 1;
    //         bowser.style.top = bowserY * 100 + 'px';
    //     } /*Bowser Right*/ else if ((generateZeroToFour() === 2) && (bowserX < counterX / counterY -1) && (tiles[bowserY][bowserX + 1] === 'green')) {
    //         bowserX += 1;
    //         bowser.style.left = bowserX * 100 + 'px';
    //     } /*Bowser Left*/ else if ((generateZeroToFour() === 3) && (bowserX > 0) && (tiles[bowserY][bowserX - 1] === 'green')) {
    //         bowserX -= 1;
    //         bowser.style.left = bowserX * 100 + 'px';
    //     } /*else try again*/ else {

    //         bowserMove();

    //         // bowserY += 0;
    //         // bowser.style.top = bowserY * 100 + 'px';
    //         // bowserY -= 0;
    //         // bowser.style.top = bowserY * 100 + 'px';
    //         // bowserX += 0;
    //         // bowser.style.left = bowserX * 100 + 'px';
    //         // bowserX -= 0;
    //         // bowser.style.left = bowserX * 100 + 'px'; 
    //     }
    // };

  

    function checkGameEnd()  {
        

        if( (marioY === bowserY && marioX === bowserX)  ) {
            gameOn = false;

            if(!gameOn) {
                console.log('game over');

                musicStop();

                alertTimeout = setTimeout( function () {
                    if(alert('GAME OVER!!! Bowser and Goomba ate you for breakfast.')){

                    } else {
                        window.location.reload()
                    }; 
                }, 100)

                audioDie.play();
            };
        };     
    };

    checkGameEnd();

    console.log(`gameOn is ${gameOn}`);
    
};

let bowserTimer = setInterval(bowserMovement, 450);


















// Goomba movement

// store a JS variable that links to Goomba in the DOM

const goomba = get('.goomba');

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


// place Goomba randomly on board
generateRandomY();
generateRandomX();

let goombaY = generateRandomY();
let goombaX = generateRandomX();

let placeGoomba = function () {
    goomba.style.left = goombaX * 100 + 'px';
    goomba.style.top = goombaY * 100 + 'px';
};

placeGoomba();

// console.log(`Goomba X is ${goombaX}`);
// console.log(`Goomba Y is ${goombaY}`);



// move Goomba randomly
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


let goombaMovement = function () {
    generateZeroToFour();
    // console.log(generateZeroToFour());

    function goombaMove() {
        // Goomba Down
        if ((generateZeroToFour() === 0) && (goombaY < counterY - 1) && (tiles[goombaY + 1][goombaX] === 'green')) {
            goombaY += 1;
            goomba.style.top = goombaY * 100 + 'px';  
        } /*Goomba Up*/ else if ((generateZeroToFour() === 1) && (goombaY > 0) && (tiles[goombaY - 1][goombaX] === 'green')) {
            goombaY -= 1;
            goomba.style.top = goombaY * 100 + 'px';
        } /*Goomba Right*/ else if ((generateZeroToFour() === 2) && (goombaX < counterX / counterY -1) && (tiles[goombaY][goombaX + 1] === 'green')) {
            goombaX += 1;
            goomba.style.left = goombaX * 100 + 'px';
        } /*Goomba Left*/ else if ((generateZeroToFour() === 3) && (goombaX > 0) && (tiles[goombaY][goombaX - 1] === 'green')) {
            goombaX -= 1;
            goomba.style.left = goombaX * 100 + 'px';
        } /*else try again*/ else {
            goombaMove();
        }
    };

    goombaMove();

    function checkGameEnd()  {
        
        if( (marioY === goombaY && marioX === goombaX) ) {
            gameOn = false;

            if(!gameOn) {
                console.log('game over');

                musicStop();

                alertTimeout = setTimeout( function () {
                    if(alert('GAME OVER!!! Bowser and Goomba ate you for breakfast.')){

                    } else {
                        window.location.reload()
                    }; 
                }, 100)

                audioDie.play();
            }
        }
    };

    checkGameEnd();

    console.log(`gameOn is ${gameOn}`);
    
};

let goombaTimer = setInterval(goombaMovement, 450);




