(function () {
    "use strict";



    const readlineSync = require('readline-sync');

    let num = readlineSync.questionInt('Please  enter a positive number: ');

    function prime(number) {
        for (let i = 2; i < number; i++) {

            if (number % i === 0) return false;
        }
        return number > 1;

    }

    for (let n = 2; n <= num; n++) {
        
        if ( prime(n)) {
            console.log (n);
        }
    }

   






})();    