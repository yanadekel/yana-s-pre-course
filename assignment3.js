(function () {
    "use strict";

    const readlineSync = require('readline-sync');
    const figlet = require('figlet');

    // Array of words for the following function to randomly pick one from.

    const wordsArr = ['game', 'message', 'function', 'method', 'Random', 'Strings'];

    // A function to pick a random word form the array of words.

    function generateWord(arr) {

        return arr[Math.floor(Math.random() * arr.length)];

    }

    // Function evaluates whether the user has guessed all the letters correctly 

    function evaluation(stararr) {

        for (let m = 0; m < stararr.length; m++) {
            if (stararr[m] === '*') {
                return true;
            }
        }
        console.log('\nGood job you have guessed the word!!!\n');
    }



    // Choose a random word
    let randomWord = generateWord(wordsArr).split('');

    // Make a new array with length of the chosen word, with asterisks instead of letters.
    let symboleArr = new Array(randomWord.length);

    for (let n = 0; n < symboleArr.length; n++) {
        symboleArr[n] = '*';
    }

    //establish number of tries for the user

    let userTries = 10;

    console.log(figlet.textSync('HANGMAN GAME', {
        font: 'Flower Power',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));


    // making the gama loope for user tries. WHILE the user has less than 10 trys (userTries>0) or the user has yet to figure out the word,
    // the user gets a prompt to try to guess, no more then 10 times or no more than the trials he has left.

    while (userTries > 0 && evaluation(symboleArr)) {

        console.log('You have ' + userTries + ' guesses \nThe word is: \n\n' + symboleArr.join(''));


        //get guess from player
        let guesses = readlineSync.question('Please type a letter for your guess: ', { limit: /^[a-zA-Z]+/, limitMessage: 'not a valid input' });

        let successfull = false;

        for (let i = 0; i < randomWord.length; i++) {

            if (guesses.toUpperCase() === randomWord[i] || guesses.toLowerCase() === randomWord[i]) {
                symboleArr[i] = randomWord[i];
                successfull = true;

            }
        }

        if (!successfull) {
            userTries--;
        }
    }


    console.log('The word that you have guessed is: ' + symboleArr.join(''));


    if (evaluation(symboleArr)) {
        let finalGeuss = readlineSync.question('Please type your final guess: ', { limit: /^[a-zA-Z]+/, limitMessage: 'not a valid input' });
        if (finalGeuss === randomWord.join('')) {
            console.log('--Congrats!! You did it!--')
        }


        console.log('\nGood game! Come back again for another one :)\n')

    }







})();