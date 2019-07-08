var cryatalGame={
    crystals:[
        {id:"0", value:0},
        {id:"1",value:0},
        {id:"2",value:0},
        {id:"3",value:0}
    ],
    targetNumber:0,
    wins:0,
    losses:0,
    newGame: function (){
        this.targetNumber=19+Math.floor(Math.random()*(120-18));
        //making random numbers between 1 and 12
        for(var i=0;i<this.crystals.length;i++){
            this.crystals[i].value=1+Math.floor(12*Math.random());
        }
        this.reset=false;
    },
};

$(document).ready(function() {
    crystalGame.newGame();

    

    

});

