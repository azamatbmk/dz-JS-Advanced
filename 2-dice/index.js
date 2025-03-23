function dice(diceType) {
    let rnd = 0;
    if(diceType < 4 || diceType > 20) {
        console.log('Не верный тип дайса')
        return rnd;
    }
    if(diceType % 2 !== 0) {
        diceType += 1
        rnd = Math.floor(Math.random() * diceType + 1) 
    } else {
        rnd = Math.floor(Math.random() * diceType + 1)
    }
    return rnd
};

console.log(dice(19))