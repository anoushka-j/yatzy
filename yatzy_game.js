/*A yatzy game comprises of a turn, which includes

* Which roll you are on (0, 1, 2, or 3)
* Current value on each of the 5 dice
* Keep / re-roll state of each dice

The `YatzyGame` should focus on tracking the state of the game
without knowing much about the rules, that comes next!*/

import { Dice } from "./dice.js";

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