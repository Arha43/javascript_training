//Javascript is dynamic language
//data types 
//-> primitive and Non Primitive( refrence type)

//Primitive  (copy the value)
// 7 types: string,Number,Boolean,null,undefined,Symbol,Big Int

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId) //symbol will be different thats why false

const bigNumber=3333333333333333333222222222222n;

//Non Primitive (copy the address)

//Array,Objects,Fnctions

const arr=["arham","Ali"]

//object
let obj={
    ali:"student",
    status:false
}

//-------------------------------Stack and Heap Memory in java Script ------------------

// Primitive data types stores in stack and Non Primitive(refrence) in Heap

//Primitive data type (using stack)

let a=5;
let b=a; //duplicates the value
a=8;
//console.log("Value of a : "+a)
//console.log("Value of b : "+b)

//Non Primitive (using heap memory)

let obj1={name:"Arham"}
let obj2=obj1;  //this is taking refrence of the memory

obj2.name="Ali"  //and now changing the value every where in the refrence

console.log(obj1.name)
console.log(obj2.name)
