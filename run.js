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
let rollAgain; //boolean flag with player input

const result = Dice.roll();
console.log(`You rolled a ${result}`);

// rolling five dice
for (let currentDice = 0; currentDice < 5; currentDice++) {

    diceValues[currentDice] = Dice.roll(); //saving dice value to array
    Dice.showHistory();
    console.log(diceValues);

    // asking to re-roll three times
    for (let i = 0; i < 3; i++) {

        // checking if player wants to re-roll current dice
        if (rollAgain) {
            diceValues[currentDice] = Dice.roll(); //saving dice value to array
            Dice.showHistory();
            console.log(diceValues);
        } else {
            break;
        }

    }

}