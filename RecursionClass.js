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


