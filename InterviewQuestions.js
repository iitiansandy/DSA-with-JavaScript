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
function reverseArr(arr, left, right){
    while(left < right){
        [arr[left],arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

function optimalKRotation(arr, k){
    // reverse the whole array
    reverseArr(arr, 0, arr.length-1);
    reverseArr(arr, 0, k-1);
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

