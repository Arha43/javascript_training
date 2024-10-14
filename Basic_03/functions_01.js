// make a pkg like enclose a functionality in a Function

//here number 1 and number 2 we say parameters
function addition(number1,number2){
    console.log(number1+number2)
}

//I am passing here 2 and 4 we say these are arguments
const result=addition(2,4)

//console.log(result) //undefined


function loginUserMessage(username){
    return `${username} just logged In`
}

//console.log(loginUserMessage("Arham"))
//console.log(loginUserMessage())//When we will not pass the value then it returns undefined

//rest operator


function Prin(...num1){
    console.log(num1)
}

//Prin(2,3,4,5,6,7,8)


// const users={
//     username:"Arham",
//     age:21
// }

// function handleobject(anyobject){
//     console.log(`User name is ${anyobject.username} and age is ${anyobject.Prin}`)
// }


//Array Case 
const newArray=[200,400,300,900.4]

function return2ndVal(anyArray){
return anyArray[1]
}

console.log(return2ndVal(newArray))

console.log(return2ndVal([1,2,3,34,6]))