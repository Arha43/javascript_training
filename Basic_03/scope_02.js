//Initially var was used but issue with var is 

var a=300

if(true){
    var a=30
}

//console.log(a) it will print 30

function one(){
    const username="Arham Bashir"

    function two(){
        const website="facebook"
       // console.log(username)
    }
    //console.log(website)
    two()
}


// function Declartion

function addone(num){

    return num+1;
}

//If we print the return value before the initlization it will cause error console.log(addone(10))

console.log(addtwo(5))
const addtwo=function(num){
    return num+2;
}

console.log(addtwo(5))