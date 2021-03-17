// Only change code below this line

// Only change code above this line
function myFunction(roar){
    var lion={
        name:"Simba",
        legs:4,
        tails:1,
        roar:"roar-roar"
    }
    delete lion[roar];
    return lion;
}
console.log(myFunction("roar"));
module.exports=myFunction;