// 3. Extend the prime factorization program to store all the prime factors of a number (n) into an array and finally display the output.
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nTo find the factors of a number(n) using prime factorization and store into an array:");
let n = Number(prompt("Enter a positive integer (i.e. 'n' value): "));

function getFactorsUsingPrimeFactorization(n) {
    let factors = new Array();
    if (n >= 1 && Number.isInteger(n)) {
        for (let i = 1; i * i <= n; i++)
            if (n % i == 0) {
                factors.push(i);
                if (n / i != i)    // prime-factorization
                    factors.push(n / i);
            }
    } else console.log("Invalid user input.");
    factors.sort(function numSort(a, b) { return (a - b); });
    return factors;
}

let factors = getFactorsUsingPrimeFactorization(n);
console.log("Factors of " + n + " are: " + factors.toString())
