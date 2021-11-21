import {MAX_LIFE,NUM_HEALING_POTS} from './conf.js'

   function Player(name){
        this.name = name;
        this.life = MAX_LIFE;
        this.numHealingPots = NUM_HEALING_POTS;
        this.totalAttacks = 0;
    }
        

const getHealingPotsSize = () => {return 70};

export {Player,getHealingPotsSize};
