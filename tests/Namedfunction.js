// // --------------- Celsius to Fahrenheit -----------------
// var celsiusToFahrenheit = function (celsius) {
//     return (celsius * 9 / 5) + 32;
// };
// console.log(celsiusToFahrenheit(20));
// // ----------------- Factorial of a number -----------------
// var factorialOfNumber = function (number) {
//     var factorial = 1;
//     for (var i = 2; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// };
// console.log(factorialOfNumber(5));
// // ------------ String contains vowels ----------------
// var stringVowels = function (word) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     word = word.toLowerCase();
//     for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
//         var char = word_1[_i];
//         if (vowels.includes(char)) {
//             return true;
//         }
//     }
//     return false;
// };
// console.log(stringVowels("vowels"));
// // --------------- Check if the year is a leap year -----------
// var isLeapYear = function (year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };
// console.log(isLeapYear(1887));
