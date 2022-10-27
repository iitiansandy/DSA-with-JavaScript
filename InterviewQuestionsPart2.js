/*
Prob: Valid Palindrome
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

function isPelindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, "");
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// let str = "A man, a plan, a canal: Panama";
// console.log(isPelindrome(str));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reverse an Array using recursion
Example: Input array: [5,7,3,8,1,9,2,6];
Ouput: [6,2,9,1,8,3,7,5];
*/

function revArr(arr, start, end) {
    let temp;
    if (start >= end) {
        return;
    }
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    revArr(arr, start + 1, end - 1);
}

// let arr = [5, 7, 3, 8, 1, 9, 2, 6];
// let start = 0;
// let end = arr.length - 1;
// revArr(arr, start, end);
// console.log(arr);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Check Strings are Anagram
Example 1: Input str1 = "silent", str2 = "listen";
Output: true

Example 2: Input str1 = "sandeep", str2 = "kumar";
Output: false
*/

function isAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let obj = {};
    for(chars of str1){
        obj[chars] = (obj[chars] || 0) + 1;
    }

    for(chars of str2){
        if(!obj[chars]){
            return false;
        }
        obj[chars]--;
    }
    return true;
}

// let str1 = "silent";
// let str2 = "listen";
// console.log(isAnagram(str1, str2));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Invert Binary Tree
Given the root of a binary tree, invert the tree, and return its root.
Example: Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
*/

// Method 1 (Recursion)
var invertTree = function(root) {
    if(root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    }
    return root;
};


// Method 2 (DFS)
function invertTree(root) {
    const stack = [root];
  
    while (stack.length) {
      const n = stack.pop();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        stack.push(n.left, n.right);
      }
    }
  
    return root;
  }
  
  // Method 3 (BFS)
  function invertTree(root) {
    const queue = [root];
  
    while (queue.length) {
      const n = queue.shift();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        queue.push(n.left, n.right);
      }
    }
  
    return root;
  }


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Check Square Elements of Another Array

Example: Input: arr1 = [1,2,3,4], arr2 = [1,4,9,16];
Output: true;
*/

// Brute Force
function isSquare(arr1, arr2){
    for(let i=0; i<arr1.length; i++){
        let isSquare = false;
        for(let j=0; j<arr2.length; j++){
            if((arr1[i]*arr1[i] === arr2[j])){
                isSquare = true;
            }
            if(j === arr2.length-1){
                if(!isSquare){
                    return false;
                }
            }
        }
    }
    return true;
}
// let arr1 = [1,2,3,4];
// let arr2 = [1,4,9,16];
// let res = isSquare(arr1, arr2);
// console.log(res);


// Optimized Approach
function checkSquare(arr1, arr2){
    let map1 = {};
    let map2 = {};

    for(let item1 of arr1){
        map1[item1] = (map1[item1] || 0) + 1;
    };

    for(let item2 of arr2){
        map2[item2] = (map2[item2] || 0) + 1;
    };

    for(let key in map1){
        if(!map2[key * key]){
            return false;
        }
        if(map1[key] !== map2[key * key]){
            return false;
        }
    }
    return true;
}

// let arr1 = [1,2,2,4];
// let arr2 = [1,4,16,4];
// let res = checkSquare(arr1, arr2);
// console.log(res);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Get the sum of n numbers using recursion.

Example: Input: N=100
Output: 5050
*/

function printSum(num){
    return num===0? 0 : num + printSum(num-1);
}
// console.log(printSum(100));



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Remove all consecutive duplicates from the string using recursion:
Example: Input: “aaaaabbbbbb”;
Output: ab;
*/

// Iterative
function removeDuplicates(str){
    let n = str.length;
    let str1 = "";

    if(n == 0){
        return str1;
    }

    for(let i=0; i<n-1; i++){
        if(str[i] !== str[i+1]){
            str1 += str[i];
        }
    }
    str1 += str[n-1];
    return str1;
}
// let str = "geeksforgeeks";
// console.log(removeDuplicates(str));


// Recursive
function removeConsecutive(str){
    if(str.length <= 1){
        return str;
    }
    if(str[0] === str[1]){
        return removeConsecutive(str.substring(1));
    } else {
        return str[0] + removeConsecutive(str.substring(1));
    }
}
// let str = "aaabbb";
// console.log(removeConsecutive(str));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Flood Fill
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting 
pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned 
pixels with color.

Return the modified image after performing the flood fill.
Example: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
*/

// Method 1
var floodFill = function(image, sr, sc, color) {
    let val = image[sr][sc];
    if(val === color){
        return image;
    }
    let row = image.length;
    let col = image[0].length;
    fill(sr, sc);
    return image;
    function fill(i,j){
        if(i<0 || j<0 || i===row || j ===col || image[i][j] !==val){
            return;
        }
        image[i][j] = color;
        fill(i+1, j);
        fill(i-1,j);
        fill(i, j+1);
        fill(i, j-1);
    }
};


// Method 2
var floodFill = function(image, sr, sc, color) {
    const currColor = image[sr][sc];
    if(color === currColor){
        return image;
    }
    function callDFS(img, row, col){
        if(row >= img.length || row <0 || col >= img[0].length || col < 0 || img[row][col] !== currColor){
            return;
        }
        img[row][col] = color;
	    callDFS(img, row-1, col);  //up
        callDFS(img, row+1, col);  //down
        callDFS(img, row, col+1);  //right 
        callDFS(img, row, col-1);  //left
        return img;
    }
    return callDFS(image, sr, sc);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
*/

// Iterative Method
//Time Complexity: O(H)
//Space Complexity: O(1)

var lowestCommonAncestor = function(root, p, q) {
    while(root){
        if(root.val < p.val && root.val < q.val){
            root = root.right;
        } else if(root.val > p.val && root.val > q.val){
            root = root.left;
        } else {
            break;
        }
    }
    return root;
};


// Recursive Method
//Time Complexity: O(H)
//Space Complexity: O(1)

var lowestCommonAncestor = function(root, p, q) {
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q);
    }
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find the Winner of the Circular Game
There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving 
clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.
The rules of the game are as follows:

Start at the 1st friend.
Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
The last friend you counted leaves the circle and loses the game.
If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
Else, the last friend in the circle wins the game.
Given the number of friends, n, and an integer k, return the winner of the game.

Example : Input: n = 5, k = 2
Output: 3
*/

var findTheWinner = function(n, k) {
    let y = n;
    function ans(n,k){
        if(n === 1){
            return 0;
        } else {
            return (ans(n-1,k)+k)%(n);
        }
    }
    return ans(n,k)+1;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Count Good Numbers
A digit string is good if the digits (0-indexed) at even indices are even and the digits at odd indices are prime (2, 3, 5, or 7).
Given an integer n, return the total number of good digit strings of length n. Since the answer may be large, return it modulo 109 + 7.

A digit string is a string consisting of digits 0 through 9 that may contain leading zeros.

Example 1:

Input: n = 1
Output: 5
Explanation: The good numbers of length 1 are "0", "2", "4", "6", "8".
*/

var countGoodNumbers = function(n) {
    let mod = 1000000007n;
    let even = Math.ceil(n/2);
    let odd = n - even;

    function myPow(x,y){
        if(y === 0){
            return 1n;
        }
        let res = 1n;
        res *= myPow(x, Math.floor(y/2));
        res *= res;

        if(y%2 === 1){
            res *= BigInt(x);
        }
        res %= mod;
        return res;
    }
    let ans = myPow(5,even) * myPow(4, odd);
    ans %= mod;
    return Number(ans);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Minimum Non-Zero Product of the Array Elements
You are given a positive integer p. Consider an array nums (1-indexed) that consists of the integers in the inclusive range [1, 2p - 1] in their binary 
representations. You are allowed to do the following operation any number of times:

Choose two elements x and y from nums.
Choose a bit in x and swap it with its corresponding bit in y. Corresponding bit refers to the bit that is in the same position in the other integer.
For example, if x = 1101 and y = 0011, after swapping the 2nd bit from the right, we have x = 1111 and y = 0001.

Find the minimum non-zero product of nums after performing the above operation any number of times. Return this product modulo 109 + 7.

Note: The answer should be the minimum product before the modulo operation is done.

Example:

Input: p = 1
Output: 1
Explanation: nums = [1].
There is only one element, so the product equals that element.
*/

var minNonZeroProduct = function(p) {
    p = BigInt(p);
    const mod = BigInt(1e9 + 7);
    const first = ((1n << p) - 1n);
    const half = first/2n;
    const second = powMod(first - 1n, half);
    return (first * second) % mod;

    function powMod(num, exp){
        if(exp === 0n) return 1n;
        const temp = powMod(num, exp >> 1n);
        let res = (temp * temp) % mod;
        if(exp % 2n){
            res = (res * num) % mod;
        }
        return res;
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Regular Expression Matching
Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Example :

Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
*/

var isMatch = function(s, p) {
    if(!p){
        return !s;
    }
    const firstMatchChar = Boolean(s) && (p[0] === '.' || p[0] === s[0]);
    if(p[1] === '*'){
        return (
            isMatch(s,p.slice(2)) || 
            (firstMatchChar && isMatch(s.slice(1),p))
        );
    }
    return firstMatchChar ? isMatch(s.slice(1), p.slice(1)) : false;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Capitalize the first letter of all the elements of an array of strings.
Example: Input: arr = [hi, hello, akash];
Output: [Hi, Hello, Akash];
*/

function capitalizeFirstLetter(arr){
    if(arr.length === 0){
        return [];
    }
    let res = [];
    let s = arr[0][0].toUpperCase() + arr[0].slice(1);
    res.push(s);
    return res.concat(capitalizeFirstLetter(arr.slice(1)));
}
// let arr = ["hi", "hello", "akash"];
// console.log(capitalizeFirstLetter(arr));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reverse a string using recursion like following:
Input: "hi to all"
Output: "ih ot lla"
*/

function reverse(str){
    if(str.length === 0){
        return "";
    }
    return reverse(str.slice(1)) + str[0];
}

function revSentenceWords(sentence){
    let words = sentence.split(" ");
    for(let i=0; i<words.length; i++){
        words[i] = reverse(words[i]);
    }
    return words.join(" ");
}

// let str = "hi to all";
// console.log(revSentenceWords(str));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Print the duplicates in an array
Example: Input: arr = [2,5,6,5,7,2];
Output: 2, 5
*/

function duplicates(arr){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.get(arr[i]) === undefined){
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    let res = [];
    for(let pairs of map){// map contains pairs of [key, value] ==> [key[0], value[1]]
        if(pairs[1] > 1){ // if value[1] > 1, collect the key of that pair
            res.push(pairs[0]);
        }
    }
    return res;
}
// let arr = [2,5,6,5,7,2];
// console.log(duplicates(arr));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Check whether an array is pelindromic or not
Example: Input: arr = [3,6,0,6,3]
Output: Yes
*/

function checkPelindrome(arr){
    let flag = 0;
    let n = arr.length;
    for(let i=0; i<n/2 && n != 0; i++){
        if(arr[i] !== arr[n-i-1]){
            flag = 1;
            break;
        }
    }
    if(flag === 1){
        return "No";
    } else {
        return "Yes";
    }
}
// let arr = [3,6,0,6,3,0];
// console.log(checkPelindrome(arr));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Write a program to cyclically rotate an array by 'd' elements
Example: Input arr = [3,4,5,6,7,8]; d = 2;
Output: [5,6,7,8,3,4];
*/

function rotateArray(arr, d){
    let temp = [];
    let k=0;

    // Storing the n - d elements of
    // array arr[] to the front of temp[]
    for(let i=d; i<arr.length; i++){
        temp[k] = arr[i];
        k++;
    }

    // Storing the first d elements of array arr[]
    //  into temp
    for(let i=0; i<d; i++){
        temp[k] = arr[i];
        k++;
    }

    // Copying the elements of temp[] in arr[]
    // to get the final rotated array
    for(let i=0; i<arr.length; i++){
        arr[i] = temp[i];
    }
    return arr;
}
// let arr = [3,4,5,6,7,8];
// let d = 2;
// let res = rotateArray(arr,d);
// console.log(res);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Given an array of repeated elements, return the most repeated element.
Example: Input arr = [3,5,7,9,5,4,5,3,7,5]
Output: 5
*/

function maxFreqChar(arr){
    let map = new Map();
    for(let i=0; i<arr.length; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    let maxCount = 0;
    let res = -1;
    for(let pairs of map){
        if(pairs[1] > maxCount){
            res = pairs[0];
            maxCount = pairs[1];
        }
    }
    return res;
}
// let arr = [40,50,30,40,50,30,30];
// console.log(maxFreqChar(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Check if max occurring character of one string appears same number of times in other
Given two strings S1 and S2, write a program to find the character which has the maximum occurrence in the first string S1 and check whether 
that particular character is present in the second string S2 the same number of times as it is present in the first string S1.

Example: Input: str1 = "hello world", str2 = "albcllsyaaaaaaaa"
Output: Yes
*/

function checkMaxCharInBothStrs(str1, str2){
    let map1 = new Map();
    let map2 = new Map();
    let maxChar;
    let maxFreq = 0;

    for(let ele of str1){
        map1.set(ele, map1.get(ele) + 1 || 1);
        if(map1.get(ele) > maxFreq){
            maxFreq = map1.get(ele);
            maxChar = ele;
        }
    }

    for(let ele of str2){
        map2.set(ele, map2.get(ele) + 1 || 1);
    }

    if(map1.get(maxChar) == map2.get(maxChar)){
        return "Yes";
    } else {
        return "No"
    }
}

// let str1 = "hello world";
// let str2 = "albcllsyaaaaaaaa";
// let res = checkMaxCharInBothStrs(str1, str2);
// console.log(res);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Longest Palindrome
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those 
letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
Example :

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

// Method 1 (using objects)
var longestPalindrome = function(s) {
    let ans = 0;
    let keys = {};

    for(let char of s){
        keys[char] = (keys[char] || 0) + 1;
        if(keys[char] % 2 == 0){
            ans += 2;
        }
    }
    return s.length > ans? ans + 1 : ans;
};


// Method 2 (using maps)
var longestPalindrome = function(s) {
    let map = new Map();
    for(let i=0; i<s.length; i++){
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    let numOfOdds = 0;

    for(let value of map.values()){
        if(value % 2 === 1){
            numOfOdds += 1;
        }
    }
    return numOfOdds > 0 ? s.length - numOfOdds + 1 : s.length;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Given an array, find the elements without a pair
Ex: Input arr = [3,7,11,8,11,8,7];
Output: 3;
*/

function findNonPairElement(arr){
    let map = new Map();

    for(let curr of arr){
        if(map.get(curr)){
            map.set(curr, map.get(curr) + 1);
        } else {
            map.set(curr, 1);
        }
    }

    for(let val of map){
        if(val[1]%2 === 1){
            return val[0];
        }
    }
}

// let arr = [3,7,11,8,11,8,7];
// let res = findNonPairElement(arr);
// console.log(res);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find the Rotation Count in Rotated Sorted array
Given an array arr[] of size N having distinct numbers sorted in increasing order and the array has been right rotated (i.e, the last element 
will be cyclically shifted to the starting position of the array) k number of times, the task is to find the value of k.

Examples: 
Input: arr[] = {15, 18, 2, 3, 6, 12}
Output: 2
Explanation: Initial array must be {2, 3, 6, 12, 15, 18}. 
We get the given array after rotating the initial array twice.

Input: arr[] = {7, 9, 11, 12, 5}
Output: 4
*/
function countRotations(arr, low, high){
    // This condition is needed to handle the case
    // when the array is not rotated at all
    if(high < low){
        return 0;
    }
    // If there is only one element left
    if(high == low){
        return low;
    }
    let mid = Math.floor(low + (high-low)/2);
    // Check if element (mid+1) is minimum element.
    // Consider the cases like {3, 4, 5, 1, 2}
    if(mid < high && arr[mid+1] < arr[mid]){
        return (mid+1);
    }
    // Check if mid itself is minimum element
    if(mid > low && arr[mid] < arr[mid-1]){
        return mid;
    }
    // Decide whether we need to go to left half or
    // right half
    if(arr[high] > arr[mid]){
        return countRotations(arr, low, mid-1);
    }
    return countRotations(arr, mid+1, high);
}
// let arr = [15, 18, 20, 23, 2, 3, 6, 12];
// let low = 0;
// let high = arr.length - 1;
// let res = countRotations(arr,low,high);
// console.log(res);



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Write a function to calculate the max sum of three consecutive elements of an array.

*/

function simpleMaxSumOfThreeConsequtive(arr){
    if(arr.length < 3) return;

    let currMax = -Infinity;
    for(let i = 0; i<arr.length-3; i++){
        if(arr[i] + arr[i+1] + arr[i+2] > currMax){
            currMax = arr[i] + arr[i+1] + arr[i+2];
        }
    }
    return currMax;
}
//console.log(simpleMaxSumOfThreeConsequtive([4,7,6,2,3,9,7,8]));



/* 
Prob: Write a function to calculate the max sum of k consecutive elements of an array.

*/

function maxSumOfKElements(arr, k){
    if(arr.length < k) return;

    let currMax = -Infinity;
    for(let i = 0; i<arr.length-k; i++){
        let sum = 0;
        for(let j=i; j<k+i; j++){
            sum += arr[j];
        }
        if(sum > currMax){
            currMax = sum;
        }
    }
    return currMax;
};
//console.log(maxSumOfKElements([4,7,6,2,3,9,7,8], 3));
// Time Complexity: O(n*k)


// OPTIMIZED Approach
function optimizedMaxSum(arr, k){
    if(arr.length < k) return;

    let currMax = -Infinity;
    let totalSum = 0, leftWindowSum = 0;
    
    for(let i=0; i<k; i++){
        totalSum += arr[i];
    }
    currMax = totalSum;

    for(let i=k; i<arr.length; i++){
        leftWindowSum += arr[i-k];
        totalSum += arr[i];

        if(totalSum - leftWindowSum > currMax){
            currMax = totalSum - leftWindowSum;
        }
    }
    return currMax;
}

//console.log(optimizedMaxSum([4,7,6,2,3,9,7,8], 3));



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Convert an array of nums to array of str in such a way that if num was 1,2,3,4, then strings would have values like following:
1: a in 2: ab in 3 : abc e.g [2,5] => ["ab", "abcde"];
*/

function generateStr(num){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let finalStr = "";
    let currIndex = 0;

    while(currIndex < num){
        finalStr += alphabet[currIndex % 26];
        currIndex++;
    }
    return finalStr;
}

//console.log(generateStr(27));
function encodeNumberWithChar(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = generateStr(arr[i]);
    }
}

// const arr = [2,5,3,4,5,6];
// encodeNumberWithChar(arr);
// console.log(arr);


function encodeNumberWithCharOptimal(arr){
    let maxNum = Math.max(...arr);
    let encodeArr = [''];
    
    for(let i=1; i<=maxNum; i++){
        encodeArr.push(generateStr(i));
    }

    for(let i=0; i<arr.length; i++){
        arr[i] = encodeArr[arr[i]];
    }
}
// const arr = [2,5,3,4,5,6];
// encodeNumberWithCharOptimal(arr);
// console.log(arr);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Add Binary
Given two binary strings a and b, return their sum as a binary string.

Example:

Input: a = "11", b = "1"
Output: "100"
*/

// Method 1 (using BigInt)
var addBinary = function(a, b) {
    const aBin = `0b${a}`;
    const bBin = `0b${b}`;
    const sum = BigInt(aBin) + BigInt(bBin);
    return sum.toString(2);
};


// Method 2
var addBinary = function(a, b) {
    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
 };


 // Method 3
 var addBinary = function(a, b) {
    // Truth Table
   // 1st + 2nd + carry = sum, new carry, decimal sum
   //   0 +  0  + 0 = 0, 0 (0)
   //   0 +  0  + 1 = 1, 0 (1)
   //   0 +  1  + 1 = 0, 1 (2)
   //   1 +  1  + 1 = 1, 1 (3)
 
   let carry = 0;
   let res = '';
 
   let len1 = a.length - 1;
   let len2 = b.length - 1;
 
   for(; len1 >= 0 || len2 >= 0 || carry > 0; len1--, len2--){
       let sum = (+a[len1] || 0) + (+b[len2] || 0) + carry;
       if(sum > 1){
           sum = sum % 2;
           carry = 1;
       } else {
           carry = 0;
       }
       res = `${sum}${res}`;
   }
   return res;
 };


 // Method 4
 var addBinary = function(a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
 
    let len = a.length > b.length ? a.length : b.length;
    let res = [];
 
    for(let i=0; i<len; i++){
        let num1 = Number(a[i] || 0);
        let num2 = Number(b[i] || 0);
        let curr = Number(res[i] || 0) + num1 + num2;
 
        if(curr >= 2){
            res[i] = curr%2;
            res.push(1);
        } else {
            res[i] = curr;
        }
    }
    return res.reverse().join("");
 };


 /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Insertion Sort Algorithm
*/

function insertionSort(arr){
    for(let right = 1; right < arr.length; right++){
        let currIndex = right;
        while(currIndex >= 1 && arr[currIndex - 1] > arr[currIndex]){
            [arr[currIndex-1], arr[currIndex]] = [arr[currIndex], arr[currIndex-1]];
            currIndex--;
        }
    }
    return arr;
};
// const arr = [6,7,3,5,4,9,8,2,1];
// insertionSort(arr);
// console.log(arr);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Selection Sort Algorithm
*/

function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
// const arr = [6,7,3,5,4,9,8,2,1];
// selectionSort(arr);
// console.log(arr);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Gas Station
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin 
the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, 
otherwise return -1. If there exists a solution, it is guaranteed to be unique

Example:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.
*/

var canCompleteCircuit = function(gas, cost) {
    let curTank = 0, totalTank = 0, pos = 0;
    for(let i=0; i<gas.length; i++){
        curTank += gas[i] - cost[i];
        totalTank += gas[i] - cost[i];

        if(curTank < 0){
            curTank = 0;
            pos = i+1;
        }
    }
    return totalTank < 0 ? -1 : pos;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob : Substring with Concatenation of All Words
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in s is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. 
"acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
*/

var findSubstring = function(s, words) {
    let res = [];
    let wordLength = words[0].length;
    let wordCount = words.length;
    let len = wordCount * wordLength;

    let map = {};

    for(let word of words) map[word] = map[word] + 1 || 1;

    for(let i=0; i<s.length - len + 1; i++){
        let sub = s.slice(i, i+len);
        if(isConcat(sub, map, wordLength)) res.push(i);
    }
    return res;
};

function isConcat(sub, map, wordLength){
    let seen = {};
    for(let i=0; i<sub.length; i += wordLength){
        let word = sub.slice(i, i + wordLength);
        seen[word] = seen[word] + 1 || 1;
    }
    for(let key in map){
        if(map[key] !== seen[key]) return false;
    }
    return true;
}




