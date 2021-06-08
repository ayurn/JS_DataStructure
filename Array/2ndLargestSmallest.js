// 1. Write a program in the following steps:
// 1.a. Generate 10 random 3-digit numbers.
// 1.b. Store these random numbers into an array.  
// 1.c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let numArray = new Array();
console.log("\nTo generate 10 random numbers, store them in an array and find the 2nd smallest and 2nd largest numbers among them:");
for (let i = 0; i < 10; i++) {
    numArray.push(Math.floor(Math.random() * 1000));
}
let max = Math.max(...numArray), max2 = -Infinity;
for (let num1 of numArray) if (num1 > max2 && num1 < max) max2 = num1;
let min = Math.min(...numArray), min2 = +Infinity;
for (let num2 of numArray) if (num2 < min2 && num2 > min) min2 = num2;
console.log("numArray: " + numArray);
console.log("2nd largest number(without sort): " + max2);
console.log("2nd smallest number(without sort): " + min2);

// 2. Extend the above program to sort the array and then find the 2nd largest  and the 2nd smallest element.
numArray.sort(function numSort(a, b) { return (a - b); });
console.log("Sorted-numArray: " + numArray);
console.log("2nd largest number(with sort): " + numArray[numArray.length - 2]);
console.log("2nd smallest number(with sort): " + numArray[1]);