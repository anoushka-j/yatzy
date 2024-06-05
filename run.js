const Dice = (function () {

    const entity = {
        "history": []
    };

    entity.roll = function () {

        const nextValue = Math.floor(1 + Math.random() * 6);
        this.history.push(nextValue);
        return nextValue;

    }

    entity.showHistory = function () {

        if (this.history.length === 0) {
            document.writeln("<br>No die has been thrown yet.<br>");
        } else {
            document.writeln("<br>Dice rolls (" + this.history.length + ")<br>");
            let i = 0, len = this.history.length;

            for (; i < len; i++) {
                document.writeln("<li>" + this.history[i] + "</li>");
            }
        }
    }

    return entity;
}());

// VARIABLE DECLARATION:
let diceValues = [];

// rolling five dice
for (let currentDice = 0; currentDice < 5; currentDice++) {

    let roll = document.createElement("p");
    let displaySet = document.createElement("p");

    diceValues[currentDice] = Dice.roll(); //saving dice value to array

    roll.textContent = "On dice " + (currentDice + 1) + ", you rolled: " + diceValues[currentDice];
    displaySet.textContent = "This is your current set: " + diceValues;

    document.body.appendChild(roll);
    document.body.appendChild(displaySet);

    // Dice.showHistory();

    // asking to re-roll three times
    for (let i = 0; i < 3; i++) {

        if (confirm("Re-roll dice? OK to re-roll; cancel to roll next dice")) { //OK

            let roll = document.createElement("p");
            let displaySet = document.createElement("p");

            diceValues[currentDice] = Dice.roll(); //saving dice value to array

            diceValues[currentDice] = Dice.roll(); //saving dice value to array

            roll.textContent = "After re-rolling, on dice " + (currentDice + 1) + ", you rolled: " + diceValues[currentDice];
            displaySet.textContent = "This is your current set: " + diceValues;

            document.body.appendChild(roll);
            document.body.appendChild(displaySet);

            // Dice.showHistory();

        } else { //NO
            break;
        }

    }

}