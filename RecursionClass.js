// Calculating Factorial by Recursion

function fact(n){
    if(n===1) return 1;
    return n * fact(n-1);
}

console.log(fact(4))

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Finding nth element in Fibonacci Series by Recursion

function fibo(n){
    if(n<=2) return 1;
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(10));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Array multiplication by Recursion

function arrMultiplication (arr){
    if(arr.length === 0) return 1;
    return arr[0] * arrMultiplication(arr.splice(1));
 }
 console.log(arrMultiplication([1,2,3,4,5]));


 /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Calculating Powers using Recursion

function pow(b, exp){
    if(exp===0) return 1;
    return b * pow(b, exp-1);
}
console.log(pow(2,5));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Reverse an array using recursion

function reverseArr(arr, start, end){
    let temp;
    if(start >= end) return;
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseArr(arr, start+1, end-1);
}

function printArr(arr, size){
    for(let i=0; i<size; i++){
        console.log(arr[i]);
    }
}
var arr = [1,2,3,4,5,6,7];
let size = arr.length;
console.log("Original array");
printArr(arr, size);
reverseArr(arr, 0 , size-1)
console.log("Reversed array");
printArr(arr, size);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Pow(x, n) using recursion
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000
*/

var myPow = function(x, n) {
    var recur = function(y,i){
        if(i===0) return 1;
        else if(i === 1) return y;
        
        var temp = recur(y, Math.floor(i/2));
        
        if(i%2===1) return temp*temp*y
        
        return temp*temp;
    };
    
    var y = x;
    
    if(n < 0) {
        y = 1/x;
        n = -1*n;
    }
    return recur(y,n)
};


