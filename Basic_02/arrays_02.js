const marvel_heros=["Doctor Strange","Iron Man","Hulk"]
const dc_heros=["batman","Green Arow","Flash"]
//marvel_heros.push(dc_heros) //Push an other array in a array 
//console.log(marvel_heros)  

//To Access flash we have do like this, and this is not the correct way of doing it
//console.log(marvel_heros[3][2])


//We can use concat also it will return a new array but concating arrays

const all_heros=marvel_heros.concat(dc_heros)

//console.log(all_heros)


//We can aslo use Spread Operator to concatenate
//There is a limitation with concat that it only can concat one array but using spread we can concat as much as we can
const all_new_heros=[...marvel_heros,...dc_heros]

//console.log(all_new_heros)

// if we have array in array in array We can do all of them in a single array using flat

const max_array=[1,2,3,[5,6,7,[9,10,11,[12,13,14]],9,[15,[16,19]]]]

const copy_max_array=max_array.flat(Infinity)
//console.log(copy_max_array)

//When We want to scrap data and we dont know the type we need that in array format we cannot do like this

console.log(Array.isArray("Arham")) //This is not array its a string it will return false

console.log(Array.from("Arham")) //Take the data and convert it to string

//in case of object We have to define what we want like keys or values

//console.log(Array.from({name:"Arham",number:"03230317477"})) //This will return empty bcs it dont know what it have to take key or values


//If you want to create array of different values stores in a variable
const val1=4,val2=5,val3=6
console.log(Array.of(val1,val2,val3))
