// 4. Write a program to show sum of three integers adds to zero.

let intArray = new Array(1, 2, 3, -1, -2, -3, 0);
console.log("\nTo show all triplets with sum zero in an array:\nSum-zero triplets in this array are:");

function findSumZeroTriplets(arr) {
    arr.sort(function numSort(a, b) { return (a - b); });
    for (let i = 0; i < arr.length; i++) {
        let x = arr[i], start = i + 1, end = arr.length - 1;
        while (start < end) {
            let sum = parseInt(arr[start]) + parseInt(arr[end]) + parseInt(x);
            if (sum == 0) {
                console.log(x + "  " + arr[start] + "  " + arr[end]);
                start++;
                end--;
            }
            else if (sum < 0) start++;
            else end--;
        }
    }
}

findSumZeroTriplets(intArray);