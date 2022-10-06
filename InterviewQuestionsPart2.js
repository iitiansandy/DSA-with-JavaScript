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




/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

Example: Input:
Output: 
*/


