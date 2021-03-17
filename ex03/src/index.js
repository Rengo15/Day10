// Only change code below this line

// Only change code above this line
var myFood ={
    vegetable:"carrot",
    fruit:"orange",
    drink:"water"
}
function myFunction(myObj){
    var vegetableValue=myFood["vegetable"];
    var fruitValue=myFood["fruit"];
    var drinkvalue=myFood["drink"];
    return{vegetableValue,fruitValue,drinkvalue};

}
console.log(myFunction());
module.exports=myFunction(myFood);