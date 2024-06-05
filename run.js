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