(function () {
    "use strict";

    const readlineSync = require('readline-sync');

    let string = readlineSync.question('Please  enter a a string: ');


    function palindrome(string) {
       
        let lowCase = string.toLowerCase();
        let reversString = lowCase.split('').reverse().join('');
        return lowCase === reversString;

    }

    if (palindrome(string)) {
        console.log('yes. this is a palindrome');
    } else {
        console.log('not a palindrome');
    }
})();    