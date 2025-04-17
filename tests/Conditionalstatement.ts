// ------------------ Odd or Even Program ------------------
import promptSync from 'prompt-sync'; 
const prompt = promptSync();

const input: string = prompt("Enter a number: ");
const number: number = parseInt(input);

if (isNaN(number)) {
  console.log("Please enter a valid number.");
} else if (number % 2 === 0) {
  console.log(`${number} is even.`);
} else {
  console.log(`${number} is odd.`);
}

// ------------------- Palindrome Program --------------------
import promptSync2 from 'prompt-sync'; // To avoid conflict with 'prompt'
const prompt2 = promptSync2();

const inputString: string = prompt2("Enter a string: ");
let reversed: string = "";

for (let i = inputString.length - 1; i >= 0; i--) {
  reversed += inputString[i];
}

if (reversed === inputString) {
  console.log("The given string is a palindrome");
} else {
  console.log("The given string is not a palindrome");
}
