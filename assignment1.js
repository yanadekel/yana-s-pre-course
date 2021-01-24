(function () {
    'use strict';

    const readlineSync = require('readline-sync');


    //here I am making an array for questions to put inside readlineSyns method
    const listOfQ = [
        "What's the worst thing that happened to you in 2020?",
        'Who do you like the most?',
        'What skill have you mastered thanks to covid-19?',
        'How many sweat suits and pjs have you bought during 2020?',
        'What are you the most expecting from 2021? '
    ];

    //here I am making array of objects to put inside readlineSyns method

    const listOfq = {
        listOfq1: ['Quarantine', 'Work from home', "I'm happy no matter what", 'No restuarnts'],
        listOfq2: ['"NAHMAN ASH"', '"GABRIEL BARABASH"', '"RONNI GAMZO"', '"MOSHE BAR SIMAN TOVE"'],
        listOfq3: ['Cooking-master', 'Binge-master', 'Zoom-master', 'Cleaning-master'],
        listOfq4: ['non', 'one or two', 'dont even ask - planty', 'three or four'],
        listOfq5: ['to have a regular birthday party celebration', 'to travel alot, especially aboard',
            'to enjoy meeting family, freinds and strange people', 'nothing is going to change']
    }

    // using readlineSyns method to store user answers

    console.log('\n                       ' + String.fromCodePoint(0x1F910) + ' WELCOME TO THE 2020 SUMMARY QUIZE ' + String.fromCodePoint(0x1F910))

    let username = readlineSync.question("What's your Name: \n");

    console.log('Greetings! ', username, ", Let's Start!! \n\n Rules & Instructions: \n1.", username + ' we will have 5 questions with 4 possible answers per question. \n2. Please choose an answer that most represents your state of mind.\n');


    let ans = [];
    let x = 0;
    for (let prop in listOfq) {
        console.log('\n--------- ' + String.fromCodePoint(0x1F929) + ' QUESTION ' + (x + 1) + String.fromCodePoint(0x1F929) + ' ---------')
        ans[x] = readlineSync.keyInSelect(listOfq[prop], listOfQ[x], { cancel: false });
        x += 1;
    }


    // atributing a score to each option for each question, according to a definition i made:
    //     answers <8: ['Quarantine', "NAHMAN ASH", 'binge-master', 'non', 'nothing is going to change'] - the pasimist,
    //     answers <20: ["I'm happy no matter what", '"MOSHE BAR SIMAN TOVE"', 'cleaning-master', 'dont even ask - planty', 'to enjoy meeting family, freinds and strange people']- the optimist,
    //     answers <12: ['No restuarnts', '"RONNI GAMZO"', 'Cooking-master', 'one or two', 'to travel alot, especially aboard']- the realist,
    //     answers <16: ['Work form home', '"GABRIEL BARABASH"', 'zoom-master', 'three or four', 'to celebrat a regular birthday party'] - the workaholik}

    const Answers = {
        'q1': [1, 3, 4, 2],
        'q2': [1, 4, 3, 2],
        'q3': [2, 4, 1, 3],
        'q4': [1, 3, 4, 1],
        'q5': [4, 3, 2, 1]
    }

    
    //checking the score by calculating the answers in each question

    let result = 0;
    let i = 0;

    for (let yname in Answers) {
        result += Answers[yname][ans[i]];
        i++;
    }


    console.log('\n\n' + String.fromCodePoint(0x2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665) + ' QUIZE RESULTS ' + String.fromCodePoint(0X2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665, 0X2665) + '\n\n')

    console.log('your score is ' + result + '\n');

    if (result <= 8) {

        console.log('You seem to be depressed, welcome to the club!' + String.fromCodePoint(0x1F61E));

    } else if (result <= 12) {

        console.log('You are a realist: \nkeeping your head down and waiting till it will be over. Keep going maybe it will happen.' + String.fromCodePoint(0x1F648) + String.fromCodePoint(0x1F649) + String.fromCodePoint(0x1F64A));

    } else if (result <= 16) {

        console.log('You are too much the default version: try to spice up your life a bit, I will join you.' + String.fromCodePoint(0x1F483));

    } else {
        console.log('You are too optimistic and happy: what are you taking?? I want some too!!! ' + String.fromCodePoint(0x1F60E));
    }














})();