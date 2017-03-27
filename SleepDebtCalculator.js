/* We are going to write a calculator that calculates sleep debt.
The program will ask a user how many hours of sleep is ideal each night,
then compare that to the actual hours they slept each night of the last week.
Then, it will calculate the amount of hours over or under they are to their sleep goal.*/

/* Asking the user how many hours of sleep they got each night of the week.
You can declare a function that uses a prompt to ask the user
how many hours they slept on Monday night, then on Tuesday night, etc.
Instead of writing 7 functions (one for each day of the week),
let's write one function with a parameter for the day.*/

/* Get the total sleep hours that the user actually slept
Get the ideal sleep hours that the user prefers
Calculate the sleep debt, if any.*/

function getSleepHours(day) {
  var hours = prompt('Combien d\'heures avez-vous dormi ' + day + '?');
  return Number(hours);
}

function getActualSleepHours() {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

function getIdealSleepHours() {
  var idealSleepHours = prompt('Quelle est la duree ideale de sommeil par nuit?');
  return idealSleepHours * 7;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You have the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You have more sleep than needed with an extra of  ' + (actualSleepHours - idealSleepHours) + ' hours!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You have less sleep than needed with a lack of  ' + (idealSleepHours - actualSleepHours) + ' hours!');
}
 }

calculateSleepDebt();
