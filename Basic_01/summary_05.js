//Javascript is dynamic language
//data types 
//-> primitive and Non Primitive( refrence type)

//Primitive  (copy the value)
// 7 types: string,Number,Boolean,null,undefined,Symbol,Big Int

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId) //symbol will be different thats why false

const bigNumber=3333333333333333333222222222222n;

//Non Primitive (copy the address)

//Array,Objects,Fnctions

const arr=["arham","Ali"]

//object
let obj={
    ali:"student",
    status:false
}