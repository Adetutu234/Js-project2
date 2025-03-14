//  String Manipulation Functions: 

//1. A function reversing a string
// var string = "My name is ola"
// function stringLength(params) {
//     for (i=string.length; i>=0; i--) {
//         console.log(string[i]);
//     }
// }stringLength();


//2. A function counting the number of characters in a string

// var string = "My name is ola"
// function stringLength(params) {
//     for (i = 0; i < string.length; i++) {
//     }console.log(i);
// }stringLength()

// OR

// var string = "My name is ola"
// function stringLength(params) {
//     console.log(string.length);
// }stringLength()

// 3.A  function that capitalizes the first letter of each word in a sentence.

// var string = "My name is ola"
// function capString(params) {
//     let eachLetter = string.split(" ")
//     for (let i = 0; i < eachLetter.length; i++) {
//     eachLetter[i] = eachLetter[i][0].toUpperCase() + eachLetter[i].substring(1)
//     }
//     let capitalizedString = eachLetter.join(" ")
//     console.log(capitalizedString);
// }capString()


//    Array Functions:
// 1. A functions to find the maximum and minimum values in an array of numbers.

// Get the minimum number
// function setMini(a) {
//     let mini = Infinity;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]< mini) {
//             mini = a[i]
//         }
//     }
//     return mini;
// }

// // Get the maximum number
// function setMaxi(a) {
//     let maxi = -Infinity;
//     for (let i = 0; i < a.length; i++) {
//         if (a[i]< maxi) {
//             maxi = a[i]
//         }
//     }
//     return maxi;
// }

// function maxMin(a) {
//     return "Minimum Number is:" + setMini(a) + "\nMaximum Number is:" + setMaxi(a) 
    
// }console.log(maxMin([4,9,6,5,2,3,1,25]));


// 2. A function that calculates the sum of all elements in an array.
// var sum = 0;
// function sumArr(array) {
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return (sum)
// }
// console.log(sumArr([8,4,10]));

// 3. A function that filters out elements from an array based on a given condition. 
// function filterarr(arr) {
//     let newArr = arr.filter(above30)
//     function above30(number) {
//         return number < 20;
//     }
//     return newArr
// }console.log(filterarr([20,40,2,10]));


// Mathematical Functions:
// 1. A function to calculate the factorial of a given number.
// function factorial(number) {
//     for (i=number; i>0;i--) {
//     for (a=i; a>0;a--) {
//         console.log(a);
//         }
//     }
// }factorial(5)

// 2. A function to check if a number is a prime number
// function isPrime(num) {
//     if (num < 2) {
//         return false; // Prime numbers start from 2
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; // If divisible, not prime
//     }
//     return true;
// }
// console.log(isPrime(1));

// 3. A function to generate fibonacci sequence up to a given number

// function generateFibonacci(n) {
//     if (n <= 0) return []; // Handle invalid cases
//     if (n === 1) return [0]; // Base case

//     let fib = [0, 1];

//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i - 1] + fib[i - 2]);
//     }
//     return fib;
// }console.log(generateFibonacci(10));