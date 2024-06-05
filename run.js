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
}());

// VARIABLE DECLARATION:
let diceValues = [];
let rollCount = [0, 0, 0, 0, 0]; // Track the number of rolls for each dice

// rolling five dice
for (let currentDice = 0; currentDice < 5; currentDice++) {
    let roll = document.createElement("p");
    let displaySet = document.createElement("p");
    let rerollButton = document.createElement("button");

    diceValues[currentDice] = Dice.roll(); //saving dice value to array

    roll.textContent = "On dice " + (currentDice + 1) + ", you rolled: " + diceValues[currentDice];
    displaySet.textContent = "This is your current set: " + diceValues;
    rerollButton.textContent = "Re-roll dice " + (currentDice + 1);

    document.body.appendChild(roll);
    document.body.appendChild(displaySet);
    document.body.appendChild(rerollButton);

    rerollButton.addEventListener("click", function () {
        if (rollCount[currentDice] < 3) {
            let reroll = document.createElement("p");
            let displayRerollSet = document.createElement("p");

            diceValues[currentDice] = Dice.roll(); //saving dice value to array
            rollCount[currentDice]++; // Increment the roll count

            reroll.textContent = "After re-roll #" + rollCount[currentDice] + " on dice " + (currentDice + 1) + ", you rolled: " + diceValues[currentDice];
            displayRerollSet.textContent = "This is your current set: " + diceValues;

            document.body.appendChild(reroll);
            document.body.appendChild(displayRerollSet);
        } else {
            alert("You have reached the maximum number of re-rolls for dice " + (currentDice + 1));
        }
    });
}