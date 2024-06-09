// VARIABLE DECLARATION:
const Dice = (function () {
    const entity = {
        "history": []
    };

    entity.roll = function () {
        const nextValue = Math.floor(1 + Math.random() * 6);
        this.history.push(nextValue);
        return nextValue;
    }

    return entity;
}()); //dice entity for rolling

let diceValues = []; //array to save dice values
let rollCount = [0, 0, 0, 0, 0]; //array to track # of rolls for each dice
let scoreButton = document.createElement("button");
scoreButton.textContent = "SCORE CURRENT SET";
document.body.appendChild(scoreButton);

scoreButton.addEventListener("click", function(){
    dice_vals = diceValues
    let score = 0; 

    // Yahtzee
    const upper_section = dice_vals.every(el => el === dice_vals[0]);

    if (upper_section) {
        score += 50;  // Correct Yahtzee score is 50
    }

    // Chance = sum of all dice
    const sum = dice_vals.reduce((acc, val) => acc + val, 0);
    score += sum;

    // Three of a kind, Four of a kind
    const counts = {};
    for (let val of dice_vals) {
        counts[val] = (counts[val] || 0) + 1;
    }

    let threeOfAKind = false;
    let fourOfAKind = false;
    let twos = false;
    let threes = false;

    for (let key in counts) {
        if (counts[key] === 2) {
            twos = true;
        }
        if (counts[key] === 3) {
            threeOfAKind = true;
            threes = true;
        }
        if (counts[key] === 4) {
            fourOfAKind = true;
        }
    }

    if (threeOfAKind) {
        score += sum;
    }
    if (fourOfAKind) {
        score += sum;
    }

    // Full house
    if (twos && threes) {
        score += 25;
    }

    // Small straight
    const smallStraights = [
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6]
    ];

    if (smallStraights.some(straight => straight.every(num => dice_vals.includes(num)))) {
        score += 30;
    }

    // Large straight
    const largeStraights = [
        [1, 2, 3, 4, 5],
        [2, 3, 4, 5, 6]
    ];

    if (largeStraights.some(straight => straight.every(num => dice_vals.includes(num)))) {
        score += 40;
    }
     
    let displayScore = document.createElement("h3");
    displayScore.textContent = "Your score is " + score + "!"
    document.body.appendChild(displayScore);

    
        
});

// PROCESS: rolling five dice
for (let currentDice = 0; currentDice < 5; currentDice++) {

    // VARIABLE DECLARATION:
    let currentRoll = document.createElement("p");
    let displaySet = document.createElement("p");
    let rerollButton = document.createElement("button");

    // PROCESS: calling helper method to roll dice
    diceValues[currentDice] = Dice.roll(); //saving dice value to array

    // OUTPUT: setting content appending elements to document
    currentRoll.textContent = "On dice " + (currentDice + 1) + ", you rolled: " + diceValues[currentDice];
    displaySet.textContent = "This is your current set: " + diceValues;
    rerollButton.textContent = "Re-roll dice " + (currentDice + 1);

    document.body.appendChild(currentRoll);
    document.body.appendChild(displaySet);
    document.body.appendChild(rerollButton);

    // PROCESS: adding event listener for re-rolls
    rerollButton.addEventListener("click", function () {

        // PROCESS: checking if max re-rolls reached
        if (rollCount[currentDice] < 3) {

            // VARIABLE DECLARATION:
            let reroll = document.createElement("p");
            let displayRerollSet = document.createElement("p");

            // PROCESS: calling helper method to re-roll dice
            diceValues[currentDice] = Dice.roll(); //saving dice value to array
            rollCount[currentDice]++; //incrementing the roll count

            // OUTPUT: setting content appending elements to document
            reroll.textContent = "After re-roll #" + rollCount[currentDice] + " on dice " + (currentDice + 1) + ", you rolled: " + diceValues[currentDice];
            displayRerollSet.textContent = "This is your current set: " + diceValues;

            document.body.appendChild(reroll);
            document.body.appendChild(displayRerollSet);

        } else {
            // OUTPUT:
            alert("You have reached the maximum number of re-rolls for dice #" + (currentDice + 1) + "!");
        }

    });

    

}