'use strict';

// MAIN FUNCTION
function main() {
    const T = parseInt(inputString[0], 10); // Read the number of test cases
    let currentIndex = 1; // Start at the first test case

    for (let ti = 0; ti < T; ti++) {
        const N = parseInt(inputString[currentIndex], 10); // Read the size of the square matrix
        currentIndex++;

        const matrix = [];
        for (let i = 0; i < N; i++) {
            matrix.push(inputString[currentIndex].split(' ').map(Number));
            currentIndex++;
        }

        // Initialize sums for the primary and secondary diagonals
        let primaryDiagonalSum = 0;
        let secondaryDiagonalSum = 0;

        // Calculate the sums of the odd elements in both diagonals
        for (let i = 0; i < N; i++) {
            if (matrix[i][i] % 2 === 1) {
                primaryDiagonalSum += matrix[i][i];
            }
            if (matrix[i][N - 1 - i] % 2 === 1) {
                secondaryDiagonalSum += matrix[i][N - 1 - i];
            }
        }

        // Calculate the absolute difference
        const result = Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

        // Print the result
        console.log(result);
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
