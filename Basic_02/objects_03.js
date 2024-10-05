//There is two ways to create object (constrcutor method,Literal Method )
//When every we create object through constructor that is signleton object has only one instance
//But through literals objects are not singleton

//Object.create() Constructor

//object Literals
//We dont add " "  around keys bcs javascript already take that as sting
//when we have to use a symbol as a key 
const symbol=Symbol("key")

const user={
    name:"Arham",
    "FullName":"Arham Bashir",
    [symbol]:"mykey",
    age:18,
    location:"Lahore" 
}

//console.log(user.name)
//console.log(user["name"])
//console.log(user[symbol])


//To change the value of a key in a object  we can do like this

user.name="Ali"
console.log(user["name"])

//I also can freeze the object So No changes can happen

Object.freeze(user)
user.name="Hamza"
//console.log(user["name"]) //No changes propogated due to freeze object

//console.log(user)

//Adding new Function to the exsisting object

