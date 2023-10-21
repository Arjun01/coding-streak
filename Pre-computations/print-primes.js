'use strict';

// MAIN FUNCTION
function main() {
    const N = parseInt(inputString[0], 10);
    printPrimes(N);
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function printPrimes(N) {
    let primeCount = 0;
    let num = 2;

    while (num < N) {
        if (isPrime(num)) {
            primeCount++;
            if (primeCount % 100 === 1) {
                console.log(num);
            }
        }
        num++;
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
