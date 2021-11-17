import { Monster } from "./monster.js";

const playGame = (player,monsters,action,playerAttack,heal) => {
  //PLAYERATTACK
  if(action == "A"){
    playerAttack(monsters);
  }

  //HEAL
  if(action == "H"){
    if(player.numHealingPots > 0) {
        heal(player);
    }
  }

}

const heal = (player) => {
    player.life += 70;
    player.numHealingPots -= 1;
    if(player.life > 100){
      player.life = 100;
    } 
}

const playerAttack = (monsters) => {
  let monsterToAttack = monsters.shift();
  monsterToAttack.life  -= generateAttackDamage();
  if(monsterToAttack.life > 0){
    monsters.unshift(monsterToAttack);
  }
}

const monsterAttack = (player) => {
  player.life -= generateAttackDamage();
}

const generateAttackDamage = () => {return Math.floor(Math.random() * (20 - 10)) +10;};

const generateNumMonsters = () => {return Math.floor(Math.random() * 3) + 1};

const createMonster = monsterName => {return new Monster(monsterName)};

export {generateNumMonsters,createMonster,playerAttack,playGame,heal,monsterAttack};





