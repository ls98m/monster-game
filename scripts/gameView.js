const showMenuNamePlayer = () => {return prompt("Set your player name")};

const showNumOfMonsters = numMonsters => {console.log("NUMBER OF MONSTERS TO FIGHT: "+numMonsters);};

const showMenuNameMonster = (defaultName) => {return prompt("Set monster name or cancel for set preterminate name",defaultName)};

export  {showMenuNamePlayer,showNumOfMonsters,showMenuNameMonster}