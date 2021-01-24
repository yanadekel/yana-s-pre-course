(function () {
    "use strict";


    const readlineSync = require('readline-sync');

    let sevenBoom = readlineSync.questionInt('Please  enter a positive number between 1-99: ');



    for (let i = 1; i <= sevenBoom; i++) {
        if (i % 7 === 0 || Math.floor(i / 10) === 7 || i % 10 === 7) {

            console.log("boom");

        } else {
            console.log(i);
        }

    }











})();    