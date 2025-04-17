// --------------- Celsius to Fahrenheit -----------------
let celsiusToFahrenheit = function(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  
  console.log(celsiusToFahrenheit(20));
  
  // ----------------- Factorial of a number -----------------
  let factorialOfNumber = function(number: number): number {
    let factorial: number = 1;
    for (let i = 2; i <= number; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
  
  console.log(factorialOfNumber(5));
  
  // ------------ String contains vowels ----------------
  let stringVowels = function(word: string): boolean {
    let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLowerCase();
  
    for (let char of word) {
      if (vowels.includes(char)) {
        return true;
      }
    }
    return false;
  }
  
  console.log(stringVowels("vowels"));
  
  // --------------- Check if the year is a leap year -----------
  let isLeapYear = function(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(isLeapYear(1887));
  