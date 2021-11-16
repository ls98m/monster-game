import { Monster } from "./Monster.js";

const generateNumMonsters = () => {return Math.floor(Math.random() * 3) + 1};

const createMonster = monsterName => {return new Monster(monsterName)};

export {generateNumMonsters,createMonster};





