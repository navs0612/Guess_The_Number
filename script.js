'use strict';

let scoreValue = 20,
  highscore = 0;
let generatedNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(generatedNumber);

document.querySelector('.check').addEventListener('click', () => {
  let enteredValue = Number(document.querySelector('.guess').value);
  const display = message =>
    (document.querySelector('.message').textContent = message);

  if (!enteredValue) {
    display('Enter Something!!');
    document.querySelector('.message').style.color = 'red';
  } else if (enteredValue === generatedNumber) {
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = generatedNumber;
    document.querySelector('.message').innerHTML =
      "<em>Yay!! You're correct<em>";
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (scoreValue > highscore) {
      highscore = scoreValue;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (enteredValue !== generatedNumber) {
    if (scoreValue > 1) {
      document.querySelector('.message').innerHTML = `<em>Your guess is ${
        enteredValue > generatedNumber ? 'high' : 'low'
      } !!<em>`;
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').innerHTML =
        '<em>You lost Plz Re-Start!!<em>';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  scoreValue = 20;
  generatedNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

// const changes = content => {
//   if (scoreValue > 1) {
//     document.querySelector('.message').innerHTML = '<em>' + content + '<em>';
//     scoreValue--;
//     document.querySelector('.score').textContent = scoreValue;
//   } else {
//     document.querySelector('.message').innerHTML =
//       '<em>You lost Plz Re-Start!!<em>';
//   }
// };
