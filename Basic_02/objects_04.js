//const facebookUser=new Object() //Singleton object
const facebookUser={}  //Not singleton object

facebookUser.id="1"
facebookUser.name="Arham"
facebookUser.isLoggedIn=false

//console.log(facebookUser)

const obj2={
    email:"arhambashir336@gmail.com",
    fullname:{
        userfullname:{
           firstName:"Arham",
           lastName:"Bashir"
        }
    }
}

//To access object in object in object we can use dot

//console.log(obj2.fullname.userfullname.firstName)

//Merging objects

const ob1={1:"a",2:"b"}
const ob2={3:"c",4:"d"}

//const ob3=Object.assign({},ob1,ob2)
const ob3={...ob1,...ob2}
//console.log(ob3)

const users=[    {
        id:1,
        name:"Arham"
    },{
      id:2,
      name:"Ali"
    },
    {
        id:3,
        name:"Ahsan"
    }
]
//console.log(users[1].name)

//console.log(Object.keys(facebookUser))
//console.log(Object.values(facebookUser))
//console.log(Object.entries)


//Object Destructring

const user={
    name:"Arham",
    course:"Graphics",
    price:1000
}

const {name:n}=user
console.log(n)

// In past we get data in form of xml but now we get data from apis in form of json objects

// {
//     {

//     }
//     {

//     }
//     {

//     }
// }