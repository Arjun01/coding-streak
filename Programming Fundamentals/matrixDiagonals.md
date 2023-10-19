Matrix Diagonals (Difficulty - cakewalk)
Description
Given a square matrix N﻿, find the absolute difference between the sum of odd elements of the 2 main diagonals.(Primary and Secondary Diagonals)

Prohibited Keywords
No prohibited keywords for this problem.
Input Format
First line contains T test cases.

Next line contains an integer N representing the rows and columns of the matrix.

Next N lines contain elements of the matrix.

Output Format
An integer representing the absolute difference of the sum of odd elements of the 2 main diagonals.

Constraints
1 ≤ T ≤ 100

1 ≤ N ≤ 100

1 ≤ A[i][j] ≤ 1000

Example
Input 1
2
3 
1 2 4
5 7 4
0 3 22
4
5 7 4 6
0 3 21 8
1 2 8 9
8 0 3 24
 
Output 1
1
13
 
Explanation 1
Test case-1:

Odd elements of the first Diagonal contains 1, 7.

Odd elements of the second Diagonal contains 7.

(1 + 7 ) - (7) = |8 - 7| = 1



Test case-2:

Odd elements of the first Diagonal contains 5, 3

Odd elements of the second Diagonal contains 21

(5 + 3) - (21) = |8 - 21| = 13

