import {showInfoRound,showMenuNamePlayer, showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction} from './gameView.js';
import { Player } from './Player.js';
import {isValidPlayerName,isValidMonsterName} from './validator.js';
import {generateNumMonsters,createMonster,playerAttack,playGame,heal,monsterAttack} from './gameController.js';    
import { Monster } from './Monster.js';

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

//GAME ROUNDS LOGIC
do{

let actionInput = showMenuPlayerAction();

playGame(player,monsters,actionInput,playerAttack,heal);

if(monsters.length == 0) {
    console.log("WIN PLAYER");
    break;
}

monsterAttack(player);


//showInfoRound(player,monsters[0],totalMonsters);


//WIN MONSTERS
if(player.life <= 0){
    console.log("WIN MONSTERS");
    break;
}

}while(true);

function getArrayMonsters(numMonsters) {

    let monsters = [];

    let b = 0;

   for(let i =0;i < numMonsters;i++) {
        let defaultName = "monster"+ (++b);
        let monsterName = showMenuNameMonster(defaultName);
        let monsterToAdd = {};
        
    if(monsterName == null || monsterName == undefined || monsterName == defaultName || monsterName == "") {
       monsterToAdd = createMonster(defaultName);
    } else {
        if (isValidMonsterName(monsterName)){
        monsterToAdd = createMonster(monsterName);
        } else {
            monsterToAdd = createMonster(defaultName);
        }
    }
        monsters.push(monsterToAdd);
   }

  return monsters;

}