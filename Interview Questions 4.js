
/*
Prob: Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array 
where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0, right = arr.length-1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg === num){
            return true
        } else if (avg < num) {
            left++;
        } else {
            right--;
        }
    }
    return false;
  };


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

*/

// Iterative
function isSubSequence(str1, str2) {
    let i=0, j=0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}


// Recursive but not O(1) Space
function isSubSeq(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubSeq(str1.slice(1), str2.slice(1));
    return isSubSeq(str1, str2.slice(1));
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of 
the number passed to the function.
Ex: maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
*/

function maxSumSubArr (arr, num) {
    if (arr.length < num) return null;
    let maxSum = 0;
    for (let i=0; i<num; i++) {
        maxSum += arr[i];
    }
    let curSum = maxSum;
    for (let i=num; i<arr.length; i++) {
        curSum = curSum + arr[i] - arr[i-num];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}
// let arr = [1,4,2,10,23,3,1,0,20], num = 4;
// console.log(maxSumSubArr(arr, num));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the 
function. If there isn't one, return 0 instead.
Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
*/

function minSubArrayLen(arr, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    
    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        }
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
*/

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i=0; i<str.length; i++){
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i-start+1);
        seen[char] = i+1;
    }
    return longest;
};  


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Combinations
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
*/

// Method 1
var combine = function(n, k) {
    function* comb(start, curComb) {
        if (curComb.length == k) {
            yield curComb;
            return;
        }
        for (let i=start; i<=n; i++) {
            yield* comb(i+1, [...curComb, i]);
        }
        return;
    }
    return [...comb(start=1, curComb=[])];
};


// Method 2
var combine = function(n, k) {
    let result = [];
    let comb = function(start, curComb) {
        if (curComb.length == k) {
            result.push([...curComb]);
            return;
        }
        for (let i=start; i<=n; i++) {
            curComb.push(i);
            comb(i+1, curComb);
            curComb.pop();
        }
        return;
    }
    comb(start=1, curComb=[]);
    return result;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function(strs) {
    'use strict';
    if(strs === undefined || strs.length === 0) return '';
    return strs.reduce((prev, next) => {
        let i=0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Example: Input: root = [3,9,20,null,null,15,7]
Output: 2
*/

var minDepth = function(root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;

    if (root.left == null) return 1 + minDepth(root.right);
    if (root.right == null) return 1 + minDepth(root.left);
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Path Sum
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values 
along the path equals targetSum. A leaf is a node with no children.
Example: Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
*/

// Method 1
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if(!root.left && !root.right) {
        return targetSum === root.val;
    } else {
        return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val);
    }
};


// Method 2
var hasPathSum = function(root, targetSum) {
    return dfs(root, 0, targetSum);
};

var dfs = function(curr, currSum, targetSum) {
    if(!curr) return false;
    currSum += curr.val;
    if (curr.left === null && curr.right === null) {
        return currSum === targetSum;
    }
    return dfs(curr.left, currSum, targetSum) || dfs(curr.right, currSum, targetSum);
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Path Sum II
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals 
targetSum. Each path should be returned as a list of the node values, not node references.
A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
Example: Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
*/

// Method 1
var pathSum = function(root, targetSum, res = [], path = []) {
    if (root) {
        path.push(root.val);
        if (!root.left && !root.right && targetSum-root.val === 0) res.push([...path]);
        pathSum(root.left, targetSum-root.val, res, path);
        pathSum(root.right, targetSum-root.val, res, path);
        path.pop();
    }
    return res;
};


// Method 2
var pathSum = function(root, targetSum) {
    function dfs(node, curPath, curTarget) {
        if (node == null) return;
        curPath.push(node.val);
        curTarget -= node.val;

        if (node.left == null && node.right == null && curTarget == 0) {
            answer.push(curPath.slice());
            curPath.pop();
            return;
        }
        dfs(node.left, curPath, curTarget);
        dfs(node.right, curPath, curTarget);
        curPath.pop();
        return;
    }
    answer = [];
    dfs(root, [], targetSum);
    return answer;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

