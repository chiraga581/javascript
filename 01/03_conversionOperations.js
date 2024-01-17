let score = false

console.log(typeof (score))
let value = "33sdf"
console.log(typeof (value))

let valueInNumber = Number(score)
let valueInNumber2 = Number(value)
console.log(valueInNumber)
console.log(typeof (valueInNumber))
console.log(typeof (valueInNumber2))


//  conversion rule 
//  "33" => 33
// "23adsfa" => NaN type will be number only 

//  1 -> true 
//  0 -> false 
//  "" -> false
//   "Chirag" => true 
console.log("number conversion of \n \"4\" \t \     t to boolean will be: " , Boolean(4))



/*

    primitive data types 
    (Call by value )
    7 types : string , number . boolean , null , undefined , symbol , BigInt
    


    Non Primitive
    (reference type)
    Array , objects , functions 


*/


//  symbol definition 
const id = Symbol(12324)

const bigNum = 123342452134n  // Bigint

// Array 

const heros = ["Iron man" , "Superman" ];

//  objects
let obj = {
    name : "chirag ",
    rollnumber : 9958,
    datatype : "Dynamically typed"
}

const MyFunction = function() {
    console.log("Hello Akshuu");
}
 