const number=54.456
const number1=new Number(60)
console.log(number1)

//console.log(number.toFixed(2))
//console.log(number.toPrecision(3))
//console.log(number.toString().length)

const temp_number=50000000

//It will add commas according to us standars
//console.log(temp_number.toLocaleString())

//It will add commas according to indian standars
//console.log(temp_number.toLocaleString("en-IN"))

//It will add commas according to Pakistan standars
//console.log(temp_number.toLocaleString("en-PK"))

//It will add commas according to Chinese Simplified standards
//console.log(temp_number.toLocaleString("zh-CN"))


// ---------------- Maths Library comes with javascript by default---------------------

console.log(Math) //it is a object
console.log(Math.abs(-4)) //Accessing the Properties of Math object abs that will convert nmber to +ve number
console.log(Math.round(4.567)) //It will round of the value
console.log(Math.ceil(3.7)) //We will get the ceiling value like for 3.7 => 4 and for 2.1 => 3
console.log(Math.floor(5.8)) //We will get the floor value like for 5.8 => we will get 5 and for 2.4 => 2
console.log(Math.min(1,2,3,4,5,9,6))//this will give the minimum value amount the numbers
console.log(Math.max(1,2,3,4,5,9,6)) //this will give the max value

//<----Random ---->
console.log(Math.random()) //This will give value from 0-1 (e.g 0.176,0.8,0.5123 etc)
console.log(Math.random()*10+1) //This will give value from 1 - 10
console.log(Math.floor(Math.random()*6)+1) //like for dice u need every time a random value range up to 6

//For setting min and max value for random value generation

const min=5,max=30;
console.log(Math.floor(Math.random()*(max-min+1))+min)