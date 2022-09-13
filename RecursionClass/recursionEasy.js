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


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 4 - Tower of Hanoi
Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move all disks from source rod to 
destination rod using third rod (say auxiliary). The rules are :
1) Only one disk can be moved at a time.
2) A disk can be moved only if it is on the top of a rod.
3) No disk can be placed on the top of a smaller disk.
Print the steps required to move n disks from source rod to destination rod.
Source Rod is named as 'a', auxiliary rod as 'b' and destination rod as 'c'.
Sample Input:
3
Sample Output:
a c
a b
c b
a c
b a
b c
a c
*/

function towerOfHanoi(disks, source, auxiliary, destination){
    if(disks === 0) return;

    else {
        towerOfHanoi(disks-1 , source, destination, auxiliary);
        console.log(source + " " + destination);
        towerOfHanoi(disks-1, auxiliary, source, destination);
    }
}
// towerOfHanoi(3, 'a', 'b', 'c');


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 5 - Replace pi (recursive)
Given a string, compute recursively a new string where all appearances of "pi" have been replaced by "3.14".
Sample Input 1 : xpix
Sample Output : x3.14x
*/

function replacePI(str){
    let len = str.length;
    let ans = "";
 
    if(len <=1) return str;

    if(str.charAt(0) === 'p' && str.charAt(1) === 'i'){
        ans = "3.14" + replacePI(str.substring(2,len));
        return ans;
    }

    ans = str.charAt(0) + replacePI(str.substring(1,len));
    return ans;
}
// console.log(replacePI('pipi'));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 6 - Remove X
Given a string, compute recursively a new string where all 'x' chars have been removed.
Sample Input 1 : xaxb
Sample Output 1: ab
*/

function removeX(str){
    let len = str.length;
    let ans = "";
    if(len === 0) return str;

    if(str.charAt(0) === 'x'){
        return removeX(str.substring(1,len));
    }
    ans = str.charAt(0) + removeX(str.substring(1,len));
    return ans;
}
// console.log(removeX('xaxb'));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 7 - 

*/

