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

Dice.showHistory();
Dice.roll();
Dice.roll();
Dice.roll();
Dice.showHistory();