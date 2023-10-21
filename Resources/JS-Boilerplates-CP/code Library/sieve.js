'use strict';

// MAIN FUNCTION
function main() {
    for (let ti = 0; ti < inputString.length; ti++) {
        const line = inputString[ti].split(' ');
        const N = parseInt(line[0], 10);
        const numbers = line.slice(1).map(Number);

      

        console.log('N', N);
        console.log('numbers', numbers);
    }
}

// EVERYTHING BELOW IS FOR INPUT READING

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
function readLine() {
    return inputString[currentLine++];
}

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.trim().split('\n');
    main();
});