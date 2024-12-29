// let numbers = [];
// let input;
// while (true) {
//     input = prompt("Enter a number (leave empty to finish): ");
//     if (input === "") break;
//     numbers.push(Number(input));
// }
// console.log(String(numbers));
// -------------------------------------------------------
// 1-Write a function to find the largest element in an array.
// -------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function largestElement(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(largestElement(numbers));
// -------------------------------------------------------
// 2-Write a function to find the smallest element in an array.
// -------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10];
// function smallestElement(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }
// console.log(smallestElement(numbers));
// -------------------------------------------------------
// 3-Write a function to find the sum of all elements in an array.
// -------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10];
// function sumOfElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumOfElements(numbers));
// -------------------------------------------------------
// 4-Write a function to find the average of all elements in an array.
// -------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 16, 0, 7, 8, 9, 10];
// let total = numbers.length;
// function averageOfElements(arr) {
//   let sum = 0;
//   for (let i = 0; i < total; i++) {
//     sum += arr[i];
//   }
//   return sum / total;
// }
// console.log(averageOfElements(numbers));
// -------------------------------------------------------
// 5-Write a function to find the median of all elements in an array.
// -------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 5, 2, 4, 6, 19, 7, 8, 9, 10];
// function medianOfElements(arr) {
//   let total = arr.length;
//   arr = arr.sort((a, b) => a - b);
//   let middle = Math.floor(total / 2);
//   if (total % 2 === 0) {
//     return (arr[middle - 1] + arr[middle]) / 2;
//   } else {
//     return arr[middle];
//   }
// }
// console.log(medianOfElements(numbers));
// -------------------------------------------------------
// 6-Write a function to remove all duplicates from an array.
// -------------------------------------------------------
// let numbers = [1, 2, 4, 4, 5, 6, 5, 2, 4, 6, 19, 7, 8, 19, 10];
// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(removeDuplicates(numbers)); // String(removeDuplicates(numbers));
// -------------------------------------------------------
// 7-Write a function to sort an array in ascending order.
// -------------------------------------------------------
// let numbers = [1, 2, 4, 4, 5, 6, 5, 2, 4, 6, 19, 7, 8, 19, 10];
// function sortAscending(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sortAscending(numbers));
// -------------------------------------------------------
// 8-Write a function to sort an array in descending order.
// -------------------------------------------------------
// let numbers = [1, 2, 4, 4, 5, 6, 5, 2, 4, 6, 19, 7, 8, 19, 10];
// function sortDescending(arr) {
//   return arr.sort((a, b) => b - a);
// }
// console.log(sortDescending(numbers));
// -------------------------------------------------------
// 9-Write a function to shuffle the elements of an array randomly.
// -------------------------------------------------------
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function shuffleArray(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }
// console.log(shuffleArray(numbers));
// -------------------------------------------------------