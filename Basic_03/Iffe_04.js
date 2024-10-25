//Imediatly Invoked Function
//No polution from global scope


//Named Iffe

(function prin(){
    console.log("DB Connected")
})();


//Without Name Iffe
((name)=>{
    console.log("DB Connected Two")
})("Arham")