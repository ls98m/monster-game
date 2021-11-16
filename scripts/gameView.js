
const showMenuNamePlayer = () => {return prompt("Set your player name","Anonymous")};

const showMenuPlayerAction = () => {return prompt("Choose your next moviment (A -> Attack , H -> Heal)")};

const showNumOfMonsters = numMonsters => {console.log("NUMBER OF MONSTERS TO FIGHT: "+numMonsters);};

const showInfoRound = (player,monsters,numMonsters) => {
    const playerDamage = getPlayerDamage(numMonsters,monsters);
    const monsterDamge = getMonsterDamage(player.life);
        console.log("ROUND STATUS\n"+ player.name + " - D: "+playerDamage+", H: "+player.life+", P: "+player.numHealingPots+"\n"+monsters.length+" monster/s remain\n");
    }

const getPlayerDamage = (numMonsters,monsters) => {
    let damage = numMonsters * 100;
    damage -= monsters.length * 100;
    monsters.forEach(monster => {
        damage += 100 - monster.life
    });

    return damage;
}   


const showMenuNameMonster = (defaultName) => {return prompt("Set monster name or cancel for set preterminate name",defaultName)};

export  {showMenuNamePlayer,showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction,showInfoRound}