import { KEY_ATTACK, KEY_HEAL, MAX_DAMAGE_ATTACK, MAX_LIFE, MAX_MONSTERS, MIN_DAMAGE_ATTACK, MIN_LIFE, MIN_MONSTERS, SIZE_HEALING_POTS } from "./conf.js";
import { Monster } from "./monster.js";
import { Player } from "./player.js";

const playGame = (player,monsters,action,playerAttack,heal) => {
  //PLAYERATTACK
  if(action == KEY_ATTACK){
    playerAttack(monsters);
    player.totalAttacks += 1;
  }

  //HEAL
  if(action == KEY_HEAL){
    if(player.numHealingPots > 0) {
        heal(player);
    }
  }

}

const heal = (player) => {
    player.life += SIZE_HEALING_POTS;
    player.numHealingPots -= 1;
    if(player.life > MAX_LIFE){
      player.life = MAX_LIFE;
    } 
}

const playerAttack = (monsters) => {
  let monsterToAttack = monsters.shift();
  monsterToAttack.life  -= generateAttackDamage();
  if(monsterToAttack.life <= MIN_LIFE){
    monsterToAttack.life  = MIN_LIFE;
  }
  monsters.unshift(monsterToAttack);
}

const monsterAttack = (player) => {
  player.life -= generateAttackDamage();
}

const generateAttackDamage = () => {return Math.floor(Math.random() * (MAX_DAMAGE_ATTACK - MIN_DAMAGE_ATTACK)) +MIN_DAMAGE_ATTACK;};

const generateNumMonsters = () => {return Math.floor(Math.random() * MAX_MONSTERS) + MIN_MONSTERS};

const createMonster = monsterName => {return new Monster(monsterName)};

export {generateNumMonsters,createMonster,playerAttack,playGame,heal,monsterAttack};





