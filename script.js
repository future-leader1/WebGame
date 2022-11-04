'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number';

console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
*/

let highScore = 0;
let Score = 20;
let number;
//= Math.trunc(Math.random() * 20) + 1;
const getRandom = a => Math.trunc(Math.random() * 20) + 1;

const displayMesasge = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

number = getRandom(number);

document.querySelector('.again').addEventListener('click', function () {
  Score = 20;
  number = getRandom(number);
  document.querySelector('.score').textContent = Score;
  //document.querySelector('.number').textContent = '?';
  displayNumber('?');
  //document.querySelector('.message').textContent = 'start guessing';
  displayMesasge('start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //document.querySelector('.message').textContent = 'no number';
    displayMesasge('no number');
    document.querySelector('body').style.backgroundColor = '#55261C';
  } else if (!Score) {
    //document.querySelector('.message').textContent = 'You Lost The Game';
    displayMesasge('You Lost The Game');
    document.querySelector('body').style.backgroundColor = '#FF0000';
  } else if (guess && guess === number) {
    //document.querySelector('.message').textContent = 'correct';
    displayMesasge('correct');
    //document.querySelector('.number').textContent = number;
    displayNumber(number);

    highScore < Score ? (highScore = Score) : highScore;
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#60b247';
    //abova and blow is mainly used for styling
    document.querySelector('.number').style.width = '50rem';
  } else {
    guess > number ? displayMesasge('low') : displayMesasge('high');
    Score--;
    document.querySelector('.score').textContent = Score;
  }
});
