 class Player {

    constructor(name){
        this.name = name;
        this.life = 100;
        this.numHealingPots = 2;
    }
        
}

const getHealingPotsSize = () => {return 70};

export {Player,getHealingPotsSize};
