//Javascript arrays are dynamic
//Javascript arrays can be of multiple types
//index start with 0
//They cannot be accessed using strings as index like arr["One"]
//When ever we do copy operation in arrays it makes shallow copies
//Shallow copy share the same refrence like what you change in the copy it reflects to the original value

//deep copies (dont share the same refrence)

//Number Array
const arr_Num=[1,2,3,4,5,6]

//Multiple value type array

const arr_temp=[1,2,3,4,5,"Arham"]

//Another way to create Array

const arr1=new Array(1,2,3,4,5,6,7)

//console.log(arr1)

//arr1.push(9)
//console.log(arr1)
//arr1.pop()
//arr1.pop()
//console.log(arr1)

//Unshift it will insert element in start and shift all the values ahead and compture gets burdenize
//arr1.unshift(9)
//console.log(arr1)
//It works like pop pop out the unshifted element
//arr1.shift()
//console.log(arr1)

//console.log(arr1.includes(5)) //it will return true or false 
//console.log(arr1.indexOf(5))

//Join it will will Join the Array and convert that into string seprated by commas

// const newArray=arr1.join()

// console.log(newArray)
// console.log(typeof newArray)

//slice and splice
 
//slice will make a copy from orginal array and it dont include range

const orignal_Array=[1,2,3,4,5,6,7,8,9]
console.log("Original array" ,orignal_Array)
console.log("Slice Result " ,orignal_Array.slice(1,4))


//Splice will cut array part till the range 

console.log("Original array" ,orignal_Array)
console.log("Splice Result ",orignal_Array.splice(1,4))
console.log("After Splice Orginal Array ", orignal_Array)