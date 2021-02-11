'use strict';

//generating random number and initializing variable
let generateRandomNumber = Math.random();
let secretNumber = Number(Math.trunc(generateRandomNumber * 20) + 1);
// console.log(secretNumber);
let score = 20;
let highscoreValue = 0;
let message = document.querySelector('.message');
let scoreElement = document.querySelector('.score');
let guess = document.querySelector('.guess');
let number = document.querySelector('.number');
let highscore = document.querySelector('.highscore');
let body = document.querySelector('body');
let check = document.querySelector('.check');
let hiddenClass = document.querySelector('.hidden');

//added event listner for check button
check.addEventListener('click', function() {
  const userStringInput = guess.value;
  //check if input is null or 0
  if (!Number(userStringInput)) {
    message.textContent = 'Enter A Number';
  }
  //check if the input number is equal to guessed number
  else if (Number(userStringInput) === secretNumber) {
    message.textContent = 'Hurray..!!!';
    number.textContent = secretNumber;
    //css manupulation
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    // update highscore
    if (score > highscoreValue) {
      highscore.textContent = score;
      highscoreValue = Number(highscore.textContent);
    }
  }
  // check if the input number is  not equal to guessed number
  else if (Number(userStringInput) !== secretNumber) {
    score = score - 1;
    if (score > Number(-1)) {
      scoreElement.textContent = score;
      // check if the input number is greater than guessed number
      if (Number(userStringInput) > secretNumber) {
        message.textContent = 'Too high...';
      }
      // check if the input number is less than guessed number
      else if (Number(userStringInput) < secretNumber) {
        message.textContent = 'Too Low...';
      }
    } else {
      // disable the check button
      check.disabled = true;
      // show modal
      hiddenClass.style.display = 'block';
      //close modal
      document
        .querySelector('.close-modal')
        .addEventListener('click', function() {
          hiddenClass.style.display = 'none';
          score = 20;
          generateRandomNumber = Math.random();
          secretNumber = Number(Math.trunc(generateRandomNumber * 20) + 1);
          message.textContent = 'Start guessing...';
          scoreElement.textContent = 20;
          guess.value = '';
          number.textContent = '?';
          body.style.backgroundColor = '#222';
          number.style.width = '15rem';
          //enable the check button
          check.disabled = false;
        });
    }
  }
});

//added event listner for again button
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  generateRandomNumber = Math.random();
  secretNumber = Number(Math.trunc(generateRandomNumber * 20) + 1);
  message.textContent = 'Start guessing...';
  scoreElement.textContent = score;
  guess.value = '';
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  //update highscore
  highscoreValue = Number(highscore.textContent);
});
