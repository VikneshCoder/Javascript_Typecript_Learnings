// ------------------ Area of the circle -----------------------
function areaOfTheCircle(radius: number): number {
  return Math.PI * radius ** 2;
}

console.log(areaOfTheCircle(7));


// ---------------- Check a number: positive, negative, or zero ----------------------
function checkANumber(number: number): void {
  if (isNaN(number)) {
    console.log(`Not a number`);
  } else if (number < 0) {
    console.log(`The given number ${number} is negative`);
  } else if (number > 0) {
    console.log(`The given number ${number} is positive`);
  } else {
    console.log(`The given number ${number} is Zero`);
  }
}

checkANumber(20);


// ------------------- Sum of an array --------------------------
function sumOfTheArray(listOfNumbers: number[]): number {
  let sum = 0;
  for (let number of listOfNumbers) {
    sum += number;
  }
  return sum;
}

const list: number[] = [10, 54, 78, 63, 95];
console.log(sumOfTheArray(list));


// --------------- Maximum value in an array --------------------
function maxValueInAnArray(values: number[]): number {
  let largestNumber = values[0];
  for (let i = 1; i < values.length; i++) {
    if (values[i] > largestNumber) {
      largestNumber = values[i];
    }
  }
  return largestNumber;
}

const values: number[] = [10, 54, 78, 63, 95];
console.log(maxValueInAnArray(values));


// ----------- Reverse the words in the given string -----------------
function reverseTheWord(sentence: string): string {
  const words: string[] = sentence.split(" ");
  const reversedWords: string[] = [];

  for (let word of words) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i];
    }
    reversedWords.push(reversed);
  }

  return reversedWords.join(" ");
}

const sentence: string = 'The given word is not reversed';
console.log(reverseTheWord(sentence));
