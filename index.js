// FizzBuzz: Write a program that prints the numbers from 1 to 100. But for multiples of three, print “Fizz” instead of the number, and for the multiples of five, print “Buzz”. For numbers that are multiples of both three and five, print “FizzBuzz”.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz Bazz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("Bazz");
    } else {
        console.log(i);
    }
}

// Reverse a String: Write a function that takes a string as input and returns the string in reverse order. For example, if the input is “hello”, the output should be “olleh”.
function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = 'hello';
const output = reverseString(input);
console.log(output);  // Output: olleh



// Check Prime Number: Write a function that checks if a given number is prime (only divisible by 1 and itself). For example, if the input is 7, the output should be true.
// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
// Sum All Numbers in an Array: Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
const array = [1, 2, 3, 4, 5];
const sum = sumArray(array);
console.log(sum); // 15


// Factorial: Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(num) {
    if (num < 0) {
        return undefined;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// const input = 5;
// const output = factorial(input);
// console.log(output);  // Output: 120


// Find the Longest Word: Write a function that takes a sentence as input and returns the longest word in the sentence. For example, if the input is “The quick brown fox jumps over the lazy dog”, the output should be “jumps”.

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
// let input = "“The quick brown fox jumping over the lazy dog”"

// console.log(longestWord(input));

// Remove Duplicates from an Array: Write a function that takes an array as input and returns a new array with all duplicate elements removed.
function removeDuplicates(array) {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3]))


// Palindrome Checker: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). For example, if the input is “racecar”, the output should be true.

// Check Prime Number: Write a function that checks if a given number is prime (only divisible by 1 and itself). For example, if the input is 7, the output should be true.
// program to check if a number is prime or not

// take input from the user
// const number = parseInt(prompt("Enter a positive number: "));

// let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
// Sum All Numbers in an Array: Write a function that takes an array of numbers as input and returns the sum of all the numbers in the array.
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
// const array = [1, 2, 3, 4, 5];
// const sum = sumArray(array);
// console.log(sum); // 15


// Factorial: Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial(num) {
    if (num < 0) {
        return undefined;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

const input2 = 5;
const output2 = factorial(input2);
console.log(output2);  // Output: 120

