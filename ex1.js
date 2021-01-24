const input = require('readline-sync');

let name = input.question("Enter your  first name: ");
let lastname = input.question("Enter your last name: ");

console.log(`"Hello ${name} ${lastname}!"`);
