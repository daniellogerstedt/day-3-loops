'use strict';

var favNumber;
var inputNumber;

// Seventh Question Variable - Day 3
var favFoods = ['cookies', 'tacos', 'chips', 'cake', 'pie', 'pizza'];
var flag = false;
var guesses = 0;
// Creates the counter - Day 3
var counter = 1;

// Number of answers correctly - Day 3
var correctAnswers = 0;

// Number of answers incorrect - Day 3
var incorrectAnswers = 0;
alert('The following questions are yes or no, please answer Y or N.');
var gArray = [];
var eArray = ['y', 'n', 'y', 'y', 'y'];
var vArray = ['yes', 'no', 'yes', 'yes', 'yes'];
var qArray = ['Does Dan like dogs?', 'Does Dan wear hats?', 'Does Dan like video games?', 'Is Dan a veteran?', 'Do you think I like beer?'];
var cArray = ['Yeah, Dan does like dogs!', 'Correct, Dan doesn\'t usually wear hats.', 'Heck ya! Dan\'s a gamer!', 'Dan was a soldier for sure.', 'Duh, Beer is tasty!'];
var iArray = ['Nah, Dan does infact like dogs.', 'Nah, Dan owns hats but wears none.', 'Dan actually does like games.', 'Incorrect, Dan was in the Army.', 'Wrong, Beer is super diverse and great.'];
function yesNoQuestions (guess, expect, variate, question, correct, incorrect) {
  for (var i = 0; i < question.length; i ++) {
    gArray.push(prompt(question[i]));
    if (guess[i] === expect[i] || guess[i] === variate[i]) {
      alert(correct[i]);
      correctAnswers++;
    } else {
      alert(incorrect[i]);
      incorrectAnswers++;
    }
  }
}


// First Question.
//   var dogs = prompt('Does Dan like dogs?');
//   console.log('Dan likes dogs:', dogs);
//
//   // Second Question.
//   var hats = prompt('Does Dan wear hats?');
//   console.log('Dan wears hats:', hats);
//
//   // Third Question.
//   var games = prompt('Does Dan like video games?');
//   console.log('Dan likes games:', games);
//
//   // Fourth Question.
//   var veteran = prompt('Is Dan a veteran?');
//   console.log('Dan is a veteran:', veteran);
//
//   // Fifth Question.
//   var beer = prompt('Do you think I like beer?');
//   console.log('Dan likes beer:', beer);
//
//   if (dogs.toLowerCase() === 'y' && hats.toLowerCase() === 'n' && games.toLowerCase() === 'y' && veteran.toLowerCase() === 'y' && beer.toLowerCase() === 'y') {
//     alert('Awesome! you know me very well!');
//   } else if (dogs.toLowerCase() === 'y' || hats.toLowerCase() === 'n' || games.toLowerCase() === 'y' || veteran.toLowerCase() === 'y' || beer.toLowerCase() === 'y') {
//     alert('you\'re Partially Right!');
//   } else {
//     alert('you don\'t know me very well');
//   }
//
//   // Validation Conditional Statements: This code verifies each individual answer to determine which answers were correctly answered and which weren't.
//   if (dogs.toLowerCase() === 'y') {
//     alert('Yeah, Dan does like dogs!');
//     correctAnswers++;
//   } else {
//     alert('Nah, Dan does infact like dogs.');
//     incorrectAnswers++;
//     console.log(incorrectAnswers);
//   }
//
//   if (hats.toLowerCase() === 'n') {
//     alert('Correct, Dan doesn\'t usually wear hats.');
//     correctAnswers++;
//   } else {
//     alert('Nah, Dan owns hats but wears none.');
//     incorrectAnswers++;
//     console.log(incorrectAnswers);
//   }
//
//   if (games.toLowerCase() === 'y') {
//     alert('Heck ya! Dan\'s a gamer!');
//     correctAnswers++;
//   } else {
//     alert('Dan actually does like games.');
//     incorrectAnswers++;
//     console.log(incorrectAnswers);
//   }
//
//   if (veteran.toLowerCase() === 'y') {
//     alert('Dan was a soldier for sure.');
//     correctAnswers++;
//   } else {
//     alert('Incorrect, Dan was in the Army.');
//     incorrectAnswers++;
//     console.log(incorrectAnswers);
//   }
//
//   if (beer.toLowerCase() === 'y') {
//     alert('Duh, Beer is tasty!');
//     correctAnswers++;
//   } else {
//     alert('Wrong, Beer is super diverse and great.');
//     incorrectAnswers++;
//     console.log(incorrectAnswers);
//   }
//
// }
// Sixth Question Variables - Day 3
var favNumber;
var inputNumber;

// Seventh Question Variable - Day 3
var favFoods = ['cookies', 'tacos', 'chips', 'cake', 'pie', 'pizza'];
var flag = false;
var guesses = 0;
// Creates the counter - Day 3
var counter = 1;

// Number of answers correctly - Day 3
var correctAnswers = 0;

// Number of answers incorrect - Day 3
var incorrectAnswers = 0;
function favoriteFood () {
// Food Question - Day 3
  while (guesses < 6 && flag === false) {
    var foodAnswer = prompt('Guess one of my favorite foods').toLowerCase();
    for (var i = 0; i < favFoods.length; i++) {
      if (foodAnswer === favFoods[i]){
        alert('Wow! I definitely like ' + foodAnswer);
        correctAnswers++;
        flag = true;
        console.log(flag);
        break;
      }
    }
    guesses++;
    if (flag === true) {
      alert('you guessed ' + guesses + ' time');
    }
    if (guesses === 6) {
      alert('sorry you only had 6 guesses');
    }
  }
}

function favoriteNum (){
  while (favNumber !== 13 && counter < 4) {
    inputNumber = prompt('Alright now guess my favorite number and we will see how many guesses it takes');
    favNumber = parseInt(inputNumber);
    console.log(favNumber);
    console.log(isNaN(favNumber));
    if (favNumber > 13) {
      alert('You guessed too high!');
      counter++;
      console.log(counter);
    } else if (favNumber < 13) {
      alert('You guessed too low!');
      counter++;
      console.log(counter);
    } else if (isNaN(favNumber)) {
      alert(inputNumber + ' isn\'t a number');
      counter++;
      console.log(counter);
    } else if (favNumber === 13){
      alert(favNumber + ' is truely my favorite number.');
    }
    if (counter === 4) {
      alert('sorry but you only get 4 guesses');
    }
  }
}
yesNoQuestions (gArray, eArray, vArray, qArray, cArray, iArray);
favoriteFood ();
favoriteNum ();
if (correctAnswers > 0) {
  alert('Congrats, you got ' + correctAnswers + ' correct answers.');
}

if (incorrectAnswers > 0) {
  alert('Unfortunately, you got ' + incorrectAnswers + ' wrong answers.');
}
// Validation Conditional Statements: This code verifies whether the person got all answers, some answers, or no answers correct.
// if (dogs.toLowerCase() === 'y' && hats.toLowerCase() === 'n' && games.toLowerCase() === 'y' && veteran.toLowerCase() === 'y' && beer.toLowerCase() === 'y') {
//   alert('Awesome! you know me very well!');
// } else if (dogs.toLowerCase() === 'y' || hats.toLowerCase() === 'n' || games.toLowerCase() === 'y' || veteran.toLowerCase() === 'y' || beer.toLowerCase() === 'y') {
//   alert('you\'re Partially Right!');
// } else {
//   alert('you don\'t know me very well');
// }
//
// // Validation Conditional Statements: This code verifies each individual answer to determine which answers were correctly answered and which weren't.
// if (dogs.toLowerCase() === 'y') {
//   alert('Yeah, Dan does like dogs!');
//   correctAnswers++;
// } else {
//   alert('Nah, Dan does infact like dogs.');
//   incorrectAnswers++;
//   console.log(incorrectAnswers);
// }
//
// if (hats.toLowerCase() === 'n') {
//   alert('Correct, Dan doesn\'t usually wear hats.');
//   correctAnswers++;
// } else {
//   alert('Nah, Dan owns hats but wears none.');
//   incorrectAnswers++;
//   console.log(incorrectAnswers);
// }
//
// if (games.toLowerCase() === 'y') {
//   alert('Heck ya! Dan\'s a gamer!');
//   correctAnswers++;
// } else {
//   alert('Dan actually does like games.');
//   incorrectAnswers++;
//   console.log(incorrectAnswers);
// }
//
// if (veteran.toLowerCase() === 'y') {
//   alert('Dan was a soldier for sure.');
//   correctAnswers++;
// } else {
//   alert('Incorrect, Dan was in the Army.');
//   incorrectAnswers++;
//   console.log(incorrectAnswers);
// }
//
// if (beer.toLowerCase() === 'y') {
//   alert('Duh, Beer is tasty!');
//   correctAnswers++;
// } else {
//   alert('Wrong, Beer is super diverse and great.');
//   incorrectAnswers++;
//   console.log(incorrectAnswers);
// }
//
