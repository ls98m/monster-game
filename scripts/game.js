import {showMenuNamePlayer, showNumOfMonsters} from './gameView.js';
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



function getArrayMonsters(numMonsters) {

    

}