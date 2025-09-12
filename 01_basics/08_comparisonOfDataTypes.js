// while comapring data types no problem occurs during comparison between same data types but when 
// we compare different data types then issues may occur



console.log(null>0); // comparison operator converts null to zero
console.log(null==0);//equality operator does not convert null to zero
console.log(null>=0);

console.log(undefined>0); //undefined always return false
console.log(undefined==0);
console.log(undefined>=0);;

//strict check(===) - even check if both data types are same
// console.log("2"===2);

// avoid comparing different data types







