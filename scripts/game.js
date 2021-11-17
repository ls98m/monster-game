import {showInfoRound,showMenuNamePlayer, showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction} from './gameView.js';
import { Player } from './Player.js';
import {isValidPlayerName,isValidMonsterName} from './validator.js';
import {generateNumMonsters,createMonster,playerAttack,playGame,heal,monsterAttack} from './gameController.js';    
import { Monster } from './Monster.js';
function testing() {
    console.log(player);
    monsters.forEach(element => {
        console.log(element);
    });

}


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

//PARA SACAR NUM ATAQUES HACER UN CLOUSURE CON UNA FUNCION ANONIMA + MONSTERATTACK
monsterAttack(player);


//COMPROBAR EL DAÑO QUE TENIA ANTES Y DESPUES DEL ATAQUE Y GUARDARLO EN UNA VARIABLE

testing();

//showInfoRound(player,monsters[0],totalMonsters);

//WIN MONSTERS
if(player.life <= 0){
    console.log("WIN MONSTERS");
    break;
}

}while(true);


function getArrayMonsters(numMonsters) {

    let monsters = [];

    let nameGenerator = makeName();

   for(let i =0;i < numMonsters;i++) {
        let defaultName =  nameGenerator();
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

//CLOUSURE
function makeName(){
    let count = 1;  
    return function() {
        return  "Monster "+ count++;
    }
}