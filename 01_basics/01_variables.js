const accountId = 1323
let accountEmail = "vidushi@google.com"
var accountPassword = "viddu"
accountCity = "Jaipur" // not a very good way of writing varibles

//accountId = 444 // not allowed to modify the constants in javascript
accountEmail = "vishakha@google.com"
 accountPassword = "vikku"
accountCity = "banasthali"

let accountState; // it shows it as undefined

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
*we do not use var in javascript because it created problems in block scope and funcitonal scope

 */