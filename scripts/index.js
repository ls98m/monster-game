const { checkPlayerName } = require("./game-controller");
//checkPlayerName = require("./game-controller");
let player = null;

//INPUT NAME PLAYER
do {

    let playerName = prompt("player name");

    if(checkPlayerName(playerName)){
       console.log("ff");
    
    }  

}while(player == null);

console.log(player);