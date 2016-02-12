/*
Charpter 3
*/

//// Minimum
var myMin = function(numA, numB) {
	if (numA < numB)
		return numA;
	else
		return numB;
}

// console.log(myMin(0, -10));


//// Recursion
var isEven = function(number) {
  if (number == 0)
    return true;
  else if (number == 1)
    return false;
  else {
  	if (number < 0)
  		return isEven(number+2);
  	else
  		return isEven(number-2)
  }
};

// console.log(isEven(50));
// → true
// console.log(isEven(75));
// → false
// console.log(isEven(-1));
// → ??


//// Bean counting
var countBs = function(world) {
  var counterB = 0;
  for (i = 0; i < world.length; i++) {
    if (world.charAt(i) == "B") {
      counterB++;
    }
  }
  return counterB;
};

console.log(countBs("BBC"));
// 2


var countChar = function(world, letter) {
  var counterLetter = 0;
  for (i = 0; i < world.length; i++) {
    if (world.charAt(i) == letter) {
      counterLetter++;
    }
  }
  return counterLetter;
};

console.log(countChar("kakkerlak", "k"));
// → 4











