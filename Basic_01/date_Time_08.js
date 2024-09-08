//Date

let c_Date=new Date(); //Give us current date
//console.log(c_Date) 
//console.log(c_Date.toString()) // a lil bit more readable
//console.log(c_Date.toDateString())
//console.log(c_Date.toLocaleString()) //It will give date with time alsoe

//console.log(typeof(c_Date)) //Type of date is object

//Months start from 0 in this

let myDate=new Date(2023,0,23)
//console.log(myDate.toLocaleString())

// For spicific pattern like YY-MM-DD
//I can also change the Pattern
let p_Date=new Date("2023-01-24")
//console.log(p_Date.toLocaleString())

//---- For Current Time Stamp

//let current_TimeStamp=Date.now()
//console.log(current_TimeStamp)
//console.log(Date.now())

//To convert the result og miliseconds in seconds we divide by 1000
//console.log(Math.floor(Date.now()/1000))

let my_Date=new Date()
//console.log(my_Date);
//To get month
//console.log(my_Date.getMonth()+1)//bcs month start from 0
//To get day
//console.log(my_Date.getDay())


//To customize our date in which time zone etc

console.log(my_Date.toLocaleString('default',{
    //Parameters
    timeZone:'GMT+5'
}))