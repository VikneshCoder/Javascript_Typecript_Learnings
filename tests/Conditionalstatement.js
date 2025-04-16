// Write a program to check whether the given number is odd or even.
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

// -------------------Palindrome-----------------------------

// Given string is a palindrome are not

import PromptSync from "prompt-sync";
const prompt = PromptSync();
const input: string = prompt("Enter a string: ");

let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}

// Check if it's a palindrome
if (reversed === input) {
  console.log("The given string is a palindrome");
} else {
  console.log("The given string is not a palindrome");
}
