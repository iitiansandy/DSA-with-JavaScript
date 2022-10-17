/*
Capitalize the first letter of all elements of an array of strings using RECURSION.

APPROACH
capitalizeFunction(["abc", "pqr", "xyz", "jkl"]) => ["Abc", "pqr", "Xyz", "Jkl"];
["Abc"] concate with capitalizeFunction(["pqr", "xyz", "jkl"]);
["Abc"] concate with ["Pqr"] concate with capitalizeFunction["xyz", "jkl"];
["Abc"] concate with ["Pqr"] concate with ["Xyz"] concate with capitalizeFunction["jkl"];
["Abc"] concate with ["Pqr"] concate with ["Xyz"] concate with ["Jkl"] concat with [];
*/

function capitalizeFirstLetter(arr){
    let result = [];

    if(arr.length == 0) return [];
    // pull out arr[0] and capitalize the first char of arr[0]
    let s = arr[0][0].toUpperCase() + arr[0].slice(1);
    result.push(s);
    return result.concat(capitalizeFirstLetter(arr.slice(1)));
}
// console.log(capitalizeFirstLetter(["abc", "pqr", "xyz", "jkl"]));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
REVERSE a Sentence using RECURSION in given manner (Very Commonly asked question).
Ex 1: INPUT: "Concept of The Day",  OUTPUT: "tpecnoC fO ehT yaD"
Ex 2: INPUT: "they are playing a game",  OUTPUT: "yeht era gniyalp a emag"


APPROACH
reverseSentWords() => split the sentence based on space => ["hi", "to", "all"] => loop over the 
array and reverse each word using reverse function and keep concating with next words
*/

function reverse(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

function revSentenceWords(sent){
    let words = sent.split(" ");
    for(let i=0; i<words.length; i++){
        words[i] = reverse(words[i]);
    }
    return words.join(" ");
}
// console.log(revSentenceWords("hi to all"));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PRINT THE DUPLICATE IN AN ARRAY
Ex : INPUT: [23, 3, 2,1, 3, 1],  OUTPUT: 3, 1.

APPROACH
We will create HashMap for counting the frequency of all element.
let frequencies = {
    23: 1,
    3: 2,
    2: 1,
    1: 2
}
Then loop over all keys and collect wherever value is greater than 1.
*/

function duplicate(arr){
    let frequencies = new Map();
    for(let i=0; i<arr.length; i++){
        if(frequencies.get(arr[i]) == undefined){
            frequencies.set(arr[i], 1);
        }
        else {
            frequencies.set(arr[i], frequencies.get(arr[i]) + 1);
        }
    }
    let res = [];
    for(let pairs of frequencies){
        if(pairs[1] > 1) res.push(pairs[0]);
    }
    return res;
}
console.log(duplicate([3, 4, 3, 2, 1, 3, 1]));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - SWAP TWO NUMBERS WITHOUT A 3RD TEMP VARIABLE
Example: Input: a = 5, b = 10;
         Output: a = 10, b = 5; 
// console.log("a =", a," ", "b = ", b);
a = a + b; // a = 15 and b = 10;
b = a - b; // b = 5 and a = 15;
a = a - b; // a = 10 and b = 5;
// console.log("a =", a, " ", "b = ", b);
*/

function swapNumValue(n1, n2){
    console.log(n1, n2);
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;
    console.log(n1, n2);
}



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - SWAP 2 strings without a third variable.
let x = "Some";
let y = "Good";

x = "SomeGood" concat x and y (x = x + y)
y = x - y  (use slice and length of y) => "Some";
x = x - y (use slice and length of y and remove chars from start);

let t1 = "sandeep";
let t2 = "kumar";
console.log(t1)

t1 = t1 + t2;
console.log(t1)

t1 = t1.slice(5);
t1 = t1.slice(7,12);
console.log(t1)
*/

// Method 1
let str1 = "world";
let str2 = "hello";
str2 = [str1, str1 = str2][0];
// console.log(str1, str2); // Hello world

// Method 2
var s1 = "Hello", s2 = "World!";
// console.log(s1, s2); // Hello World!
[s1, s2] = [s2, s1]; //
// console.log(s1, s2); // World! Hello



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Reverse Array without using extra array;
Input arr = [12, 4, 67, 2, 34],   ans = [34, 2, 67, 4, 12];
take two pointer left (i) and right (j).
swap ith and jth elements;
do this till i<j;
*/

// Method 1
function revArr(arr){
    let i=0;
    let j = arr.length-1;
    while(i<j){
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
        i++;
        j--;
    }
    return arr;
}
// console.log(revArr([1,2,3,4,5,6]));


// Method 2
function reverseArray(arr){
    let left = 0, right = arr.length-1;

    while(left < right){
        //swap two elements
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB (Most asked problem) - Write a JS program to cyclically rotate an array - rotate(arr, d) that rotate array by d elements.
let arr1 = [12, 3, 6, 2, 9, 11]
revArr(arr1, d=2) => [11, 9, 2, 6, 3, 12];

APPROACH
arr = reverse(arr);
arr[1st d elements] = reverse (arr [1st two elements])
arr[remaining elements] = reverse(arr[remaining elements]);
*/

// Method 1
function rotateArr(arr,k){
    let temp = new Array(arr.length).fill(0);
    for(let i=0; i<arr.length; i++){
        const shiftIndex = (i+k)%arr.length; // (0-arr.length-1) index range
        temp[shiftIndex] = arr[i];
    }
    // Copy temp elements in original array
    for(let i=0; i<arr.length; i++){
        arr[i] = temp[i];
    }
    return arr;
}
// console.log(rotateArr([12, 3, 6, 2, 9, 11],4));


// Method 2
// Utility function to reverse an array
function reverseArr(arr, left, right){
    while(left < right){
        [arr[left],arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

// main recursive function for rotation
function optimalKRotation(arr, k){
    // reverse the whole array
    reverseArr(arr, 0, arr.length-1);
    // reverse first (k-1) elements of the array
    reverseArr(arr, 0, k-1);
    // reverse the remaining elements of the array
    reverseArr(arr, k, arr.length-1);
}
// const arr = [12, 3, 6, 2, 9, 11];
// optimalKRotation(arr, 4);
// console.log(arr);



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Given an array of repeated elements, return the most repeated element from the array.
Highest frequency element in an array.

let arr = [23, 56, 678, 12, 2, 34, 98, 3, 12, 2, 12]
STEPS
1. Create a hash map for frequency counting;
2. Iterate over the map and return the element with highest frequency.
*/

function maxFreq(arr){
    if(!arr.length) return null;
    let map = new Map();
    let maxFrequency = 1;
    let maxFreqEle = null;

    for(let i=0; i<arr.length; i++){
        if(map.get(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);

            if(maxFrequency < map.get(arr[i])){
                maxFrequency = map.get(arr[i]);
                maxFreqEle = arr[i];
            }
        }
        else {
            map.set(arr[i], 1);
        }
    }
    console.log("Element", maxFreqEle, "appeared", maxFrequency, "times");
}
// maxFreq([1,2,3,4,5,6,5,6,5,5]);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Find the max sum of any two elements in an array;
let arr = [12, 4, 67, 2, 34]
This question is basically asking the largest and the second largest elements in the array.
Maintain 2 variables: largest (-INFINITY), and secondLargest;
Iterate ove the array and if you find a number that is larger than the largest then update the largest = arr[i] and secondLargest = largest;
Else if --> arr[i] > secondLargest ==> secondLargest = arr[i]
*/

function largestTwoNumSum(arr){
    let firstMax = arr[0];
    let secondMax = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] >= firstMax){
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if(arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    console.log(firstMax + secondMax);
}
// largestTwoNumSum([1,2,3,4,5,6,7,8]);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Given an array of integers, filter out duplicate elements and return unique elements in arr.
(e.g. Input arr = [1,1,2,3,2,6,7,8]), Output arr = [3,6,7,8];
*/

function removeDups(arr){
    const set = new Set(arr);
    return [...set];
}
// console.log(removeDups([1,1,2,3,2,6,7,8]));



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Take an input and check whether the input is an integer or not.
Approach 1: If the input is an int, then every char should be a digit i.e. every char should be among 0-9
Check if all the chars lie among [0,1,2,3,4,5,6,7,8,9];
*/
// Method 1
function checkInt(input){
    let pattern = /^-?[0-9]+$/;
    let result = pattern.test(input);
    return result;
}

// Method 2
function isValidInt(inp = ''){
    let notANum = true;

    for(let i=0; i<inp.length; i++){
        if(inp[i] >= '0' && inp[i] <= '9'){
            continue;
        }
        else {
            notANum = true;
            break;
        }
    }
    return notANum;
}
// console.log(isValidInt("123456iop"));



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB - Foo Bar
*/

function printNum(num){
    if(num%3==0 && num%5!==0){
        console.log("Foo");
    }
    else if(num%5===0 && num%3 !==0){
        console.log("Bar");
    }
    else if(num%3===0 && num%5===0){
        console.log("FooBar");
    }
    else{
        console.log("Nothing");
    }
}
// printNum(6);
// printNum(10);
// printNum(15);
// printNum(7);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
Prob - Print all subsequences of a string
Input : abc
Output : a, b, c, ab, bc, ac, abc
*/

// Method 1
function subStrings(input, output){
    // Base Case
    // if the input is empty print the output string
    if(input.length === 0){
        console.log(output);
        return;
    }
    // output is passed with including
    // the Ist character of
    // Input string
    subStrings(input.substring(1), output + input[0]);
    subStrings(input.substring(1), output);
}
// let input = "abcd";
// let output = "";
// subStrings(input, output);


// Method 2
function printSubStrs(str){
    let set = new Set();
    for(let i=0; i<str.length; i++){
        for(let j=str.length; j > i; j--){
            let subStr = str.substr(i, i+j);
            set.add(subStr);

            for(let k=1; k<subStr.length; k++){
                let sub = subStr;
                sub = sub.replace(sub[k]);
                printSubStrs(sub);
            }
        }
    }
}
// let str = "aabc";
// printSubStrs(str);
// console.log(str);
// Program to check if input is an integer or a string


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Program to check if input is an integer or a string

function findNum(input){
    input = input.toString();
    for(let i=0; i<input.length; i++){
        if(input[i] < '0' || input[i] > '9'){
            return "Not an Integer"
        }
    }
    return "Integer"
}

// let input = "123";
// console.log(findNum(input));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// Find Second largest element in an array

// Method 1
function secondLargestElement(arr){
    if(arr.length <2){
        console.log("Plz provide a valid array")
        return;
    }
    arr.sort();
    for(let i=arr.length - 2; i >= 0; i--){
        if(arr[i] != arr[arr.length-1]){
            console.log("Second largest element is ", arr[i]);
            return;
        }
    }
    console.log("There is no second largest element in array");
}

// let arr = [12,12];
// secondLargestElement(arr);


// Method 2
function secondLarEle(arr){
    let largestEle = 0, secondLargest = 0;
    if(arr.length < 2){
        console.log("Invalid Input");
        return;
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largestEle){
            largestEle = arr[i];
        }
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] > secondLargest && arr[i] < largestEle){
            secondLargest = arr[i];
        }
    }
    if(secondLargest === 0){
        console.log("There is no second largest element in the array");
    }
    else {
        console.log("The second largest element is ", secondLargest);
        return;
    }
}

// let arr = [12];
// secondLarEle(arr);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

// PRINT THE DUPLICATE IN AN ARRAY
//Ex : INPUT: [23, 3, 2,1, 3, 1],  OUTPUT: 3, 1.

function printDuplicate(arr){
    let freq = new Map();
    for(let i=0; i<arr.length; i++){
        if(freq.get(arr[i])){
            freq.set(arr[i], freq.get(arr[i]) + 1);
        } else {
            freq.set(arr[i], 1);
        }
    }
    let result = [];
    for(ele of freq){
        if(ele[1] > 1){
            result.push(ele[0]);
        }
    }
    return result.sort();
}
let arr = [3, 4, 3, 2, 1, 3, 1];
console.log(printDuplicate(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


// Checking Sum Zero Problem
// Example: Input Array: [-5,-4,-3,-2,0,2,4,6,8];
// Output: first zero sum pair: [-4,4]


// Brute Force Method
function getSumZeroPair(arr){
    for(let number of arr){
        for(let j=1; j<arr.length; j++){
            if(number + arr[j] === 0){
                return [number, arr[j]]
            }
        }
    }
}

// let arr = [-5,-4,-3,-2,0,2,4,6,8];
// console.log(getSumZeroPair(arr));
// Time Complexity (T.C.) --> O(n^2)

// Optimized Method

function pairSumZero(arr){
    let left = 0, right = arr.length - 1;

    while(left < right){
        sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
// let arr = [-5,-4,-3,-2,0,2,4,6,8];
// console.log(pairSumZero(arr));
//T.C. --> O(n)


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - String Anagram problem
Example: Input: str1: "hello", str2: "llheo"
*/

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let counter = {};
    for(let letter of str1){
        counter[letter] = (counter[letter] || 0) + 1;
    }

    for(let item of str2){
        if(!counter[item]){
            return false;
        }
        counter[item] -= 1;
    }
    return true;
}

// let str1 = "hello";
// let str2 = "llheo";
// let check = isAnagram(str1, str2);
// console.log(check);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Count unique numbers in an sorted array
Example: Input: arr = [1,1,2,2,3,4,45,6,7,8,8];
Output: 8
*/

function countUnique(arr){
    if(arr.length > 1){
        let i=0;
        for(let j=1; j<arr.length; j++){
            if(arr[i] !== arr[j]){
                i++;
                arr[i] = arr[j];
            }
        }
        return i+1;
    } else {
        return "Array is Empty";
    }
}
// let arr = [1,1,2,2,3,4,4,5,6,7,8,8,90];
// let res = countUnique(arr);
// console.log(res);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Largest sum of consecutive digits
Example: Input: arr = [1,2,3,4,5,6,7,8,9]; num = 4;
Output: 30
*/

function largestSumOfConsecuitveDigits(arr, num){
    if(num > arr){
        return "number should not be greater than array"
    }

    let maxSum = 0;
    for(let i=0; i<arr.length - num + 1; i++){
        let temp = 0;
        for(let j=0; j<num; j++){
            temp = temp + arr[i + j];
        }
        if(temp > maxSum){
            maxSum = temp;
        }
    }
    return maxSum;
}

// let arr = [1,2,3,4,5,6,7,8,9];
// let num = 4;
// let res = largestSumOfConsecuitveDigits(arr, num);
// console.log("largest sum of consecutive", num, "digits is:", res);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Find string within a string
Example: Input: str1 = "Code Zinger University"; str2 = "Zinger";
Output: 5
*/

function findSubStr(str1, str2){
    let n = str1.length;
    let m = str2.length;
    /* A loop to slide pat[] one by one */
    for(let i=0; i<=n-m; i++){
        var j;
        /* For current index i, check for pattern match */
        for(j=0; j<m; j++){
            if(str1[i+j] !== str2[j]){
                break;
            }
        }
        if(j === m){
            return i;
        }
    }
    return -1;
}

// let str1 = "Code Zinger University";
// let str2 = "Zinger";
// let res = findSubStr(str1, str2);
// console.log("substring", str2, "starts from the index", res, "in the string", str1);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Array Balance
Given an unsorted array A, check whether the array is [info message="If an array can be split into two parts such that the sum of elements on both the 
sides is equal. 
Display 1 if the array is balanced otherwise 0.
Example: Input: str1 = [1  1  1  2  1];
Output: 1
*/

function arrBalance(arr){
    for(let i=1; i<arr.length; i++){
        let leftSum = 0;
        for(let j=i-1; j>=0; j--){
            leftSum += arr[j];
        }
        let rightSum = 0;
        for(let k=i; k<arr.length; k++){
            rightSum += arr[k];
        }
        if(leftSum === rightSum){
            return 1;
        }
    }
    return 0;
}
// let arr = [1,1,1,2,1];
// let res = arrBalance(arr);
// console.log(res);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximum and minimum of an array using minimum number of comparisons
Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

Example:
Input: arr[] = {3, 5, 4, 1, 9}
Output: Minimum element is: 1
Maximum element is: 9
*/

function getMinMax(arr){
    let minMax = new Array();
    var i;
    var min;
    var max;
    let n = arr.length;

    /*If there is only one element then return it as min and max both*/
    if(n === 1){
        minMax.max = arr[0];
        minMax.min = arr[0];
        return minMax;
    }

    /* If there are more than one elements, then initialize min
    and max*/

    if(arr[0] > arr[1]){
        minMax.max = arr[0];
        minMax.min = arr[1];
    } else {
        minMax.max = arr[1];
        minMax.min = arr[0];
    }

    for(let i=2; i<n; i++){
        if(arr[i] > minMax.max){
            minMax.max = arr[i];
        } else if(arr[i] < minMax.min){
            minMax.min = arr[i];
        }
    }
    return minMax;
}
// var arr = [1000, 11, 445, 4, 330, 1234];
// minMax = getMinMax(arr);
// console.log("Minimum element:", minMax.min);
// console.log("Maximum element:", minMax.max);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: K’th Smallest/Largest Element in Unsorted Array
Given an array and a number K where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

Example:  
Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3 
Output: 7
*/

// Method 1
function kthSmallest(arr, k){
    arr.sort((a,b)=>a-b);
    return arr[k-1];
}
// let arr = [12, 3, 5, 7, 19];
// let k = 2;
// console.log(kthSmallest(arr,k));
// Time Complexity: O(NlogN)


// Method 2
function count(nums, mid){
    var cnt=0;
    for(var i=0; i<nums.length; i++){
        if(nums[i] <= mid){
            cnt++;
        }
    }
    return cnt;
};

function kthSmallEle(nums,k){
    var low = Number.MAX_VALUE;
    var high = Number.MIN_VALUE;

    // calculate minimum and maximum the array.
    for(var i=0; i<nums.length; i++){
        low = Math.min(low, nums[i]);
        high = Math.max(high, nums[i]);
    }

    // Our answer range lies between minimum and
    // maximum element of the array on which Binary Search is Applied
    while(low < high){
        var mid = Math.floor(low + (high - low)/2);
        if(count(nums, mid) < k){
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
// var k = 3;
// var nums = [10, 12, 13, 14, 15, 16, 17];
// console.log(kthSmallEle(nums,k));
//Time complexity: O((mx-mn) * log (mx-mn));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sort an array of 0s, 1s and 2s | Dutch National Flag problem
Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, 
then all 1s and all 2s in last.

This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra. The problem is as follows:

Given N balls of colour red, white or blue arranged in a line in random order. You have to arrange all the balls such that the balls with the same colours 
are adjacent with the order of 
the balls, with the order of the colours being red, white and blue (i.e., all red coloured balls come first then the white coloured balls and then the 
    blue coloured balls). 
Example:  
Input: {0, 1, 2, 0, 1, 2}
Output: 0, 0, 1, 1, 2, 2}
*/

function sort012(arr){
    let lo=0;
    let hi=arr.length-1;
    let mid=0;
    let temp=0;

    while(mid <= hi){
        if(arr[mid] == 0){
            temp = arr[lo];
            arr[lo] = arr[mid];
            arr[mid] = temp;
            lo++;
            mid++;
        }
        // if the element is 1
        else if(arr[mid] == 1){
            mid++;
        }
        else{
            temp = arr[mid];
            arr[mid] = arr[hi];
            arr[hi] = temp;
            hi--;
        }
    }
}

/* Utility function to print array arr[] */
function printArray(arr){
    let i;
    let res = [];
    for(let i=0; i<arr.length; i++){
        res.push(arr[i]);
    }
    return arr;
}

/*Driver function to check for above functions*/
// let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
// sort012(arr);
// console.log(printArray(arr));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Move all negative numbers to beginning and positive to end with constant extra space
An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

Example: 
Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5
*/

function rearrange(arr){
    let j=0;
    let n = arr.length;
    for(let i=0; i<n; i++){
        if(arr[i] < 0){
            if(i != j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
};
// let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
// rearrange(arr);
// console.log(arr);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* Write a javascript function which will accept a string and count the frequency of each alphabets. then print them in descending order
Example: Input String: "geeksforgeeks"
Output: {'e': 4, }
*/

function getFrequency(string) {
    string = string.toLowerCase();
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    return freq;
};
// console.log(getFrequency("geeksforgeeks"));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Length of the longest substring without repeating characters
Given a string str, find the length of the longest substring without repeating characters.
Example: Input: s = "abcabcbb"
Output: 3
*/

function longestSubStr(str){
    if(!str){
        return 0;
    }
    let start = 0;
    let end = 0;
    let maxlen = 0;
    let uniqueChars = new Set();

    while(end < str.length){
        if(!uniqueChars.has(str[end])){
            uniqueChars.add(str[end]);
            end++;
            maxlen = Math.max(maxlen, uniqueChars.size);
        } else {
            uniqueChars.delete(str[start]);
            start++;
        }
    }
    return maxlen;
};
// let str = "abcabcbb";
// console.log(longestSubStr(str));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Largest Sum Contiguous Subarray (Kadane’s Algorithm)
Given an array arr[] of size N. The task is to find the sum of the contiguous subarray within a arr[] with the largest sum. 
Example: Input: [-2, -3, 4, -1, -2, 1, 5, -3]
Output: Maximum contiguous sum is 7
*/

function maxSubArr(arr){
    var maxInt = Math.pow(2, 53);
    var maxSoFar = -maxInt - 1;
    var maxEndingHere = 0;

    for(var i=0; i<arr.length; i++){
        maxEndingHere = maxEndingHere + arr[i];
        if(maxSoFar < maxEndingHere){
            maxSoFar = maxEndingHere;
        };
        if(maxEndingHere < 0){
            maxEndingHere = 0;
        }
    }
    return maxSoFar;
}
// var arr = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
// console.log(maxSubArr(arr));



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window Maximum
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

var maxSlidingWindow = function(nums, k) {
    let res = [];
    let q = [];

    for(let i=0; i<nums.length; i++){
        while(q.length-1 >= 0 && nums[i] > q[q.length-1]){
            q.pop();
        }
        q.push(nums[i]);
        // When i + 1 - k >= 0, the window is fully overlapping nums
        const j = i + 1 - k;
        if(j >= 0){
            res.push(q[0]);
            if(nums[j] === q[0]){
                q.shift(); // If the biggest element in q is about to exit window, remove it from q
            }
        }
    }
    return res;
};
// let nums = [1, 2, 3, 1, 4, 5, 2, 3, 6]
// let k = 3;
// console.log(maxSlidingWindow(nums,k));

