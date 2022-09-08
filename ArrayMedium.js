

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
PROB 16 - Kth Largest Element in an Array
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


