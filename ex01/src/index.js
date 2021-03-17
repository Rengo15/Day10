// Only change code below this line

// Only change code above this line
function myFunction(myObj){

    myObj=myPet;
    return myObj;

}
var myPet ={
    species:"Pitbull",
    name:"Leo",
    legs:4,
    friends:["Coby", "Boby"]
}

console.log(myFunction());
module.exports={myPet, myFunction};