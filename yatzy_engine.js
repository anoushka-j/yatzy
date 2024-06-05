function count_score(dice_vals) {
    score = 0; 
    for (let i = 0; i < dice_vals.length; i++) {
        score += dice_vals[i]
    }
    return score

}

