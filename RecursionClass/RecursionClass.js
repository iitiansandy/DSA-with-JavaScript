
/*
PROB 1 - Write a recursive function to calculate Factorial of a number.
*/

function fact(n){
    if(n===1) return 1;
    return n * fact(n-1);
}

console.log(fact(4))

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// PROB 2 - Finding nth element in Fibonacci Series by Recursion

function fibo(n){
    if(n<=2) return 1;
    return fibo(n-1) + fibo(n-2);
}
console.log(fibo(10));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// PROB 3 - Array multiplication by Recursion

function arrMultiplication (arr){
    if(arr.length === 0) return 1;
    return arr[0] * arrMultiplication(arr.splice(1));
 }
 console.log(arrMultiplication([1,2,3,4,5]));


 /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// PROB 4 - Calculating Powers using Recursion

function pow(b, exp){
    if(exp===0) return 1;
    return b * pow(b, exp-1);
}
console.log(pow(2,5));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// PROB 5 - Reverse an array using recursion

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
PROB 6 - Pow(x, n) using recursion
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


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
PROB 7 - Write a recursive function to reverse a string */

function reverse(str){
    if(str.length<=1) return str;  //base case
    return reverse(str.slice(1)) + str[0];  //recursion core logic
}
// console.log(reverse("hello world"));


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 8 - Write a recursive function to check whether a string is pelindrome or not. 
LOGIC - "REFER" - return (R === R && isPelindrome("EFE"));
                - return (R === R && E === E && isPelindroem("F"));
*/

// METHOD 1
function isPelindrome(str){
    if(str.length<=1) return true;

    return ( str[0] == str.slice(-1) && isPelindrome(str.slice(1, -1)));
}
// console.log(isPelindrome("namana"));


// METHOD 2 (Preferable)
function isPelin(str){
    if(str.length<=1) return true;

    if(str[0] === str.slice(-1)) return isPelin(str.slice(1, -1));
    else return false;
}
// console.log(isPelin("madam"));


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 9 - Write a recursive function to flatten an array.
Ex- Input: [1, 2, [3, 4, 5], [6, 7]], Output: [1, 2, 3, 4, 5, 6, 7]
*/

function flattenArr(arr){
    let ans = [];
    for(var i=0; i < arr.length; i++){
        if(Array.isArray(arr[i]) === false) ans.push(arr[i]);

        else ans = ans.concat(flattenArr(arr[i]));

    }
    return ans;
}
// console.log(flattenArr([1, 2, [3, 4, 5], [6, 7]]));



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 10 - Write a recursive function to capitalize the first letter of every string element in an array of strings.
INPUT: ["hi", "hello", "hola"],
OUTPUT: ["Hi", "Hello", "Hola"]
*/

function capitalizeArr(arr){
    var result = [];
    var helper = function(arr){
        if(arr.length === 0) return;
        var str = arr[0];
        result.push(str[0].toUpperCase() + str.slice(1));
        return helper(arr.slice(1));
    }
    helper(arr);
    return result;
}
// console.log(capitalizeArr(["hi", "hello", "hola"]));





