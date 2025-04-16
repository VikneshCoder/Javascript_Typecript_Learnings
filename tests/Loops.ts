// ----------------Fibonacci Series --------------------------
let a: number = 0;
let b: number = 1;
const n: number = 10;
console.log(a);
for (let i = 2; i < n; i++) {
    console.log(b);
    const add: number = a + b;
    a = b;
    b = add;
}


// --------------Prime Numbers from 1 to 100 -------------------------------
const number: number = 100;
let primeNumbers: number[] = [];

for (let i = 2; i <= number; i++) {
    let isPrime: boolean = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers.push(i);
    }
}
console.log(`The list of prime numbers between 1 to 100 ${primeNumbers}`);


// -------------Reverse a String -----------------------
const reverseTheString: string = "The string need to be reverse";
let finalString: string = "";

for (let i = 0; i < reverseTheString.length; i++) {
    finalString = reverseTheString[i] + finalString;
}
console.log(`The reverse of the given string ${finalString}`);


// ------------Factorial of given number -------------------
const factorialNumber: number = 5;
let factorial: number = 1;

for (let i = 2; i <= factorialNumber; i++) {
    factorial *= i;
}
console.log(`The factorial of the given number is ${factorial}`);


// ------------------- Multiplication Table -----------------
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${j} * ${i} = ${j * i}`);
    }
}
