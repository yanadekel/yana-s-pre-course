(function () {
    "use strict";

    const readlineSync = require('readline-sync');

    let str = readlineSync.question('I will find you the longest word in your sentence. Please  enter a sentence: ', { limit: /^[a-zA-Z ]+$/ });


    let strSplit = str.split(' ');
    let maxWord = 0;
    let longestW = '';



    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > maxWord) {
            maxWord = strSplit[i].length
            longestW = strSplit[i];
        }
    }

    console.log(longestW);












})();