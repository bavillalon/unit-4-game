//making an object for the whole game. Crystals is an array of objects containing what the crystal ids and values are going to be. I used the id for 
// matching the attributes in the html document to the correct value.
//targetNumber is the number that we want to add to.
//wins and losses are self explanatory. currentSum is the sum of adding the crystal values on each click.
//incrememt is a method I use to increment the value of current sum by the selected (c) crystal value. the value c is passed into the method later in a switch.
//newGame is used to select a new random target and assign random values to the crystals. i have a switch in there (isOdd) using an or statement.
//isodd is used to check if at least one value in the array is odd. if one is not (!isOdd), then a random value is assigned from 1-7 and is odd. 
//2x+1 is a commmonly used function to gurarrantee an odd number.

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
    increment: function (c){
        this.currentSum+=this.crystals[c].value;
    },
    newGame: function (){
        var isOdd=false;
        this.targetNumber=19+Math.floor(Math.random()*(120-18));
        //making random numbers between 1 and 12
        for(var i=0;i<this.crystals.length;i++){
            this.crystals[i].value=1+Math.floor(12*Math.random());
            isOdd=isOdd||(this.crystals[i] % 2)===1;
        }
        //guranteeing that one value in the array is from 1 to 7 and odd only to allow for a win on odd numbers...
        if(!isOdd){
            this.crystals[Math.floor(Math.random()*this.crystals.length)].value=2*(Math.floor(Math.random()*4))+1;
        }
        this.currentSum=0;
        //console logging for debug
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


    //on a click on a crystal class, we grab the value from teh attribute crystalID and compare it using a switch to get the correct value form the crystal array.
    // the attribute is a string number from 0-3 matching the string stored in id in the crystals array. we pass the index to the increment function.
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
//checking to see if there is a win or lose case and resetting the game and incementing and displaying accordingly.
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

//updating teh screen with the current or new sum and target. updating the target only applies to new games but its easier to do it here.
        $(".total").text(crystalGame.currentSum);
        $(".targetNum").text(crystalGame.targetNumber);



    })

    

});

