
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
Prob: 
*/


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 
*/


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 
*/


