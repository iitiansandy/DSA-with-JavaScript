/*
PROB 1 - Power of Two
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:
Input: n = 1
Output: true
Explanation: 20 = 1
*/

// ITERATIVE SOLUTION
var isPowerOfTwo = function(n) {
    let i=1;
    
    while (i < n){
        i *= 2;
    }
    return i===n;
};


// RECURSIVE SOLUTION
var isPowerOfTwo = function(n) {
    return run(n, 0);
};
function run(n, i=0){
    //base cases
    if(2 ** i === n) return true;
    if(2 ** i > n) return false;
    return run(n, i=i+1);
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 2 - Fibonacci Number
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each 
number is the sum of the two preceding ones, starting from 0 and 1. That is,
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

Example 1:
Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
*/

var fib = function(n) {
    if(n===0) return 0;
    if(n===1) return 1;
    
    return fib(n-1) + fib(n-2);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 3 - Power of Three
Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.
Example 1:
Input: n = 27
Output: true
Explanation: 27 = 33
*/

var isPowerOfThree = function(n) {
    return run(n, 0);
};

function run(n, i=0){
    if(3 ** i === n) return true;
    if(3 ** i > n) return false;
    return run(n, i = i+1);
}


