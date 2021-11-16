import {showMenuNamePlayer} from './gameView.js';
import { Player } from './Player.js';
import {isValidPlayerName} from './validator.js'

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





