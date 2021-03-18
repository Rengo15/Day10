function myFunction(){
    var myMusic={
        001:{
            artist:"Billy Joel",
            title:"Piano Man",
            relese_year:1973,
            formats:{
                1:"CD",
                2:"8T",
                3:"LP"
            },
            gold:true
        },
        002:{
            // Add a record here
            artist:"Chris Isaak",
            title:"Heart Shaped World",
            relese_year:1989,
            formats:{
                1:"CD",
                2:"8T",
                3:"LP"
            },
            gold:true
        }
    };
    return myMusic;

}
console.log(myFunction()[2]);
module.exports=myFunction;