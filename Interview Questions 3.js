
/* Search in Rotated Sorted Array
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4 
*/

var search = function(nums, target) {
    let start = 0, end=nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid]===target) return mid;
        if(nums[mid]>=nums[start]){
            // start-mid sorted
            if(target>=nums[start] && target<nums[mid]){
                end = mid-1;
            } else {
                start = mid+1;
            }
        } else {
            // mid-end sorted
            if(target>nums[mid] && target<=nums[end]){
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
    }
    return -1;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximum Subarray
*/
// (Kadane's Algorithms)
var maxSubArray = function(nums) {
    
    let sum = 0 //taking a sum to sum up elements from nums
    let maxSum = -Infinity   //initializing the max sum
    for(let ele of nums){  //looping through the array nums
        sum = sum + ele  // summing up with each element
        maxSum = Math.max(maxSum, sum)  //keeping the maximum sum in a value
        if(sum < 0) sum = 0  // if at any iteration, the sum becomes less than 0, make thae sum as 0
    }
    return maxSum  //return the maxSum 
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Two Sum
*/

// Method 1
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        let num1 = nums[i];
        let num2 = target - nums[i];
        if(map.has(num2)){
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }
};


// Method 2
var twoSum = function(nums, target) {
    let map = new Map();
    
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
	return [];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Container With Most Water
*/

var maxArea = function(height) {
    let area = 0;
    let i = 0;
    let j = height.length - 1;
    
    while (i<j){
        let temp = (j-i)*Math.min(height[i],height[j]);
        area = Math.max(area, temp);
        
        if(height[i]>height[j]){
            j--;
        } else {
            i++;
        }
    }
    return area;
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 3Sum
*/

var threeSum = function(nums) {
    let result = [];
    if(nums.length<3) return result;
    nums.sort((a,b)=>a-b);
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0) break;
        if(i>0 && nums[i] === nums[i-1]) continue;
        let start = i+1;
        let end = nums.length-1;
        while(start<end){
            let sum = nums[i] + nums[start] + nums[end];
            if(sum === 0){
                result.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
                while(start<end && nums[start] === nums[start-1]) start++;
                while(start<end && nums[end]===nums[end+1]) end--;
            }
            else if(sum<0) start++;
            else if(sum>0) end--;
        }
    }
    return result;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Best Time to Buy and Sell Stock
*/

var maxProfit = function(prices) {
    var min = Number.MAX_VALUE;
    var max = 0;

    for(var i=0; i<prices.length; i++){
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximum Product Subarray
*/
var maxProduct = function(nums) {
    var res = Math.max(...nums);
    curMin = 1;
    curMax = 1;
    prevMax = 1;

    for (const num of nums) {
        prevMax = curMax * num;
        curMax = Math.max(prevMax, curMin*num, num);
        curMin = Math.min(prevMax, curMin*num, num);
        res = Math.max(res, curMax);
    }
    return res;
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find Minimum in Rotated Sorted Array
*/
var findMin = function(nums) {
    let start = 0, end = nums.length-1;
    let min = nums[start];
    while(start <= end){
        let mid = parseInt((start + end)/2);
        if(nums[mid] < nums[start]){
            min = Math.min(nums[mid], min);
            end = mid - 1;
        } else {
            min = Math.min(nums[start], min);
            start = mid + 1;
        }
    }
    return min;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example:

Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function(nums) {
    let check = [];
    for(let i=0; i<nums.length; i++){
        if(check.includes(nums[i])){
            return true;
        }else check.push(nums[i]); 
    }
    return false;
};


// Method 2
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function(nums) {
    const s = new Set(nums); return s.size !== nums.length
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Product of Array Except Self
Example:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
*/

var productExceptSelf = function(nums) {
    let res = [];
    let product = 1;
    
    for(let i=0; i<nums.length; i++){
        res.push(product);
        product = product * nums[i];
    }
    
    product = 1;
    for(let i=nums.length-1; i>=0; i--){
        res[i] = res[i] * product;
        product = product * nums[i];
    }
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Longest Substring Without Repeating Characters
Given a string s, find the length of the longest 
substring without repeating characters.
Example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }
    let start = 0;
    let end = 0;
    let maxLength = 0;
    
    const uniqueChars = new Set();
    while(end < s.length){
        if(!uniqueChars.has(s[end])){
            uniqueChars.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChars.size);
        } else {
            uniqueChars.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Increasing Triplet Subsequence
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.

Example:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
*/

var increasingTriplet = function(nums) {
    let firstNum = Infinity;
    let secNum = Infinity;

    for(let curNum of nums) {
        if(curNum > secNum && secNum > firstNum) {
            return true;
        }
        if(curNum > firstNum) {
            secNum = curNum;
        } else {
            firstNum = curNum;
        }
    }
    return false;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Valid Parentheses
Example:
Input: s = "()"
Output: true
*/

var isValid = function(s) {
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    
    let ans = [];
    
    for(let char of s){
        if(obj[char]){
            ans.push(obj[char]);
        } else {
            if(ans.pop() !== char) return false;
        }
    }
    return (!ans.length);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Remove Nth Node From End of List
Ex: Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for(let i=0; i<n; i++){
        fast = fast.next;
    }
    if(!fast){
        return head.next;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters 
exactly once.

Example:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

var groupAnagrams = function(strs) {
    let map = {};
    for(let s of strs){
        let array = Array(26).fill(0);
        for(let i=0; i<s.length; i++){
            let ascii = s.charCodeAt(i);
            array[ascii-97] +=1;
        }
        let key=array.join('-');
        if(map[key]){
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }
    return Object.values(map);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Minimum Window Substring
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the 
empty string "".

The testcases will be generated such that the answer is unique.
Example:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

var minWindow = function(s, t) {
    let min = "", left = 0, right = -1;
    let map = {};
    t.split('').forEach(element => {
        if(map[element] == null) map[element] = 1;
        else map[element] = map[element] + 1;
    });

    let count = Object.keys(map).length;
    while (right <= s.length) {
        if (count == 0) {
            let current = s[left];
            if(map[current] != null) map[current]++;
            if(map[current] > 0) count++;

            let temp = s.substring(left, right+1);
            if(min == "") min = temp;
            else min = min.length < temp.length ? min : temp;
            left++;
        } else {
            right++;
            let current = s[right];
            if (map[current] != null) map[current]--;
            if (map[current] == 0) count--;
        }
    }
    return min;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximum Subarray
Given an integer array nums, find the subarray which has the largest sum and return its sum.

Example:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

// Method 1
var maxSubArray = function(nums) {
    let max = nums[0];
    let sum = nums[0];
    
    for(let i=1; i<nums.length; i++){
        if(sum + nums[i]>nums[i]){
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        max = Math.max(max, sum);
    }
    return max;
};


// Method 2
var maxSubArray = function(nums) {
    let prev = 0;
    let max = -Number.MAX_VALUE;

    for(let i=0; i<nums.length; i++) {
        prev = Math.max(prev + nums[i], nums[i]);
        max = Math.max(max, prev);
    }
    return max;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Subarray Sum Equals K
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example:

Input: nums = [1,1,1], k = 2
Output: 2
*/

var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let count = 0;
    map.set(0,1);

    for (let i=0; i<nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) count += map.get(sum - k);
        if (map.has(sum)) map.set(sum, map.get(sum) + 1);
        else map.set(sum, 1);
    }
    return count;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Rotate Image
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
*/

var rotate = function(matrix) {
    for(let rows=0; rows<matrix.length; rows++){
        for(let col=rows; col<matrix[0].length; col++){
            [matrix[rows][col], matrix[col][rows]] = [matrix[col][rows], matrix[rows][col]];
        }
    }
    for(let row of matrix){
        row.reverse();
    }
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Spiral Matrix
Given an m x n matrix, return all elements of the matrix in spiral order.

Example: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

var spiralOrder = function(matrix) {
    let result = [];
    let left = 0;
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    
    let direction = 'right';
    while(left<=right && top<=bottom){
        
        if(direction === 'right'){
            for(let i=left; i<=right; i++){
                result.push(matrix[top][i]);
            }
            top++;
            direction = 'down';
        }
        
        else if(direction === 'down'){
            for(let i=top; i<=bottom; i++){
                result.push(matrix[i][right]);
            }
            right--;
            direction = 'left';
        }
        
        else if(direction === 'left'){
            for(let i=right; i>=left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom--;
            direction = 'up';
        }
        
        else if(direction === 'up'){
            for(let i=bottom; i>=top; i--){
                result.push(matrix[i][left]);
            }
            left++;
            direction = 'right';
        }
    }
    return result;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Set Matrix Zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example: Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

var setZeroes = function(matrix) {
    const xIndexes = new Set();
    const yIndexes = new Set();
    const rowLength = matrix.length;
    const columnLength = matrix[0].length;
    for(let i=0; i<rowLength; i++) {
        for(let j=0; j<columnLength; j++){
            if(matrix[i][j] === 0){
               xIndexes.add(i);
               yIndexes.add(j);
            }   
        }
    }
    
    for(const value of xIndexes) {
        for(j=0; j<columnLength; j++){
            matrix[value][j] = 0;
        }
    }
    for(const value of yIndexes) {
        for(j=0; j<rowLength; j++){
            matrix[j][value] = 0;
        }
    }
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might 
become:
[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Example:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
*/

var findMin = function(nums) {
    let start = 0, end = nums.length-1;
    let min = nums[start];
    while(start <= end){
        let mid = parseInt((start + end)/2);
        if(nums[mid] < nums[start]){
            min = Math.min(nums[mid], min);
            end = mid - 1;
        } else {
            min = Math.min(nums[start], min);
            start = mid + 1;
        }
    }
    return min;
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Partition Equal Subset Sum
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of 
elements in both subsets is equal.

Example:

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].
*/

var canPartition = function(nums) {
    let sum = nums.reduce((a,b)=>a+b,0);

    if(sum%2 !== 0) {
        return false;
    }
    let half = sum/2;
    let dp = [];
    dp[0] = true;

    for (let index=0; index<nums.length; index++){
        let num = nums[index];
        for(let i=half; i>=num; i--) {
            dp[i] = dp[i] || dp[i-num];
        }
    }
    return dp[half] || false;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary
words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

*/

// Using DFS
var wordBreak = function(s, wordDict) {
    if(wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);

    const visited = new Set();
    const q = [0];
    while (q.length) {
        const start = q.shift();
        if (!visited.has(start)) {
            for(let end = start+1; end <= s.length; end++) {
                if(set.has(s.slice(start, end))) {
                    if (end === s.length) return true;
                    q.push(end);
                }
            }
            visited.add(start);
        }
    }
    return false;
};


// Using DP
var wordBreak = function(s, wordDict) {
    if(wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);
    const dp = Array(s.length+1).fill(false);
    dp[0] = true;
    for (let end=1; end<=s.length; end++) {
        for(let start=0; start<end; start++) {
            const w = s.slice(start, end);
            if(dp[start] == true && set.has(w)) {
                dp[end] = true;
                break;
            }
        }
    }
    return dp[s.length];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sqrt(x)
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as 
well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

Example:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
*/

var mySqrt = function(x) {
    let left = 1, right = Math.floor(x/2) + 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right)/2);
        if(mid * mid > x) {
            right = mid - 1;
        } else if(mid * mid < x) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return right;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find the subarray whose sum is equal to zero.
*/

function subArr(arr) {
    let map = new Map();
    let sum = 0;
    for(let ele of arr) {
        sum += ele; // 2, 2+3, 2+3+1,
        if(!map.has(sum)) {
            map.set(sum, 1);
        } else {
            return "Yes"
        }
    }
    return "No"
}
// let arr = [2,3,1,-4,5];
// console.log(subArr(arr));
// TC --> O(n)


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 
*/

function countFreq(str) {
    str = str.replace(/\s+/g, "");
    str = str.split("").sort();
    let obj = {};
    for(ele of str) {
        obj[ele] = (obj[ele] || 0) + 1;
    }
    let arr = Object.entries(obj);
    let res = "";
    for (let i=0; i<arr.length; i++) {
        res = res + arr[i][0] + " " + arr[i][1];
    }
    console.log(res);
}
let str = "hello world";
countFreq(str);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or 
equal to target. If there is no such subarray, return 0 instead.

Example: Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

// Method 1
var minSubArrayLen = function(target, nums) {
    let left = 0, right = 0;
    let sum = 0;
    let res = 0;

    while (right < nums.length) {
        sum += nums[right];

        while(sum >= target) {
            let len = right - left + 1;
            if(res === 0 || len < res) res = len;
            sum -= nums[left];
            left++;
        }
        right++;
    }
    return res;
};


// Method 2
var minSubArrayLen = function(target, nums) {
    let dist = Number.MAX_SAFE_INTEGER;
    let left=0;
    let sum=0;

    for(let right=0; right < nums.length; right++) {
        sum += nums[right];
        while(sum >= target) {
            dist = Math.min(dist, right-left+1);
            sum -= nums[left];
            left++;
        }
    }
    return dist === Number.MAX_SAFE_INTEGER ? 0 : dist;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Best Time to Buy and Sell Stock with Cooldown
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve.
Ex: Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]
*/

var maxProfit = function(prices) {
    let [coolDown, sell, hold] = [0, 0, Number.NEGATIVE_INFINITY];
    for(let stockPrice of prices) {
        let [prevCoolDown, prevSell, prevHold] = [coolDown, sell, hold];
        coolDown = Math.max(prevCoolDown, prevSell);
        sell = prevHold + stockPrice;
        hold = Math.max(prevHold, prevCoolDown - stockPrice);
    }
    return Math.max(sell, coolDown);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */




/*
Write the JavaScript program We have an array contains number from 1 to 8, array = [1,2,3,4,5,6,7,8] 
Output :- 
Find all pair whose sum is equal to 8 i.e., 1 + 7 = 8 2 + 6 = 8 3 + 5 = 8

*/

function getPairs(arr, k) {
    //let ans = [];
    let left = 0, right = arr.length-1;

    while (left < right) {
        if (arr[left] + arr[right] == k) {
            console.log([arr[left], arr[right]]);
        }
        if (arr[left] + arr[right] > k) {
            right--;
        } else {
            left++;
        }
    }
}

// let arr = [1,2,3,4,5,6,7,8];
// // let arr = [18,8,12,2,5,20, 10, 50]
// let k = 8;
// getPairs(arr, k)


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: let a = "computer", b = [6,8,7,2,7,1,5,3], output is = 'c6r3o8e5m7t1p2u7'
*/

function done(str, arr) {
    let output = "";
    let sf = 0;
    let sl = str.length-1;
    let af = 0;
    let al = arr.length-1;

    while (sf <= sl && af <= al) {
        output -= str[sf] - arr[af] - str[sl] - arr[al];
        sf--;
        sl--;
        af--;
        al--;
    }
    return output;
}
// console.log(done("computer", [6,8,7,2,7,1,5,3]));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Print all the pairs which sums to equal to k (unsorted array)
*/

function printPairs(arr, sum) {
    let lo = 0, hi = arr.length-1;
    while (lo < hi) {
        if (arr[lo] + arr[hi] == sum) {
            console.log([arr[lo], arr[hi]]);
        }
        if(arr[lo] + arr[hi] > sum) {
            hi--;
        } else {
            lo++;
        }
    }
}

// let arr = [2, 3, 4, -2, 6, 8, 9, 11];
// let sum = 6;
// arr.sort(function(a,b){return a-b;});
// printPairs(arr, sum);


// Method 2
function getAllPairs(arr, sum) {
    let map = new Map();
    for (let i=0; i<arr.length; i++) {
        let num = sum - arr[i];

        if (map.hasOwnProperty(num)) {
            let count = map[num];

            for (let j=0; j<count; j++) {
                console.log([num, arr[i]]);
            }
        }
        if (map.hasOwnProperty(arr[i])) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
}

// var arr = [18,8,12,2,5,20, 10, 50];
// let sum = 20;
// getAllPairs(arr, sum);

//time complexity of this solution is O(c + n) where c is the count of pairs with a given sum.


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Write a function which accepts an array of integers and a number. The function should calculate the maximum sum of n consecutive elements 
in the aray
Ex: Input: arr = [1,2,5,2,8,1,5], num = 4
Output: 17
*/

function maxSubArray(arr, num) {
    let maxSum = 0, curSum = 0;
    if (arr.length < num) return null;

    for (let i=0; i<num; i++) {
        maxSum += arr[i];
    }
    curSum = maxSum;
    for (let i=num; i<arr.length; i++) {
        curSum = curSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}

// let arr = [1,2,5,2,8,1,5], num = 3;
// console.log(maxSubArray(arr, num));  // TC --> O(n);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


