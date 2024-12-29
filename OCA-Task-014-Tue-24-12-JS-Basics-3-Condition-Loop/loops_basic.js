// async function main() {
//     const name = await prompt('What is your name? ');
//     console.log(`Hello, ${name}!`);

//     const age = await prompt('How old are you? ');
//     console.log(`You are ${age} years old.`);
// }

// main();

// 1- Write a program that prints numbers from 1 to 10 using a for loop.
// for (let num = 1; num < 11; num++) {
//     console.log(num)
// }

// 2-Write a program that prints the even numbers from 1 to 10 using a for loop.
// for (let num = 1; num < 11; num++) {
//     if (num % 2 == 0) {
//         console.log(num);
//     }
// }

// 3- Write a program that prints the odd numbers from 1 to 10 using a while loop.
// let num = 1;
// while (num <= 10) {
//     if (num % 2 != 0) {
//         console.log(num)
//     }
//     num += 1
// };

// 4- Write a program that prints the multiplication table of a number entered by the user using a for loop.
// let userNum = prompt("Write a number? ");
// for (let num = 1; num < 11; num++) {
//     multiplied = num * userNum
//     console.log(`${userNum} * ${num} = ${multiplied}`)
// }

// 5- Write a program that calculates the sum of numbers from 1 to 100 using a while loop.
// let num = 1;
// let counter = 1;
// while (counter < 100) {
//     counter += 1
//     num += counter
// }
// console.log(num)

// 6- Write a program that calculates the factorial of a number entered by the user using a for loop.
// let num = 5; // prompt("Enter a number: ");
// let i = num-1
// for (i; i > 0; i--) {
//     num *= i;
// }
// console.log(num);

// 7- Write a program that prints the Fibonacci series up to a certain number entered by the user using a while loop.
// let userNum = 20; // prompt("Enter a number: ")
// let num1 = 0;
// let num2 = 1;
// let fibonacciSeries = "";
// for (; num1 < userNum; num1 += num2) {
//     num2 += num1;
//     fibonacciSeries += `${num1}, ${num2}`;
//     if (num1+num2 <= userNum) {
//         fibonacciSeries += `, `;
//     }
// }
// console.log(fibonacciSeries);
// let userNumber =  8;
// let num1 = 0;
// let num2 = 1;
// let fseries = "0, 1"
// for(i = 1; i < userNumber; i += i) {
//     num1 += num2;
//     if (num1 <= userNumber) {fseries += `, ${num1}`}
//     num2 += num1;
//     if (num2 < userNumber) {fseries += `, ${num2}`}
// }
// console.log(fseries)
// let userNumber =  8;
// let num1 = 0;
// let num2 = 1;
// let Fseries = ""
// for(i = 1; i <= userNumber; i += i) {
//     if (num1 <= userNumber && i != 1) {
//         Fseries += `, ${num1}`
//     } else if (i == 1) {
//         Fseries += `${num1}`
//     }
//     num1 += num2;
//     if (num2 <= userNumber) {Fseries += `, ${num2}`}
//     num2 += num1;
// }
// console.log(Fseries)

// 8- Write a program that prints the reverse of the following numbers:
//5 , 10 , 15 , 20
// using a while loop.

// let numbers = [5 , 10 , 15 , 20]; // prompt
// let i = numbers.length;
// while (i > 0) {
//     i--
//     console.log(numbers[i]);
// }

window.onload = function () {
  document.querySelector();
};