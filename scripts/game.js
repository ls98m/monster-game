import {showMenuNamePlayer, showNumOfMonsters,showMenuNameMonster} from './gameView.js';
import { Player } from './Player.js';
import {isValidPlayerName} from './validator.js';
import {generateNumMonsters,createMonster} from './gameController.js';    

let player = null;
//INPUT PLAYER NAME 
do {   
    let playerName = showMenuNamePlayer();

    if(playerName == null) {
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


function getArrayMonsters(numMonsters) {

    let monsters = [];

   for(let i =0;i < numMonsters;i++) {
        let defaultName = "monster"+(i+1);
        let monsterName = showMenuNameMonster(defaultName);
        let monster;
        monsterName == null || monsterName == defaultName ? monster = createMonster(defaultName) : monster = createMonster(monsterName);
        monsters.push(monster);
   }


}