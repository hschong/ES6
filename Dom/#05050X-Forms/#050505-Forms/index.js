let options = ['rock', 'paper', 'scissors'];
let result = ['draw', 'win', 'lose', 'false'];

const getResult = (playerChoice, opponentChoice) => {
  if (playerChoice === opponentChoice) {
    return 'draw';
  }

  switch (playerChoice) {
    case 'rock':
      if (opponentChoice === 'paper') {
        returnValue = 'win';
      } else {
        returnValue = 'lose';
      }
      break;
    case 'paper':
      if (opponentChoice === 'scissors') {
        returnValue = 'win';
      } else {
        returnValue = 'lose';
      }
      break;
    case 'scissors':
      if (opponentChoice === 'paper') {
        returnValue = 'win';
      } else {
        returnValue = 'lose';
      }
      break;
    default:
      returnValue = 'false';
      break;
  }

  return returnValue;
};

let win = 0;
let draw = 0;
let lose = 0;

const updateScore = result => {
  switch (result) {
    case 'winner':
  }
};

const play = playerChoice => {
  let opponentChoice = options[Math.floor(Math.random() * 3)];

  console.log(getResult(playerChoice, opponentChoice));
};
