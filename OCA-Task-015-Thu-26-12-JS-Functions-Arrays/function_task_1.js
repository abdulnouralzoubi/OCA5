// let numbers = [];
// let input;
// while (true) {
//     input = prompt("Enter a number (leave empty to finish): ");
//     if (input === "") break;
//     numbers.push(Number(input));
// }
// console.log(String(numbers));
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
// -------------------------------------------------------
// function tellFortune(childNum, partnerName, geoLocation, jobTitle) {
//   return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${childNum} kids`;
// }

// console.log(tellFortune(3, 'Alice', 'Jordan', 'software engineer'));
// -------------------------------------------------------
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
// -------------------------------------------------------
// function calculateDogAge(puppyAge) {
//   return `Your doggie is ${puppyAge * 7} years old in dog years!`;
// }
// console.log(calculateDogAge(1));
// -------------------------------------------------------
/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
// -------------------------------------------------------
// function calculateSupply(age, amountPerDay) {
//   const maxAge = 100;
//   const totalAmount = (maxAge - age) * 365 * amountPerDay;
//   return `You will need ${totalAmount} cups of tea to last you until the ripe old age of 100`;
// }
// console.log(calculateSupply(30, 3));

// -------------------------------------------------------
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
// -------------------------------------------------------
// function greet(name) {
//   return `Hello ${name}`;
// }
// console.log(greet('Adam'));

// -------------------------------------------------------

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
// -------------------------------------------------------
// function double(cat) {
//   return 2 * cat;
// }

// function double(7) {
//   return 2 * 7;
// }

// function double('7') {
//   return 2 * 'x';
// }

// -------------------------------------------------------

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
// -------------------------------------------------------
// function double1(x) {
//   return 2 * x ;
// }

// function double2(x) {
//   return 2 * x;
// }

// function double3(x) {
//   return 2 * x;
// -------------------------------------------------------

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
// -------------------------------------------------------
// function cube(num) {
//   return num ** 3;
// }
// console.log(cube(4));
// -------------------------------------------------------

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
// -------------------------------------------------------
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiply(3, 4));
// -------------------------------------------------------

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
// -------------------------------------------------------
// function canIGetADrivingLicense(age) {
//   if (age >= 20) {
//     return 'yes you can';
//   } else {
//     return `please come back after ${20 - age} years to get one`;
//   }
// }
// console.log(canIGetADrivingLicense(21));
// -------------------------------------------------------

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
// -------------------------------------------------------
// let str1 = 'tree';
// let str2 = 'clue';
// function sameLength(str1, str2) {
//   return str1.length === str2.length;
// }
// console.log(sameLength('tree', 'clue'));

// -------------------------------------------------------

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
// -------------------------------------------------------
// function largerNumber(num1, num2) {
//   return num1 > num2 ? num1 : num2;
//   return Math.max(num1, num2);
// }
// console.log(largerNumber(5, 6));
// console.log(largerNumber(5, 3));
// -------------------------------------------------------

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
// -------------------------------------------------------
// function smallerNumber(num1, num2, num3) {
//   return num1 < num2 && num1 < num3 ? num1 : num2 < num1 && num2 < num3 ? num2 : num3;
//   return Math.min(num1, num2, num3);
// }
// console.log(smallerNumber(8, 6, 7));

// -------------------------------------------------------

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by
*/
// -------------------------------------------------------
// function shorterString(str1, str2, str3, str4, str5) {
//   // return [str1, str2, str3, str4, str5].reduce((shortest, current) => current.length < shortest.length ? current : shortest);
//   return [str1, str2, str3, str4, str5].sort((a, b) => a.length - b.length)[0];
//   // let shortest = str1;
//   // for (let i = 1; i < arguments.length; i++) {
//   //   if (arguments[i].length < shortest.length) shortest = arguments[i];
//   // }
//   // return shortest;
// }
// console.log(shorterString("air","tr","car","github","by"));
// -------------------------------------------------------

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
// -------------------------------------------------------
// function longerString(str1, str2, str3, str4) {
//   let longest = str1;
//   // for (let i = 1; i < arguments.length; i++) {
//   //   if (arguments[i].length > longest.length) longest = arguments[i];
//   // }
//   // return longest;
//   return [str1, str2, str3, str4].reduce((a, b) => a.length >= b.length ? a : b);
// }
// console.log(longerString("air", "school", "car", "github"));
// -------------------------------------------------------

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
// -------------------------------------------------------
// function isEven(num) {
//   return num % 2 == 0;
// }
// console.log(isEven(2))
// -------------------------------------------------------

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
// -------------------------------------------------------
// function isOdd(num) {
//   return num % 2 != 0;
// }
// console.log(isOdd(4));
// console.log(isOdd(5));
// -------------------------------------------------------

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
// -------------------------------------------------------
// function positive(num) {
//   return num >= 0 ? num : num * -1;
//   // return Math.abs(num)
// }
// console.log(positive(4));
// console.log(positive(-5));

// -------------------------------------------------------

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
// -------------------------------------------------------
// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
//   // return `${firstName} ${lastName}`;
// }
// console.log(fullName("Adam", "McCallen"));
// console.log(fullName("Alex", "Mercer"));
// -------------------------------------------------------

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
// -------------------------------------------------------
// let num1 = 1, num2 = 2, num3 = 3, num4 = 4, num5 = 5;
// function average(num1, num2, num3, num4, num5) {
//   return (num1 + num2 + num3 + num4 + num5) / 5;
// }
// console.log(average(num1, num2, num3, num4, num5));
// -------------------------------------------------------
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
// -------------------------------------------------------
// function randomNumber() {
//   return Math.random().toFixed(4);
// }
// console.log(randomNumber());
// -------------------------------------------------------
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
// -------------------------------------------------------
// function randomBetweenNumbers(num1, num2, isInteger = false) {
//   const randomNum = Math.random() * (num2 - num1) + num1;
//   return isInteger ? Math.floor(randomNum) : randomNum.toFixed(4);
// }
// console.log(randomBetweenNumbers(1, 8));
// console.log(randomBetweenNumbers(1, 8, true));
// -------------------------------------------------------
/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alphabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
// -------------------------------------------------------
// function scoreInUniversity(score) {
//   switch (true) {
//     case score >= 95:
//       return '"A"';
//     case score >= 85:
//       return '"B"';
//     case score >= 70:
//       return '"C"';
//     case score >= 50:
//       return '"D"';
//     case score >= 0:
//       return '"F"';
//   }
// }
// console.log(scoreInUniversity(96));
// console.log(scoreInUniversity(3));
// console.log(scoreInUniversity(71));
// -------------------------------------------------------
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
// -------------------------------------------------------
// let count = 0;
// function counter() {
//   return ++count;
// }
// // let input;
// // while (true) {
// //   input = prompt('Do you want to continue (leave empty to continue)?');
// //   if (input !== '') break;
// //   console.log(counter());
// // }
// console.log(counter());
// -------------------------------------------------------
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
// -------------------------------------------------------
// let count = 0;
// function counter() {
//   return ++count;
// }
// function resetCounter() {
//   const prevCount = count;
//   count = 0;
//   return `${prevCount} and the counter reset now`;
// }
// // let input;
// // while (true) {
// //   input = prompt('Do you want to continue (leave empty to continue)?');
// //   if (input !== '') break;
// //   console.log(counter());
// // }
// console.log(counter());
// -------------------------------------------------------
