import {showInfoRound,showMenuNamePlayer, showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction, showBannerFinalGame,showAlertMonsterDead} from './gameView.js';
import { Player } from './player.js';
import {isValidPlayerName,isValidMonsterName} from './validator.js';
import {generateNumMonsters,createMonster,playerAttack,playGame,heal,monsterAttack} from './gameController.js';    
import { Monster } from './monster.js';

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
let stadisticsRound = new Map();
let stadisticsFinal = new Map();
stadisticsFinal.set("numMonstersAttacks",0);
let numMonstersAttacks = 0;

do{

let actionInput = showMenuPlayerAction();

stadisticsRound.set("monsterLifeBeforeAttack", monsters[0].life);
let length = monsters.length;
playGame(player,monsters,actionInput,playerAttack,heal);

//IF PLAYER KILL A MONSTER AND LIVE MONSTERS REMAIN PUT ROUNDINFO AND CONTINUE NEW ROUND
if(length != monsters.length && monsters.length > 0 ) {
    showAlertMonsterDead();
    actionInput = showMenuPlayerAction();
    stadisticsRound.set("monsterLifeBeforeAttack", monsters[0].life);
    playGame(player,monsters,actionInput,playerAttack,heal);
}

if(monsters.length > 0 ){
stadisticsRound.set("monsterLifeAfterAttack", monsters[0].life);   
}

//ALL MONSTERS DEAD
if(monsters.length == 0) {
    showBannerFinalGame("win",player);
    break;
}


stadisticsRound.set("playerLifeBeforeAttack", player.life);
monsterAttack(player);
stadisticsFinal.set("numMonstersAttacks",numMonstersAttacks++);
stadisticsRound.set("playerLifeAfterAttack", player.life);

//PLAYER IS LIVED
if(player.life > 0){
showInfoRound(player,monsters,totalMonsters,stadisticsRound);
}

//WIN MONSTERS
if(player.life <= 0){
   showBannerFinalGame("lose",player);
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