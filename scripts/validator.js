const isValidPlayerName = playerName => { 
    const pattern = new RegExp("^[A-Z]([A-Z|a-z]{0,})$");
    return pattern.test(playerName);
}

const isValidMonsterName = monsterName => { 
    const pattern = new RegExp("^[A-Z|a-z]([A-Z|a-z]{0,})([0-9|A-Z|a-z]{1})$");
    return pattern.test(monsterName);
}


export {isValidPlayerName,isValidMonsterName}