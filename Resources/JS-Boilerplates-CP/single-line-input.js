'use strict';

// MAIN FUNCTION
function main() {
    const input = inputString.split(' ');
    const A = parseInt(input[0], 10);
    const B = parseInt(input[1], 10);
    const max = Math.max(A, B);
    console.log(max);
}

// EVERYTHING BELOW IS FOR INPUT READING

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
function readLine() {
    return inputString;
}

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    main();
});
