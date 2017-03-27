var userQuestion = 'Will I become a werewolf tonight?';
var randomNumber = Math.floor(Math.random() *  7);
var eightBall = '';

switch (randomNumber) {
   case 0:
    eightBall = 'It is clair !';
   break;
  
  case 1:
    eightBall = 'It is certain';
   break;
  case 2:
    eightBall = 'It is decidedly so';
   break;
   case 3:
    eightBall = 'Reply hazy try again';
   break;
   case 4:
    eightBall = 'Cannot predict now';
   break;
    case 5:
    eightBall = 'Don\'t count on it';
   break;
   case 6:
    eightBall = 'My sources say no';
   break;
    case 7:
    eightBall = 'Outlook not so good';
   break;
    case 8:
    eightBall = 'Signs point to yes';
   break;
 }
console.log('Your question was: ' + userQuestion);
console.log('The eight ball answered: ' + eightBall);

