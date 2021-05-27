'use strict';
//switch-case Task
let someNumbers = prompt('Enter a number')
const seasons = function (someNumber) {
    switch (someNumber) {
        case '1':
            console.log('Winter')
            break
        case '2':
            console.log('Spring')
            break
        case '3':
            console.log('Summer')
            break
        case '4':
            console.log('Autumn')
            break
        default:
            console.log('Something goes wrong')
    }
};

seasons(someNumbers);

/// What season is it?

const month = +prompt('Enter a number')

function whatSeasonItIs (answerFromUser) {
    if (answerFromUser <= 3) {
        console.log('This is winter')
    } else if (answerFromUser > 3 && answerFromUser < 6 ) {
        console.log('This is spring')
    } else if(answerFromUser > 6 && answerFromUser < 9) {
        console.log('This is summer')
    } else if (answerFromUser > 9 && answerFromUser <= 12) {
        console.log('this is authum')
    }
};

whatSeasonItIs(month)

let userAnswer = +prompt('Enter a day number')

// User days of week
switch (userAnswer) {
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thursday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    case 7:
        console.log('sunday')
        break
    default:
       let i = 0;
       do {
           userAnswer = +prompt('Enter a day number')
       } while(userAnswer < 1 )
}

// Find decade

let day = Math.ceil(Math.random() * 31);
// console.log(day)

if(day <= 31 && day > 20) {
    console.log('This is the third decade of month')
} else if (day < 20 && day > 11) {
    console.log('This is the second decade of month')
} else {
    console.log('This is the first decade of month')
}