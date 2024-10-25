//javascript execute code + call stack

//Javascript execution content

//-> Global execution content { }  -> first alocate in  this
//-> Functional execution content
// -> Eval execution content

//{ } -> it runs in two phases 
// 1-> memory Creation phase  only memory allocation in this phase
// 2-> Execution phase


let val1=10
let val2=5

function addNum(num1,num2){
    let total=num1+num2
    return total
}

let result1=addNum(val1,val2)
let result2=addNum(10,2)


//1 -> Global exection this

//2-> take all variables and just place in memory but stored undefined in memory creation

// val1 -> undefined   val2 -> undefined   addNum -> function defination
//result1-> undefined  result2-> undefined

//3-> execution phase 
// val1 -> 10 val2 -> 5

//addNum Another new variable Enviroment and execution thread
//Function jitni bar call ho ga utni bar new block banay ga or
// 2 phase dubara sy run hon gyn memory or execution function lia
/* let val1=10
let val2=5

function addNum(num1,num2){
    let total=num1+num2
    return total
}

let result1=addNum(val1,val2)
let result2=addNum(10,2) */
//memory phase 
// val 1 -> undefined val 2 -> undefined  total -> undefined

//execution phase 
//num1->10 num->5   total -> 15 then it will return to global execution context { } this and then delete the newly created enviroment

// For let result2=addNum(10,2)
//Again new enviroment will be created with a thread. 
//memory creation phase
// val1-> undefined val2-> undefined total -> undefined
// execution phase num1-> 10 num2 -> 2 total -> 12 will return to the global execution phase and delete the newly created 
//enviroment