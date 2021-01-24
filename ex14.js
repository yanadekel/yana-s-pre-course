(function () {
    "use strict";


    const readlineSync = require('readline-sync');


    let userNum = readlineSync.questionInt('please pick any number from 1 what ever you wish: ');


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    if (userNum < 1) {
        throw "can't find you min/max number with your pick!"
    } else {
        let numArr = new Array(userNum);
        for (let i = 0; i < userNum; i++) {
            numArr[i] = getRndInteger(1, 50);
        }


        numArr.sort(function (a, b) {
            return a - b;
        });


        let max = numArr[userNum - 1];
        console.log('THE MAX NUMBER IN THE ARRAY IS: ' + max);
        let min = numArr[0];
        console.log('THE MIN NUMBER IN THE ARRAY IS: ' + min);


    }









})();