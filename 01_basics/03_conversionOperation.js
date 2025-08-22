let score = 33
let score2 ="33" // 33
let score3 ="33abc" // NaN 

 
console.log(typeof score);
console.log(typeof score2);
console.log(typeof score3)

let valueInNumber = Number(score2)
console.log(typeof valueInNumber);

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)


let age = null
let marks = undefined
let value = true

let ageConverted = Number(age) //0
let marksconverted = Number( marks) // NaN- not a number
let valueConverted= Number(value) // 1 and for false-0

console.log(ageConverted);
console.log(marksconverted);
console.log(valueConverted);


let loggedIn= 1
let booleanloggedIn = Boolean(loggedIn) //true
console.log(booleanloggedIn);

let anotherLogin= ""
let booleantest = Boolean(anotherLogin) // false
console.log(booleantest);

let name= "viddu"
let booleanName = Boolean(name) //true
console.log(booleanName);

let someNumber = 78
let stringNumber = String(someNumber)
console.log(typeof stringNumber);

console.log(stringNumber);














