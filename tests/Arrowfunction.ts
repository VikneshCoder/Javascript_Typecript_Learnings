// --------------- Arrow function: Square of the numbers ----------------
const listOfNumbers: number[] = [1, 2, 4, 6, 90];
const squareOfTheNumbers = (): number[] => listOfNumbers.map((num: number) => num * 2);
console.log(`The square of the numbers is ${squareOfTheNumbers()}`);


// ------------- Filter: Even numbers from an array ----------------------
const numbersList: number[] = [2, 3, 5, 6, 7, 8];
const evenNumbers = (): number[] => numbersList.filter((num: number) => num % 2 === 0);
console.log(`The even numbers from the list are ${evenNumbers()}`);


// ------------------- Average of list of numbers ------------------------
const averageList: number[] = [34, 56, 67, 89, 34, 45];
const averageOfListOfNumbers = (): number => 
  averageList.reduce((a: number, b: number) => a + b, 0) / averageList.length;

console.log(`The average of the numbers in the list is ${averageOfListOfNumbers().toFixed(2)}`);


// ------------------- Longest string in an array ------------------------
const strings: string[] = ["The", "longest", "string", "in", "the", "array"];
const longestString: string = strings.reduce((a: string, b: string) => 
  a.length >= b.length ? a : b
);
console.log(`The longest string is "${longestString}"`);


// ------------------- Square each number in array ------------------------
const squareInput: number[] = [1, 2, 3, 4, 5];
const squaredArray: number[] = squareInput.map((num: number) => num ** 2);
console.log(`The squares are ${squaredArray}`);
