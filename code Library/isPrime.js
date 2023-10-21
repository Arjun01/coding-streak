'use strict';

// MAIN FUNCTION
function main() {
    for (let ti = 1; ti < inputString.length; ti++) {
        const N = parseInt(inputString[ti], 10);
        const isPrime = checkIfPrime(N);
        console.log(`Test Case #${ti}: ${isPrime ? 'YES' : 'NO'}`);
    }
}

function checkIfPrime(N) {
    if (N <= 1) {
        return false;
    }
    const primeNumbers = sieve(Math.floor(Math.sqrt(N)));
    for (let prime of primeNumbers) {
        if (N % prime === 0) {
            return false;
        }
    }
    return true;
}

function sieve(N) {
    // Create an array isPrime of size N+1 and initialize all values to true
    const isPrime = Array(N + 1).fill(true);

    // Mark 0 and 1 as not prime
    isPrime[0] = false;
    isPrime[1] = false;

    // Start from the first prime number, 2
    for (let i = 2; i * i <= N; i++) {
        if (isPrime[i]) {
            // Mark multiples of the current prime number as not prime
            for (let j = i * i; j <= N; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Create a list of prime numbers
    const primes = [];
    for (let i = 2; i <= N; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
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
