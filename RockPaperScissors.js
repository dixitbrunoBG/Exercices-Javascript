//On demande au joueur de choisir, la valeur est retournée dans getUserChoice
function getUserChoice() {
    var userInput = prompt('What is your choice ?');
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Erreur, choose either from rock, paper or scissors');
    }
}

//On demande à l'ordinateur de choisir un nb au hasard, la valeur est retournée dans getComputerChoice
function getComputerChoice () {
  var randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
       break;
    case 2:
      return 'scissors';
       break;
    default:
      console.log('Il y a eu un soucis...');
     }
}

//Pour déterminer le vainqueur on écrit les différentes possibilités
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) { /
    return 'The game is a tie';
  } if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return ('The computer won!');
      } else {
        return 'You won!';
      }
     }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return ('The computer won!');
      } else {
        return 'You won!';
      }
     }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return ('The computer won!');
      } else {
        return 'You won!';
      }
     }
    }

/*on lance le jeu : on récupère les valeurs retournées du joueur et de l'ordinateur
et on lance la fonction pour déterminer le vainqueur*/
function playGame() {
  var userChoice = getUserChoice();
  var computerChoice = getComputerChoice();
  console.log('You played: ' + userChoice);
  console.log('The computer played: ' +  computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
