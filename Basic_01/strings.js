const name="Arham"

//console.log(`My Name is ${name}`)

const newName=new String("Arham Bashir")
const newName2=new String("Arham-Bashir-123")

console.log(newName)
console.log(newName[0])
console.log(newName.toUpperCase())
console.log(newName.toLowerCase())
console.log(newName.substring(0,3))
console.log(newName2.split('-'))
console.log(newName.charAt(2))
console.log(newName.includes('a'))
const url="https://-example.com-/-edu";

console.log(url.replace('-',''))

//To remove all hyphens we can use regular expressions

console.log(url.replace(/-/g,''))

// we can also use flag i that will check without case sensitivty it will check for both A,a. ( /a/i )


// like if u want to remove extra spaces from the string 

const var1="  Arham    B"

console.log(var1.trim())
// both will return unicode of the value
console.log(var1.codePointAt(0))
console.log(var1.charCodeAt(1))