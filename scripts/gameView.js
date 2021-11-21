
const showMenuNamePlayer = () => {return prompt("Set your player name","Anonymous")};

const showMenuPlayerAction = () => {return prompt("Choose your next moviment (A -> Attack , H -> Heal)")};

const showNumOfMonsters = numMonstersCreated => {console.log("NUMBER OF MONSTERS TO FIGHT: "+numMonstersCreated);};

const showAlertMonsterDead = () => {console.log("¡Monster Dead! Loading Next Fight...")};

const showBannerFinalGame = (result,player) => {

    if(result == "win"){
        console.log("¡Victoria!" + player.name +" derrotó a todos los monstruos✌");
    }  
    if(result =="lose"){
        console.log("¡" + player.name + " murió! ☠");
    }
}

const showInfoRound = (player,monsters,totalMonsters,stadisticsRound) => {
        console.log("ROUND STATUS\n"+ player.name + " - D: "+(stadisticsRound.get("monsterLifeBeforeAttack")- stadisticsRound.get("monsterLifeAfterAttack"))+", H: "+player.life+", P: "+player.numHealingPots+"\n"+monsters.length+" monster/s remain\n" + monsters[0].name +" - D: "+(stadisticsRound.get("playerLifeBeforeAttack")- stadisticsRound.get("playerLifeAfterAttack")+", H: "+monsters[0].life));
    }

const getTotalPlayerDamage = (numMonstersCreated,...monsters) => {
    let damage = numMonstersCreated * 100;
    damage -= monsters.length * 100;
    monsters.forEach(monster => {
        damage += 100 - monster.life
    });

    return damage;
}   


const showMenuNameMonster = (defaultName) => {return prompt("Set monster name or cancel for set preterminate name",defaultName)};

export  {showMenuNamePlayer,showNumOfMonsters,showMenuNameMonster,showMenuPlayerAction,showInfoRound,showBannerFinalGame,showAlertMonsterDead}