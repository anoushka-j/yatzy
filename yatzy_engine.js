function count_score(dice_vals) {
    score = 0; 

    //yahtzee
    upper_section = dice_vals.every(el => el === dice_vals[0]);

    if(upper_section) {
        score += dice_vals[0]*3
    }

    //chance = sum of all dice
    sum = 0; 
    for(let k = 0; k < dice_vals.length; k++) {
        sum += dice_vals[k]

    }
    score += sum

    //three of a kind, four of a kind 
    count = 0; 
    threes = False;
    twos = False;

    for (let i = 0; i < dice_vals.length; i++) {
        for(let j = 1; j < dice_vals.length; j++) {
            if (dice_vals[i] == dice_vals[j]) {
                count += 1;
            }
            if (count == 2) {
                twos = True; 
            }
            if (count == 3) {
                threes = True; 
                score += sum; 
            } 
            if (count == 4) {
                score += sum;
            }

        }
    }

    //full house 
    if (twos && threes) {
        score += 25;

    }

    //small straight 
    first_position = dice_vals.slice(0, 4)
    second_position = dice_vals.slice(1)
    front_small_straight = False; 

    s1 = [1, 2, 3, 4]
    s2 = [2, 3, 4, 5]
    s3 = [3, 4, 5, 6]

    if (first_position == s1 || first_position == s2 || first_position == s3) {
        front_small_straight = True 
        score += 30 
    }
    if (second_position == s1 || second_position == s2 || second_position == s3) {
        score += 30 
    }

    //large straight 
    large_straight = False;
    if (front_small_straight) {
        if (dice_vals[0] == 1 && dice_vals[4] == 5) {
            large_straight = True
        }
        if (dice_vals[0] == 2 && dice_vals[4] == 6) {
            large_straight = True
        }

    }
    if (large_straight) {
        score += 40 
    }
    
 

    return score

}

