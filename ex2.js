(function(){
    'use strict';

/*let makesten = (num1, num2) => {
    if (num1 + num2 === 10) {
       console.log("makes 10");
        
    } else {
       
     console.log("nope"); 
    };
    };
    
    
    makesten(1,1)
    makesten(2,12)
    makesten(1,9)
    makesten(5,5)
    */

   var readlineSync = require('readline-sync');
   let firstNumber = readlineSync.questionFloat('Please choose a number: ');
   let secondNumber = readlineSync.questionFloat('Please choose a second number: ');
   
   let makesten = (num1, num2) => {
    (num1 + num2 === 10) ? console.log("makes 10") : console.log("nope");
}
   makesten(firstNumber,secondNumber);
   
   

    
})();