'use strict';

// MAIN FUNCTION
function main() {
    const T = parseInt(inputString[0], 10); // Read the number of test cases
    let currentIndex = 1; // Start at the first test case

    for (let ti = 0; ti < T; ti++) {
        const NK = inputString[currentIndex].split(' ');
        const N = parseInt(NK[0], 10); // Read the size of the array
        const K = parseInt(NK[1], 10); // Read the search key
        const arr = inputString[currentIndex + 1].split(' ').map(Number); // Read the array elements

        // Initialize the result to -1
        let result = -1;

        // Perform linear search
        for (let i = 0; i < N; i++) {
            if (arr[i] === K) {
                result = i; // Key found at index i
                break;
            }
        }

        // Print the result
        console.log(result);

        // Move to the next test case
        currentIndex += 2;
    }
}

// EVERYTHING BELOW IS FOR INPUT READING

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.trim().split('\n');
    main();
});
