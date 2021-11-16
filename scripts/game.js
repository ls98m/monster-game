import {showInfoRound,showMenuNamePlayer, showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction} from './gameView.js';
import { Player } from './Player.js';
import {isValidPlayerName} from './validator.js';
import {generateNumMonsters,createMonster,playerAttack,playGame,heal} from './gameController.js';    

//INPUT PLAYER NAME 
let player = null;
do {   
    let playerName = showMenuNamePlayer();

    if(playerName == null || playerName == undefined) {
        player = new Player("Anonymous");
    } 
    if (isValidPlayerName(playerName)){
            player = new Player(playerName);
        }
}while(player == null);

//CREATE MONSTERS
const totalMonsters = generateNumMonsters();
showNumOfMonsters(totalMonsters);
let monsters = getArrayMonsters(totalMonsters);

//START ROUNDS

do{

let actionInput = showMenuPlayerAction();

playGame(player,monsters,actionInput,playerAttack,heal);

monsters.forEach(element => {
    console.log(element);
});

console.log(player);

break;

}while(true);



function getArrayMonsters(numMonsters) {

    let monsters = [];

    let b = 0;

   for(let i =0;i < numMonsters;i++) {
        let defaultName = "monster"+ (++b);
        let monsterName = showMenuNameMonster(defaultName);
        let monsterToAdd = {};
        monsterName == null || monsterName == defaultName ? monsterToAdd = createMonster(defaultName) : monsterToAdd = createMonster(monsterName);
        monsters.push(monsterToAdd);
   }

  return monsters;

}