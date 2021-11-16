const isValidPlayerName = playerName => { 
    const pattern = new RegExp("^[A-Z]([A-Z|a-z]{6})$");
    return pattern.test(playerName);}

    