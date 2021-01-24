(function () {
    "use strict";


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function correntValue(value) {
        return value;
    }

    let cash = correntValue(50);


    const readlineSync = require('readline-sync');


    console.log('\n                       ' + String.fromCodePoint(0x1F910) + ' WELCOME TO THE GAME OF WAR ' + String.fromCodePoint(0x1F910))

    let username = readlineSync.question("What's your Name: \n", { defaultInput: 'Player' });

    console.log('Greetings! ', username, ", you have 50 ILS in the cash. \n\nLet's Start WAR!! ");

    while (cash > 0) {
        let usersBet = readlineSync.questionInt('please place your bet for the next round from 1 to ' + cash + ': ');

        if (usersBet > cash || usersBet <= 0) {
            console.log("Sorry, ", username, ',you entered ', usersBet, ", it's not a valid bet! I'M NOT PLAYING WITH YOU, see ya! ");
            break;
        } else {
            let userCard = getRndInteger(1, 12);
            let computerCard = getRndInteger(1, 12);
            console.log("\nSHUFFLING: \nyour card is:", userCard, ',computer card is:', computerCard);
            if (userCard > computerCard) {
                cash += usersBet;
                let more = readlineSync.keyInYNStrict('You WON the round! want to play another round? ');
                if (more === false) {
                    console.log('you now have: ', cash, 'ISL');
                    break;
                } else {
                    usersBet <= cash || usersBet > 0;

                }
            } else if (userCard < computerCard) {
                cash -= usersBet;
                let more = readlineSync.keyInYNStrict('You LOST the round! want to play another round? ');
                if (!more) {
                    console.log('you now have: ', cash, 'ISL');
                    break;
                } else {
                    if (cash <= 0) {
                        console.log(username, ', You have no more money! you are broke!!! come back when you stop being a looser')
                        break;
                    } else {
                        usersBet <= cash || usersBet > 0;
                    }
                }
            } else {
                let more = readlineSync.keyInYNStrict('You came up with a draw. want to try again?');
                if (!more) {
                    console.log('you now have: ', cash, 'ISL');
                    break;
                }


            }

        }

    }





})();