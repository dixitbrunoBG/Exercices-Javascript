var input = prompt('Tapez un mot de passe :');

function isPasswordValid(input)
{
  if (hasUppercase(input) === true) {
    console.log('Uppercase : The password is valid');
  } 
  if (!hasUppercase(input) === true) {
    console.log('The password needs a capital letter');
  }
  
  if (hasLowercase(input) === true) {
    console.log('Lowercase : The password is valid');
  } 
  if (!hasLowercase(input) === true) {
    console.log('The password needs a lowercase letter');
  }
  
  if (isLongEnough(input) === true) {
    console.log('Length : The password is valid');
  }
  if (!isLongEnough(input) === true) {
    console.log('The password needs at least 8 characters');
  }
  
	if (hasSpecialCharacter(input) === true) {
    console.log('Special Character : The password is valid');
  } else {
    console.log('The password needs at least 1 special character')
  }
  /*if (!hasSpecialCharacter(input) === true) {
    console.log('The password needs at least 1 special character');*/
  }
  
	if (hasUppercase(input) && hasLowercase(input) && isLongEnough(input) && hasSpecialCharacter(input)) {
    console.log('All criteria : The password is valid !')
  } else {
    console.log('Le mdp n\'est pas assez sur... !');
  }

 function hasUppercase(input)
  {
    for (var i = 0; i < input.length ; i++) {
      if (input[i] === input[i].toUpperCase()) {
        return true;
      }
    }
  }
  
  function hasLowercase(input)
  {
    for (var i = 0; i < input.length ; i++) {
      if (input[i] === input[i].toLowerCase()) {
        return true;
      }
    }
  }
  
  function isLongEnough(input)
  {
    for (var i = 0; i < input.length ; i++) {
      if (input[i] <= 8 ) {
        return true;
      }
    }
  }
  
    function hasSpecialCharacter(input)
  {
    var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
    for (var i = 0; i < input.length; i++) {
      for (var j = 0; j < specialCharacters.length; j++) {
         if (input[i] === specialCharacters[j]) {
            return true;
      }
    }
  }
}
isPasswordValid(input);