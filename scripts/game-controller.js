const Monster = require("./Monster.js");
const Player = require("./Player.js");

 export const checkPlayerName = playerName =>{
   var pattern = new RegExp("^[A-Z]([A-Z|a-z]{6})$");
   return pattern.test(playerName);

}






