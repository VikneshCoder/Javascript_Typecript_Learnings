// // ----------------Fibonacci Series --------------------------
// var a = 0;
// var b = 1;
// var n = 10;
// console.log(a);
// for (var i = 2; i < n; i++) {
//     console.log(b);
//     var add = a + b;
//     a = b;
//     b = add;
// }
// // --------------Prime Numbers from 1 to 100 -------------------------------
// var number = 100;
// var primeNumbers = [];
// for (var i = 2; i <= number; i++) {
//     var isPrime = true;
//     for (var j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primeNumbers.push(i);
//     }
// }
// console.log(`The list of prime numbers between 1 to 100 ${primeNumbers}`);
// // -------------Reverse a String -----------------------
// var reverseTheString = "The string need to be reverse";
// var finalString = "";
// for (var i = 0; i < reverseTheString.length; i++) {
//     finalString = reverseTheString[i] + finalString;
// }
// console.log(`The reverse of the given string ${finalString}`);
// // ------------Factorial of given number -------------------
// var factorialNumber = 5;
// var factorial = 1;
// for (var i = 2; i <= factorialNumber; i++) {
//     factorial *= i;
// }
// console.log(`The factorial of the given number is ${factorial}`);
// // ------------------- Multiplication Table -----------------
// for (var i = 1; i <= 10; i++) {
//     for (var j = 1; j <= 10; j++) {
//         console.log("".concat(j, " * ").concat(i, " = ").concat(j * i));
//     }
// }
