var input = prompt('Tapez une phrase que vous souhaitez traduire dans la langue des baleines: ');
var vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (var i = 0; i < input.length; i++) {
  for (var j = 0; j <vowels.lenght; j++) {
   
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
    resultArray.push(input[i]);
  }
}

console.log('Votre phrase en baleine se dit: ' + resultArray.join('').toUpperCase() + ' !');
