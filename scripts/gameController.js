import { Monster } from "./Monster.js";
import { Player,getHealingPotsSize } from "./Player.js";

const playGame = (player,monsters,action,attack,heal) => {
  //ATTACK
  if(action == "A"){
    attack(monsters);
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

const attack = (monsters) => {
  let monsterToAttack = monsters.shift();
  monsterToAttack.life  = monsterToAttack.life - generateAttackDamage();
  monsters.unshift(monsterToAttack);
}



const generateAttackDamage = () => {return  Math.floor(Math.random() * 20) + 10};

const generateNumMonsters = () => {return Math.floor(Math.random() * 3) + 1};

const createMonster = monsterName => {return new Monster(monsterName)};

export {generateNumMonsters,createMonster,attack,playGame,heal};





