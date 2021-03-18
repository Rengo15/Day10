function myFunction(myObj, checkProp){
    var myObj ={
        title:"Titanic",
        song:"My Heart Will Go On",
        genere:"drama"
    };
    if(checkProp==="title"){
        return myObj.title;

    }
    else if(checkProp==="song"){
        return myObj.song;

    }
    else if(checkProp==="genere"){
        return myObj.genere;
    }
    else{
        return "Not Found";
    }
    // Only change code below this line

    return "Change Me!";
    // Only change code above this line

}
console.log(myFunction({title:"Titanic", song:"My Heart Will Go On",genere:"drama"}, "title"));
console.log(myFunction({title:"Titanic", song:"My Heart Will Go On",genere:"drama"}, "song"));
console.log(myFunction({title:"Titanic", song:"My Heart Will Go On",genere:"drama"}, "genere"));
console.log(myFunction({title:"Titanic", song:"My Heart Will Go On",genere:"drama"}, "actor"));
module.exports=myFunction;