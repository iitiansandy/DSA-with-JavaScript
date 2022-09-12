

/* PROB 1
Container With Most Water
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container. */

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


/*----------------------------------------------------------------------------------------------------------*/


/*PROB 2
3SUM
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.   */

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


/*----------------------------------------------------------------------------------------------------------*/


/*
PROB 3 - Search in Rotated Sorted Array
Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
Example 1:

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

/*----------------------------------------------------------------------------------------------------------*/


/*
PROB 4 - Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/

var searchRange = function(nums, target) {
    if(nums.length===0) return [-1,-1];
    let start = 0, end = nums.length-1;
    let lo=-1, hi=-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        
        if(target<=nums[mid]) end = mid-1;
        else start = mid+1;
    }
    lo = start;
    start=0, end=nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        
        if(target<nums[mid]) end = mid-1;
        else start = mid+1;
    }
    hi=end;
    return lo<=hi?[lo,hi]:[-1,-1];
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 5 - Valid Sudoku
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:
A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

var isValidSudoku = function(board) {
    let row={}, col={}, box={};
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let value = board[i][j];
            if(value !=='.'){
                let boxid=Math.floor(i/3)*3 + Math.floor(j/3);
                if(row[`${i}-${value}`] || col[`${j}-${value}`] || box[`${boxid}-${value}`]){
                    return false;
                }
                row[`${i}-${value}`] = true;
                col[`${j}-${value}`] = true;
                box[`${boxid}-${value}`] = true;
            }
        }
    }
    return true;
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 6 - Permutations
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

var permute = function(nums) {
    if(nums.length===1) return [nums];
    if(nums.length===2) return [
        [nums[0], nums[1]], [nums[1], nums[0]]
        ];
                                
    return nums.flatMap((n)=>{
        return permute(nums.filter(i=>i!=n)).map(i=>[n,...i]);
    });
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 7 - Rotate Image
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
Ex 1 - Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
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


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 8 - Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
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


/*----------------------------------------------------------------------------------------------------------*/


/*
PROB 9 - Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

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

/*
nums[i] = -2  1  -3  4 -1  2  1  -5  4
sum     = -2  1  -2  4  3  5  6   1  5
max     = -2  1   1  4  4  5  6   6  6

TC - O(n)
SC - O(1)       */


/*----------------------------------------------------------------------------------------------------------*/


/*
PROB 10 - Spiral Matrix
Given an m x n matrix, return all elements of the matrix in spiral order.
EX: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
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


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 11 - Jump Game
You are given an integer array nums. You are initially positioned at the array's first index, and each element 
in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.
Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

var canJump = function(nums) {
    let reachable = 0;
    for(let i=0; i<nums.length; i++){
        if(reachable < i){
            return false;
        }
        reachable = Math.max(reachable, i + nums[i]);
    }
    return true;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 12 - Merge Intervals
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6]. */

var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const result = [intervals[0]];
    
    for (let interval of intervals){
        let e1 = result[result.length - 1][1];
        let s2 = interval[0];
        let e2 = interval[1];
        
        if(e1 >= s2){
            result[result.length - 1][1] = Math.max(e1, e2);
        } else {
            result.push(interval);
        }
    }
    return result;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 13 - Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the 
same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
*/

var sortColors = function(nums) {
    let first = 0;
    let last = nums.length - 1;
    let temp;
    for (let i=0; i<=last;){
        let num = nums[i];
        if(num === 0){
            temp = num;
            nums[i] = nums[first];
            nums[first] = temp;
            i++;
            first++;
        } else if(num === 2){
            temp = num;
            nums[i] = nums[last];
            nums[last] = temp;
            last--;
        } else {
            i++;
        }
    }
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 14 - Subsets
Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/

var subsets = function(nums) {
    //global result
    const ans = [];
    
    //dfs recursive helper
    const dfs = (i, nums, slate) => {
        //base case
        if(i === nums.length){
            ans.push(slate.slice());
            return;
        }
        //dfs recursive case
        
        //exclude
        dfs(i+1, nums, slate);
        
        //include
        slate.push(nums[i]);
        dfs(i+1, nums, slate);
        slate.pop();
    }
    dfs(0, nums, []);
    return ans;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 15 - Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

*/

var longestConsecutive = function(nums) {
    if(nums == null || nums.length === 0) return 0;
    
    const set = new Set(nums);
    let max = 0;
    for(let num of set){
        if(set.has(num-1)){
            continue;
        }
        let currNum = num;
        let currMax = 1;
        
        while (set.has(currNum + 1)){
            currNum++;
            currMax++;
        }
        max = Math.max(max, currMax);
    }
    return max;
};



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 15 - Combination Sum
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where 
the chosen numbers sum to target. You may return the combinations in any order.
The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of 
the chosen numbers is different.
It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

Example:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
*/

var combinationSum = function(candidates, target) {
    //global result
    const result = [];
    candidates.sort((a,b)=>a-b);
    
    //dfs recursive helper
    const dfs = (i, candidates, target, slate) => {
        //backtracking case
        if(target < 0) return;
        
        // base case
        if(target === 0){
            result.push(slate.slice());
            return;
        }
        
        // dfs recursive case
        for(let j=i; j<candidates.length; j++){
            slate.push(candidates[j]);
            dfs(j, candidates, target - candidates[j], slate);
            slate.pop();
        }
    }
    dfs(0, candidates, target, []);
    return result;
};



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 15 - Combination Sum II
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the 
candidate numbers sum to target.
Each number in candidates may only be used once in the combination.
Note: The solution set must not contain duplicate combinations.

Example :
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
*/

var combinationSum2 = function(candidates, target) {
    candidates.sort();
    let result = [];
    
    function backtrack(arr=[], sum=0, start=0){
        if(sum > target) return;
        
        if(sum===target) result.push(arr);
        
        for(let i=start; i<candidates.length; i++){
            if(i !== start && candidates[i]===candidates[i-1]) continue;
            
            backtrack(arr.concat(candidates[i]), sum+candidates[i], i+1);
        }
    }
    backtrack();
    return result;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 16 - Pascal's Triangle II
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it.
Example :
Input: rowIndex = 3
Output: [1,3,3,1]
*/

var getRow = function(rowIndex) {
    let result = [];
    for(let i=0; i<=rowIndex; i++){
        result[i] = [];
        result[i][0] = 1;
        
        for(let j=1; j<i; j++){
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
        result[i][i] = 1;
    }
    return result[rowIndex];
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 17 - Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
You must solve it in O(n) time complexity.
Example :
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
*/

var findKthLargest = function(nums, k) {
    function maxHeap(size, i){
        let left = 2*i + 1;
        let right = 2*i + 2;
        let largestIndex = i;
        
        if(left < size && nums[left] > nums[largestIndex]){
            largestIndex = left;
        }
        
        if(right < size && nums[right] > nums[largestIndex]){
            largestIndex = right;
        }
        
        if(largestIndex != i){
            [nums[largestIndex], nums[i]] = [nums[i], nums[largestIndex]];
            maxHeap(size, largestIndex);
        }
    }
    
    for(let i=parseInt(nums.length/2); i>=0; i--){
        maxHeap(nums.length, i);
    }
    
    let ans = [];
    for(let i=nums.length-1; i>=0; i--){
        if(ans.length == k){
            break;
        }
        ans.push(nums[0]);
        [nums[i], nums[0]] = [nums[0], nums[i]];
        maxHeap(i, 0);
    }
    return ans.at(-1);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 18 - Remove Duplicates from Sorted Array II
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
The relative order of the elements should be kept the same.

Example:
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeDuplicates = function(nums) {
    let i = nums.length;
    while(i > 1){
        if(nums[i] == nums[i-2]){
            nums.splice(i,1)
        }
        else {
            i--;
        }
    }
    return nums.length;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 19 - 4Sum
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

const fourSum = function(nums, target) {
    const outputArray = [];
    nums = nums.sort((a, b) => a - b);
    for (let k = 0; k < nums.length - 3; ++k) {
      const currEleOne = nums[k];
      if (k > 0 && nums[k] === nums[k - 1]) {
        continue;
      }
      search_triplets(nums, k + 1, target - currEleOne, currEleOne, outputArray);
    }
    return outputArray;
  };
  
  // one layer deep
  const search_triplets = function(nums, startIndexOne, targetOne, eleOne, outputArray) {
    for (let i = startIndexOne; i < nums.length - 2; ++i) {
      const currEleTwo = nums[i];
      if (i > startIndexOne && nums[i] === nums[i - 1]) {
        continue;
      }
      search_doubles(nums, i + 1, targetOne - currEleTwo, eleOne, currEleTwo, outputArray);
    }
  }
  
  // two layers deep
  const search_doubles = function(nums, startIndexTwo, targetTwo, eleOne, eleTwo, outputArray) {
    let left = startIndexTwo,
      right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] === targetTwo) {
        outputArray.push([eleOne, eleTwo, nums[left], nums[right]]);
        ++left;
        --right;
        while (left < right && nums[left] === nums[left - 1]) {
          ++left;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          --right;
        }
      } else if (nums[left] + nums[right] < targetTwo) {
        ++left;
      } else if (nums[left] + nums[right] > targetTwo) {
        --right;
      }
    }
  }


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 19 - Median of Two Sorted Arrays
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
Example :
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
*/

var findMedianSortedArrays = function(nums1, nums2) {
    let c = nums1.concat(nums2);
    c = c.sort((a,b) => a-b);
    if(c.length % 2 == 0){
        let mid = c.length/2;
        console.log(c[mid-1] + c[mid]);
        return (c[mid-1] + c[mid])/2;
    }
    return c[(c.length-1)/2];
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 20 - Search in Rotated Sorted Array II
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], 
nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and 
become [4,5,6,6,7,0,1,2,4,4].
Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
You must decrease the overall operation steps as much as possible.
Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
*/

var search = function(nums, target) {
    let left = 0, right = nums.length -1; 
    while (left <= right) {
        if (nums[left] === nums[right]) {
            const result = nums.indexOf(target);
            if (result !== -1) return true;
            return false;
        }
        let mid = Math.floor((left+right)/2);
        if (nums[mid] === target) return true;
        if (nums[mid] >= nums[left]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 21 - Insert Interval
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval 
and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of 
another interval.
Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping 
intervals (merge overlapping intervals if necessary).
Return intervals after the insertion.
Example:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
*/

var insert = function(intervals, newInterval) {
    intervals.push([...newInterval]);
    intervals.sort((a,b) => a[0] - b[0]);
    let prev;
    for (let i=0; i<intervals.length; i++) {
        if (!prev) {
            prev = intervals[i];
            continue;
        }
        if (intervals[i][1] <= prev[1]) {
            intervals.splice(i,1);
            i--;
            continue;
        }
        if (intervals[i][0] <= prev[1]) {
            intervals[i-1][1] = intervals[i][1];
            intervals.splice(i,1);
            i--;
            prev = intervals[i];
            continue;
        }
        prev = intervals[i];
    }
    return intervals;
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 22 - Set Matrix Zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
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


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 23 - Single Number II
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.
Example :
Input: nums = [2,2,3,2]
Output: 3
*/

var singleNumber = function(nums) {
    let obj = {};
    for(let ele of nums){
        (obj[ele]? obj[ele]++ : obj[ele]=1);
    }
    for(let ele in obj){
        if(obj[ele] === 1){
            return ele;
        }
    }
    
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 24 - Spiral Matrix II
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
*/

var generateMatrix = function(n) {
    let result = [];
    // creating two dimensional array
    for (var i = 0; i < n; i++) {
      result[i] = new Array(n);
    }
    let val = 1;
 
    let rowBeg = 0
    let rowEnd = n - 1
    let colBeg = 0
    let colEnd = n - 1
    
    while (rowBeg <= rowEnd && colBeg <= colEnd) {
        for (let i = colBeg; i <= colEnd; i++) {
            result[rowBeg][i] = val++;
        }
        rowBeg++
        for (let i = rowBeg; i <= rowEnd; i++) {
             result[i][colEnd] = val++;
        }
        colEnd--
        if (rowBeg <= rowEnd) {
            for (let i = colEnd; i >= colBeg; i--) {
                result[rowEnd][i] = val++;
            }
            rowEnd--
        }
        
        if (colBeg <= colEnd) {
            for (let i = rowEnd;i >= rowBeg; i--) {
                 result[i][colBeg] = val++;
            }
            colBeg++
        }
    }
    return result
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 24 - Subsets II
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.
Example:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
*/

function findSubSet(nums, result, start){
    if(start === nums.length) return result;
    const temp = result;
    result = [];
    for(let i=0; i<temp.length; i++){
        if(temp[i][temp[i].length-1] !== nums[start]){
            result.push([...temp[i]]);
        }
        result.push([...temp[i].concat(nums[start])]);
    }
    return findSubSet(nums, result, ++start);
}
var subsetsWithDup = function(nums) {
    return findSubSet(nums.sort((a,b)=>a-b), [[]], 0);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 25 - Search a 2D Matrix
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
Example: Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
*/

var searchMatrix = function(matrix, target) {
    for (var i = 0; i< matrix.length; i++) {
        if(matrix[i].includes(target)) {
            return true
        }
    }
    return false
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


// PROB 26 - Sort 0s and 1s in a given array.
// Method 1
function sort01(arr){
    let current = 0;
    let count0 = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === 0){
            count0++;
        }
    }
    let count1 = arr.length - count0;

    while(count0 > 0){
        arr[current] = 0;
        count0--;
        current++;
    }

    while(count1 > 0){
        arr[current] = 1;
        count1--;
        current++;
    }
    return arr;
}
// const arr = [0,1,0,1,1,0,0,1,0,1,0];
// console.log(sort01(arr));


// Method 2
function sortZerosOnes(arr){
    let left = 0, right = arr.length-1;
    while(left < right){
        // if current value at left is 0 then it is at correct position we don't need to do anything.
        // this loop break if and only if arr[left] is 1 or left >= right.
        while(arr[left] === 0){
            left++;
        }
        // if current value at left is 1 then it is at correct position we don't need to do anything.
        // this loop break if and only if arr[right] is 0 or left >= right.
        while(arr[right] === 1 && left < right){
            right--;
        }
        // if already sorted do nothing else swap left element with right
        // if(left < right)
        if(left < right){
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }
    return arr;
}
// const arr = [0,1,0,1,1,0,0,1,0,1,0];
// console.log(sort01(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* PROB 27 - ELEMENT WITHOUT PAIR 
In an array, find the elements without pair 
Example: Input: [1,2,1,3,1,2,3,4,4,5,6,7,8,8]
Output: []
*/

function withoutPair(arr){
    let map = new Map();
    for(let curr of arr){
        // if curr element value found in array
        if(map.get(curr)){
            // increment the frequency count 1.
            map.set(curr, map.get(curr) + 1);
        } else {
            map.set(curr, 1);
        }
    }
    for(let val  of map){
        //console.log(val)
        if(val[1] % 2 === 1){
            console.log("Element without pair is: ", val[0])
        }
    }
}
// withoutPair([1,2,1,3,1,2,3,4,4,5,6,7,8,8]);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* PROB 28 - MAX SUM OF THREE CONSECUTIVE ELEMENTS
Write a function to calculate the max sum of three consecutive elements in an array
*/

// Method 1
function maxSum(arr){
    if(arr.length < 3) return;

    let currMax = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i] + arr[i+1] + arr[i+2] > currMax){
            currMax = arr[i] + arr[i+1] + arr[i+2];
        }
    }
    return currMax;
}
// console.log(maxSum([3,5,1,6,7,8,9,7,6,5,4,3,4]));


// Method 2

function max3Sum(arr, k){
    if(arr.length < k) return;

    let currMax = -Infinity;
    for(let i=0; i<arr.length-k; i++){
        let sum = 0;
        for(let j=i; j<k+i; j++){
            sum += arr[j];
        }
        if(sum > currMax){
            currMax = sum;
        }
    }
    return currMax;
}
// console.log(max3Sum([3,5,1,6,7,8,9,7,6,5,4,3,4], 3));


// Method 3
function maxSumOptimized(arr,k){
    if(arr.length < k) return;
    let currMax = -Infinity;
    let totalSum = 0;
    let leftWindowItemSum = 0;

    for(let i = 0; i<k; i++){
        totalSum += arr[i];
    }
    currMax = totalSum;
    for(let i=k; i<arr.length; i++){
        leftWindowItemSum += arr[i-k];
        totalSum += arr[i];
        if(totalSum - leftWindowItemSum > currMax){
            currMax = totalSum - leftWindowItemSum;
        }
    }
    return currMax;
}
// console.log(maxSumOptimized([3,5,1,6,7,8,9,7,6,5,4,3,4, 10, 10, 10], 3));





