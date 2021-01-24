(function () {
    "use strict";



    const readlineSync = require('readline-sync');

    let answer = readlineSync.questionInt('Please choose a number larger than 10: ');
    
    while (answer <=10){
      
        answer= readlineSync.questionInt('Please choose a number larger than 10: ');
      
    }
    






})();  