
/*
PROB 1 - Sliding Window Maximum
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.
Example:

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

// BRUTE FORCE METHOD

var maxSlidingWindow = function(nums, k) {
    let n=nums.length
    let result=[]
    for(let i=0;i<n-k+1;i++){
        let max=nums[i]
        for(let j=i;j<i+k;j++){
            if(max<nums[j]){
                max=nums[j]
            }
            
        }
        result.push(max)
    }
   return result
}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 2- First Missing Positive
Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses constant extra space.
Example :
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.
*/

var firstMissingPositive = function(nums) {
    let setData = new Set(nums);
    for(let i=1; i<=setData.size; i++){
        if(!setData.has(i))
            return i;
    }
    return setData.size + 1;
};


/* PROB 3 - Find Minimum in Rotated Sorted Array II (Leetcode Array Hard)
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:
[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.
You must decrease the overall operation steps as much as possible.
Example:
Input: nums = [1,3,5]
Output: 1
*/

var findMin = function(nums) {
    if(nums.length === 1 || nums[0] < nums[nums.length-1]) return nums[0];
    let pivotInt = getPivot(nums);
    if(pivotInt === nums.length-1){
        return nums[0];
    }
    return nums[pivotInt+1];
};

var getPivot = function(arr){
    let start = 0, end = arr.length-1;
    while(start < end){
        let mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] > arr[mid + 1]){
            return mid;
        }
        
        else if(arr[mid] < arr[mid-1]){
            return mid-1;
        }
        
        else if(arr[mid] < arr[end]){
            end = mid;
        }
        
        else if(arr[mid] === arr[end]){
            end--;
        }
        
        else {
            start = mid;
        }
    }
    return arr.length-1;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Minimum Window Substring
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
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



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

