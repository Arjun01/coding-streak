'use strict';

// MAIN FUNCTION
function main() {
    const inputLines = inputString.trim().split('\n');
    for (const line of inputLines) {
        const [M, N] = line.split(' ').map(Number);
        const count = countPrimes(M, N);
        console.log(count);
    }
}

function sieve(limit) {
    const PRIMES = new Array(limit + 1).fill(true);
    PRIMES[0] = false;
    PRIMES[1] = false;

    for (let p = 2; p * p <= limit; p++) {
        if (PRIMES[p]) {
            for (let i = p * p; i <= limit; i += p) {
                PRIMES[i] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (PRIMES[i]) {
            primes.push(i);
        }
    }

    return primes;
}

function countPrimes(M, N) {
    const maxLimit = Math.floor(Math.sqrt(N));
    const primes = sieve(maxLimit);

    let count = 0;
    for (let num = M; num <= N; num++) {
        if (isPrime(num, primes)) {
            count++;
        }
    }
    return count;
}

function isPrime(num, primes) {
    if (num <= 1) {
        return false;
    }
    for (const prime of primes) {
        if (prime * prime > num) {
            break;
        }
        if (num % prime === 0) {
            return false;
        }
    }
    return true;
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
    inputString = inputString.trim();
    main();
});
