(function () {
    "use strict";

    const readlineSync = require('readline-sync');

    let str = readlineSync.question('Please  enter a a string: ');



    for (let i = 0; i < str.length; i++) {


        switch (str[i]) {
            case 'a':
                str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
            case 'e':
                str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
            case 'i':
                str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
            case 'o':
                str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
            case 'u':
                str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
            case 'y':
                str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length)
        }

    }
    console.log(str);




})();