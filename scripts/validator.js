const isValidPlayerName = playerName => { 
    const pattern = new RegExp("^[A-Z]([A-Z|a-z]{0,})$");
    return pattern.test(playerName);}


    export {isValidPlayerName}