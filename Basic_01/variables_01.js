//9/3/2024
const accontId=101010
let accountName="ARHAM"
var accountStats="Active" //it is not scope specific u can make another variable of same name. If u change the 2nd variable vale it might possible it will change the first variable value
issuedDate="12-12-2020"

// accountId=4310  //Not Allowed reassigning the Value to a const variable
//console.log(accontId); 

console.table([accontId,accountName,accountStats,issuedDate])