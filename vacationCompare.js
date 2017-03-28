
	/*Let's say that you and a friend would like to go on vacation together.
	You've both made arrays of your favorite places
	and you want to compare to see if any places match.
	 */

var myPlaces = ['Madrid', 'Lisbonne', 'Rome'];
var friendPlaces = ['Berlin', 'Vienne', 'Lisbonne'];

for (var i = 0; i < myPlaces.length; i++) {
  
  for(var j = 0; j < friendPlaces.length; j++) {
  	if (myPlaces[i] === friendPlaces[j]) {
      console.log('Match destination: ' + myPlaces[i] )
    }
	}
}