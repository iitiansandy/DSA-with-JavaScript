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


