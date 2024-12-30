// console.log('Here is : ', 'array')

/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/
// ----------------------------------------
// [1, 7, 9, 45]
// ["Str", "alex", "moh"]
// ['the', 'fox', 'over', 'lazy', 'dog']
// ----------------------------------------
/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
// ----------------------------------------
// var fruits=["Tomato","Banana","Watermelon"]
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i], i)
// }
// ----------------------------------------
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// ----------------------------------------
// var favoriteFood = ['Butter Chicken', 'Shakeria', 'Pizza', 'Pasta', 'Fettuccine'];
// var favoriteSport = ['Tennis Table', 'Swimming', 'Ice Hockey'];
// var favoriteMovie = ['Hunter Killer', 'New World', 'Time', 'Code 8'];
// ----------------------------------------
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
// ----------------------------------------
// function firstOfArray(arr) {
//     return arr[0];
// }
// console.log(firstOfArray([1,4,5]));
// console.log(firstOfArray(["t","u","g","x"]));
// ----------------------------------------
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
// ----------------------------------------
// function lastOfArray(arr) {
//     return arr[arr.length-1];
// }
// console.log(lastOfArray([1,4,5]));
// console.log(lastOfArray(["t","u","g","x"]));
// ----------------------------------------
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
// ----------------------------------------
// var array = [0,5,7,9];
// array.push(10);
// array.push(11);
// array.shift()
// array.shift()
// array.shift()
// array.unshift(8)
// array.unshift(6)
// array.unshift(4)
// array.unshift(3)
// array.unshift(1)
// array.pop();
// console.log(array)
// ----------------------------------------
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
// ----------------------------------------
// array2.push(8) = [5,9,-7,3.5] // [5,9,-7,3.5,8]
// array2.unshift(1) = [5,9,-7,3.5] // [1, 5,9,-7,3.5]
// array2.shift() = [5,9,-7,3.5] // [9,-7,3.5]
// array2.pop() = [5,9,-7,3.5] // [5,9,-7]
// ----------------------------------------
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
// ----------------------------------------
// function middleOfArray(arr) {
//     let middle = Math.floor(arr.length / 2);
//     let tot = arr.length;
//     if (tot % 2 !== 0) {
//         return arr[middle]
//     } else {
//         return (`${arr[middle - 1]} and ${arr[middle]}`)
//     }
// }
// console.log(middleOfArray([1,4,5]));
// console.log(middleOfArray(["t","u","g","x"]));
// ----------------------------------------
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
// ----------------------------------------
// var animals = ['cat', 'ele', 'bird'];
// animals[0] = 'zebra';
// animals[1] = 'elephant';
// animals.pop()
// console.log(animals)
// var nums= [1,2,3,8,9];
// nums[0] = 5;
// nums[1] = -22;
// nums[2] = 3.5;
// nums[3] = 44;
// nums[4] = 98;
// nums[5] = 44;
// console.log(nums);
// ----------------------------------------
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex:  => 8
Ex:  => 2
Ex:  => 9

**try more cases by your self
*/
// ----------------------------------------
// function indexOfArray(array, index) {
// 	return array[index];
// }
// var nums= [1,2,3,8,9];
// console.log(indexOfArray(nums,3));
// console.log(indexOfArray(nums,1));
// console.log(indexOfArray(nums,4));
// ----------------------------------------
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
// ----------------------------------------
// function arrayExceptLast(array) {
// 	// array.pop()
// 	return array.slice(0, array.length-1);
// }
// var nums= [1,2,3,8,9];
// console.log(arrayExceptLast(nums));
// ----------------------------------------
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
// ----------------------------------------
// function addToEnd(array, value) {
// 	// let added = array;
// 	// added.push(value)
// 	array.push(value);
// 	return array;
// }
// var nums = [1,2,3,8,9];
// console.log(addToEnd(nums, 55));
// console.log(addToEnd(nums, "okay"));
// ----------------------------------------
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// ----------------------------------------
// function sumArrayF(array) {
// 	let sum = 0;
// 	for (i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}
// 	return sum;
// }
// function sumArrayW(array) {
// 	let sum = 0;
// 	let i = 0;
// 	while (i < array.length) {
// 		sum += array[i];
// 		i++;
// 	}
// 	return sum;
// }
// var nums= [1,2,3,8,9];
// var nums2= [1,7,5,8,9];
// console.log(sumArrayF(nums));
// console.log(sumArrayW(nums));
// console.log(sumArrayF(nums2));
// console.log(sumArrayW(nums2));
// ----------------------------------------
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// ----------------------------------------
// function minInArrayF(array) {
// 	let min = array[0];
// 	for (i = 1; i < array.length; i++) {
// 		if (array[i] < min) {min = array[i]}
// 	}
// 	return min;
// };
// function minInArrayW(array) {
// 	let min = array[0];
// 	let i = 1;
// 	while (i < array.length) {
// 		if (array[i] < min) {min = array[i]}
// 		i++
// 	}
// 	return min;
// };
// nums= [1,2,3,0,8,9];
// console.log(minInArrayF(nums));
// console.log(minInArrayW(nums));
// ----------------------------------------
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// ----------------------------------------
// function removeFromArrayF(array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//       array.splice(i, 1);
//     }
//   }
//   return array;
// }
// function removeFromArrayW(array, element) {
//   let i = 0
//   while (i < array.length) {
//     if (array[i] === element) {
//       array.splice(i, 1);
//     }
//     i++
//   }
//   return array;
// }
// var nums= [1,2,3,8,9];
// console.log(removeFromArrayF(nums, 8));
// console.log(removeFromArrayW(nums, 8));
// ----------------------------------------
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// ----------------------------------------
// function oddArrayF(array) {
//   let odd = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       odd.push(array[i]);
//     }
//   }
//   return odd;
// }
// function oddArrayW(array) {
//   let odd = [];
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] % 2 !== 0) {
//       odd.push(array[i]);
//     }
//     i++;
//   }
//   return odd;
// }
// var nums = [1, 2, 3, 8, 9];
// console.log(oddArrayF(nums));
// console.log(oddArrayW(nums));
// ----------------------------------------
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// ----------------------------------------
// function aveArrayF(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return Math.floor((sum / array.length) * 10) / 10;
// }
// function aveArrayW(array) {
//   let sum = 0;
//   let i = 0;
//   while (i < array.length) {
//     sum += array[i];
//     i++;
//   }
//   return Math.floor((sum / array.length) * 10) / 10;
// }
// var nums = [1, 2, 3, 8, 9];
// var nums2 = [1, 2, 3, 8, 9, 77];
// console.log(aveArrayF(nums));
// console.log(aveArrayW(nums));
// console.log(aveArrayF(nums2));
// console.log(aveArrayW(nums2));
// ----------------------------------------
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//--------------------------------------------------------
// function shorterInArrayF(array) {
//   let shortest = array[0];
//   for (i = 0; i < array.length; i++) {
//     if (array[i].length < shortest.length) {
//       shortest = array[i];
//     }
//   }
//   return shortest;
// }
// function shorterInArrayW(array) {
//   let shortest = array[0];
//   let i = 0;
//   while (i < array.length) {
//     if (array[i].length < shortest.length) {
//       shortest = array[i];
//     }
//     i++;
//   }
//   return shortest;
// }
// var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
// console.log(shorterInArrayF(strings));
// console.log(shorterInArrayW(strings));
//--------------------------------------------------------
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//--------------------------------------------------------
// function repeatCharF(str, char) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// function repeatCharW(str, char) {
//   let count = 0;
//   let i = 0;
//   while (i < str.length) {
//     if (str[i] === char) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// }
// var string= "alex mercer madrasa rashed2 emad hala"
// console.log(repeatCharF(string, "a"));
// console.log(repeatCharW(string, "a"));
// console.log(repeatCharF(string, "z"));
// console.log(repeatCharW(string, "z"));
//--------------------------------------------------------

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//--------------------------------------------------------
// let strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
// function evenIndexOddLengthF(array) {
//   let odd = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i % 2 === 0 && array[i].length % 2 !== 0) {
//       odd.push(array[i]);
//     }
//   }
//   return odd;
// }
// function evenIndexOddLengthW(array) {
//   let odd = [];
//   let i = 0;
//   while (i < array.length) {
//     if (i % 2 === 0 && array[i].length % 2 !== 0) {
//       odd.push(array[i]);
//     }
//     i++;
//   }
//   return odd;
// }
// console.log(evenIndexOddLengthF(strings));
// console.log(evenIndexOddLengthW(strings));
//--------------------------------------------------------
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//--------------------------------------------------------
// let nums = [44, 5, 4, 3, 2, 10];
// function powerElementIndexF(array) {
//   let power = [];
//   for (let i = 0; i < array.length; i++) {
//     power.push(array[i] ** i);
//   }
//   return power;
// }
// function powerElementIndexW(array) {
//   let power = [];
//   let i = 0;
//   while (i < array.length) {
//     power.push(array[i] ** i);
//     i++;
//   }
//   return power;
// }
// console.log(powerElementIndexF(nums));
// console.log(powerElementIndexW(nums));
//--------------------------------------------------------
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
//--------------------------------------------------------
// let nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
// function evenNumberEvenIndexF(array) {
//   let even = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0 && i % 2 === 0) {
//       even.push(array[i]);
//     }
//   }
//   return even;
// }
// function evenNumberEvenIndexW(array) {
//   let even = [];
//   let i = 0;
//   while (i < array.length) {
//     if (array[i] % 2 === 0 && i % 2 === 0) {
//       even.push(array[i]);
//     }
//     i++;
//   }
//   return even;
// }
// console.log(evenNumberEvenIndexF(nums));
// console.log(evenNumberEvenIndexW(nums));
//--------------------------------------------------------
