// Only change code below this line

// Only change code above this line
var players  ={
    7:"Muhamed Besic",
    10:"Miralem Pjanic",
    11:"Edin Dzeko"
}
function myFunction(myObj){
    var playerNumber=10;
    var player=players[playerNumber];
    
    return {playerNumber,player };
}
console.log(myFunction())
module.exports = {players, myFunction}