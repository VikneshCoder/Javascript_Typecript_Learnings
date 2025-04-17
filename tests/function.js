// // ------------------ Area of the circle -----------------------
// function areaOfTheCircle(radius) {
//     return Math.PI * Math.pow(radius, 2);
// }
// console.log(areaOfTheCircle(7));
// // ---------------- Check a number: positive, negative, or zero ----------------------
// function checkANumber(number) {
//     if (isNaN(number)) {
//         console.log("Not a number");
//     }
//     else if (number < 0) {
//         console.log("The given number ".concat(number, " is negative"));
//     }
//     else if (number > 0) {
//         console.log("The given number ".concat(number, " is positive"));
//     }
//     else {
//         console.log("The given number ".concat(number, " is Zero"));
//     }
// }
// checkANumber(20);
// // ------------------- Sum of an array --------------------------
// function sumOfTheArray(listOfNumbers) {
//     var sum = 0;
//     for (var _i = 0, listOfNumbers_1 = listOfNumbers; _i < listOfNumbers_1.length; _i++) {
//         var number = listOfNumbers_1[_i];
//         sum += number;
//     }
//     return sum;
// }
// var list = [10, 54, 78, 63, 95];
// console.log(sumOfTheArray(list));
// // --------------- Maximum value in an array --------------------
// function maxValueInAnArray(values) {
//     var largestNumber = values[0];
//     for (var i = 1; i < values.length; i++) {
//         if (values[i] > largestNumber) {
//             largestNumber = values[i];
//         }
//     }
//     return largestNumber;
// }
// var values = [10, 54, 78, 63, 95];
// console.log(maxValueInAnArray(values));
// // ----------- Reverse the words in the given string -----------------
// function reverseTheWord(sentence) {
//     var words = sentence.split(" ");
//     var reversedWords = [];
//     for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
//         var word = words_1[_i];
//         var reversed = '';
//         for (var i = word.length - 1; i >= 0; i--) {
//             reversed += word[i];
//         }
//         reversedWords.push(reversed);
//     }
//     return reversedWords.join(" ");
// }
// var sentence = 'The given word is not reversed';
// console.log(reverseTheWord(sentence));
