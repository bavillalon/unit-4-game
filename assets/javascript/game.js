var crystalGame={
    crystals:[
        {id:"0",value:0},
        {id:"1",value:0},
        {id:"2",value:0},
        {id:"3",value:0}
    ],
    targetNumber:0,
    wins:0,
    losses:0,
    currentSum:0,
    selectedCrystal:"",
    increment: function (c){
        this.currentSum+=this.crystals[c].value;
    },
    newGame: function (){
        this.targetNumber=19+Math.floor(Math.random()*(120-18));
        //making random numbers between 1 and 12
        for(var i=0;i<this.crystals.length;i++){
            this.crystals[i].value=1+Math.floor(12*Math.random());
        }
        this.currentSum=0;
        console.log(this.targetNumber);
        console.log(this.crystals[0].value);
        console.log(this.crystals[1].value);
        console.log(this.crystals[2].value);
        console.log(this.crystals[3].value);
    },
};

$(document).ready(function() {
    crystalGame.newGame();
    $(".targetNum").text(crystalGame.targetNumber);

    $(".status").text("Good luck!");
    
    $(".crystal").on("click",function() {
        switch($(this).attr("crystalID")){
            case crystalGame.crystals[0].id:
                crystalGame.increment(0);
            break
            case crystalGame.crystals[1].id:
                crystalGame.increment(1);
            break
            case crystalGame.crystals[2].id:
                crystalGame.increment(2);
            break
            case crystalGame.crystals[3].id:
                crystalGame.increment(3);
            break
        }

        if(crystalGame.currentSum===crystalGame.targetNumber){
            crystalGame.wins++;
            crystalGame.newGame();
            $(".wins").text("Wins: " + crystalGame.wins);
            $(".status").text("You won! A new game started. Good luck!");
        }
        else if(crystalGame.currentSum>crystalGame.targetNumber){
            crystalGame.losses++;
            crystalGame.newGame();
            $(".losses").text("Losses: " + crystalGame.losses);
            $(".status").text("You lost... A new game started. Good luck!");
        };


        $(".total").text(crystalGame.currentSum);
        $(".targetNum").text(crystalGame.targetNumber);



    })

    

});

