(function () {
    "use strict";

    const readlineSync = require('readline-sync');

     let string = readlineSync.question('Please  enter a a string: ');


     console.log(string.split(' ').join('*'));




    // let p = / /gi;
    // let str = 'ma kore gever hamud?';
    // let newstr = str.replace(p, '*');
    // console.log(newstr);

    // let p = 'string ';
    // console.log(p.replace(' ', '*'));


})();    