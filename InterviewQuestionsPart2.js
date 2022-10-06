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




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

Example: Input:
Output: 
*/




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

Example: Input:
Output: 
*/


