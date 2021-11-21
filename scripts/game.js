import {showInfoRound,showMenuNamePlayer, showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction, showBannerFinalGame,showAlertMonsterDead, showStadisticsFinalGame} from './gameView.js';
import { Player } from './player.js';
import {isValidPlayerName,isValidMonsterName} from './validator.js';
import {generateNumMonsters,createMonster,playerAttack,playGame,heal,monsterAttack} from './gameController.js';    
import { Monster } from './monster.js';
import { MIN_LIFE } from './conf.js';

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
let numMonstersAttacks = 0;
let totalDamageMonsters = 0;

do{

let length = monsters.length;    
let actionInput = showMenuPlayerAction();

stadisticsRound.set("monsterLifeBeforeAttack", monsters[0].life);

playGame(player,monsters,actionInput,playerAttack,heal);

//WHEN MONSTER DEAD
if(monsters[0].life == MIN_LIFE) {
    stadisticsRound.set("monsterLifeBeforeAttack", monsters[0].life);
    stadisticsRound.set("playerLifeBeforeAttack", 0);
    stadisticsRound.set("playerLifeAfterAttack", 0);
    showInfoRound(player,monsters,monsters.length-1,stadisticsRound);
    monsters.shift();
}



//IF PLAYER KILL A MONSTER AND LIVE MONSTERS REMAIN PUT ROUNDINFO AND CONTINUE NEW ROUND
if(monsters.length > 0 && monsters.length != length) {
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
    showStadisticsFinalGame(player,stadisticsFinal,monsters,totalMonsters);
    break;
}


stadisticsRound.set("playerLifeBeforeAttack", player.life);

monsterAttack(player);

stadisticsRound.set("playerLifeAfterAttack", player.life);
stadisticsFinal.set("numMonstersAttacks",numMonstersAttacks++);
totalDamageMonsters += stadisticsRound.get("playerLifeBeforeAttack")- stadisticsRound.get("playerLifeAfterAttack");
stadisticsFinal.set("totalDamageMonsters",totalDamageMonsters);


//PLAYER IS LIVED
if(player.life > MIN_LIFE){
showInfoRound(player,monsters,monsters.length,stadisticsRound);
}

//WIN MONSTERS
if(player.life <= MIN_LIFE){
   showBannerFinalGame("lose",player);
   showStadisticsFinalGame(player,stadisticsFinal,monsters,totalMonsters);
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