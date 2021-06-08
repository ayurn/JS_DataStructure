// 5. Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array.

const prompt = require('prompt-sync')({ sigint: true });

console.log("\nSelect a range within 0-100 to get all the numbers with repeated digits in that range:");
let low = Number(prompt("Enter lower limit: "));
let high = Number(prompt("Enter higher limit: "));
let repeatArray = new Array();
if (low <= high && low >= 0 && high <= 100) {
    for (let i = low; i <= high; i++) {
        if (parseInt(i / 10) == i % 10 && i != 0)
            repeatArray.push(i);
    }
    console.log("Numbers with repeated digits in given range are: " + repeatArray.toString());
} else console.log("Invalid number-range entered.");