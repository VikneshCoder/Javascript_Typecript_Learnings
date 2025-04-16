// --------------- Arrow function: Square of the numbers ----------------
var listOfNumbers = [1, 2, 4, 6, 90];
var squareOfTheNumbers = function () { return listOfNumbers.map(function (num) { return num * 2; }); };
console.log("The square of the numbers is ".concat(squareOfTheNumbers()));
// ------------- Filter: Even numbers from an array ----------------------
var numbersList = [2, 3, 5, 6, 7, 8];
var evenNumbers = function () { return numbersList.filter(function (num) { return num % 2 === 0; }); };
console.log("The even numbers from the list are ".concat(evenNumbers()));
// ------------------- Average of list of numbers ------------------------
var averageList = [34, 56, 67, 89, 34, 45];
var averageOfListOfNumbers = function () {
    return averageList.reduce(function (a, b) { return a + b; }, 0) / averageList.length;
};
console.log("The average of the numbers in the list is ".concat(averageOfListOfNumbers().toFixed(2)));
// ------------------- Longest string in an array ------------------------
var strings = ["The", "longest", "string", "in", "the", "array"];
var longestString = strings.reduce(function (a, b) {
    return a.length >= b.length ? a : b;
});
console.log("The longest string is \"".concat(longestString, "\""));
// ------------------- Square each number in array ------------------------
var squareInput = [1, 2, 3, 4, 5];
var squaredArray = squareInput.map(function (num) { return Math.pow(num, 2); });
console.log("The squares are ".concat(squaredArray));
