
const showMenuNamePlayer = () => {return prompt("Set your player name","Anonymous")};

const showMenuPlayerAction = () => {return prompt("Choose your next moviment (A -> Attack , H -> Heal)")};

const showNumOfMonsters = numMonstersCreated => {console.log("NUMBER OF MONSTERS TO FIGHT: "+numMonstersCreated);};

const showInfoRound = (player,monster,numMonstersCreated) => {
    const playerDamage = getPlayerDamage(numMonstersCreated,monster);
        console.log("ROUND STATUS\n"+ player.name + " - D: "+playerDamage+", H: "+player.life+", P: "+player.numHealingPots+"\n"+monsters.length+" monster/s remain\n");
    }


    

 //const playerDamage = getPlayerDamage(numMonstersCreated,monsters);   
const getTotalPlayerDamage = (numMonstersCreated,...monsters) => {
    let damage = numMonstersCreated * 100;
    damage -= monsters.length * 100;
    monsters.forEach(monster => {
        damage += 100 - monster.life
    });

    return damage;
}   


const showMenuNameMonster = (defaultName) => {return prompt("Set monster name or cancel for set preterminate name",defaultName)};

export  {showMenuNamePlayer,showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction,showInfoRound}