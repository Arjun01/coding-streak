Sieve of Eratosthenes (Difficulty - easymedium)
Description
Given N, print all prime numbers that are less than or equal to N.

Sieve of Eratosthenes Algorithm is an algorithm to generate PRIME NUMBERS less than or equal to N. 



It suggests a way to generate prime numbers like this:

Take a boolean array PRIMES of size N+1.
Initialise array with all true values (each index tells if given index is prime or not).
Mark PRIMES[0] and PRIMES[1] as false (as they are not prime)
from i=2 to N, if PRIMES[i] is true mark multiples of i, mi as false PRIMES[mi] = false.
Create and return a list of all the numbers for which PRIMES[i] = true
Prohibited Keywords
No prohibited keywords for this problem.
Input Format
Input consists of multiple tests each containing single integer N per line.

Output Format
For each test case print space separated sort list of integers which are prime numbers and are less than or equal to N.

Constraints
0 <= T <= 100

0 <= N <= 105

Example
Input 1
2
10
21
 
Output 1
2 3 5 7
2 3 5 7 11 13 17 19
 
Explanation 1
self explanatory

 
