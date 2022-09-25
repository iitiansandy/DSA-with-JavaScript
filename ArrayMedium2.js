/*
PROB 1: Rotate Array
Given an array, rotate the array to the right by k steps, where k is non-negative.
Example:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

// Method 1
var rotate = function(nums, k) {
    const actualRotations = k % nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, actualRotations-1);
    reverse(nums, actualRotations, nums.length-1);
};

var reverse = function(nums, left, right){
    while(left < right){
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}

// Method 2
const reverseArray = (nums,start,end) => {
    while (start < end){
        [nums[start],nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
};

const rotate = (nums,k) => {
    k %= nums.length;
    nums.reverse();
    reverseArray(nums,0, k -1);
    reverseArray(nums, k, nums.length -1);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 2: Majority Element II
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
Example:
Input: nums = [3,2,3]
Output: [3]
*/

var majorityElement = function(nums) {
    let obj = {};
    let res = [];
    let count = Math.floor(nums.length/3);
    
    for(let i=0; i<nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
    }
    
    Object.entries(obj).forEach(e => {
        if(e[1] > count)
            res.push(e[0])
    })
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 3: Summary Ranges
ou are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one 
of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b

Example:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
*/

var summaryRanges = function(nums) {
    let res = [];
    let j=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i-1] !== nums[i]-1 && nums[i]+1 === nums[i+1])
            res[j] = nums[i].toString() + '->';
        if(nums[i]+1 !== nums[i+1]){
            res[j] ? res[j] += nums[i].toString() : res[j] = nums[i].toString();
            j++;
        }
    }
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 3: Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
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


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 3: Search a 2D Matrix II
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
*/

var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    for(let i=0; i<rows; ++i){
        let left = 0, right=cols-1;
        while(left <= right){
            let mid = Math.floor(left+(right - left)/2);
            if(matrix[i][mid] === target) return true;
            if(matrix[i][mid] > target)
                right = mid-1;
            else
                left = mid+1;
        }
    }
    return false;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
PROB 3: Minimum Amount of Time to Collect Garbage
You are given a 0-indexed array of strings garbage where garbage[i] represents the assortment of garbage at the ith house. garbage[i] consists only of 
the characters 'M', 'P' and 'G' representing one unit of metal, paper and glass garbage respectively. Picking up one unit of any type of garbage takes 1 
minute.
You are also given a 0-indexed integer array travel where travel[i] is the number of minutes needed to go from house i to house i + 1.
There are three garbage trucks in the city, each responsible for picking up one type of garbage. Each garbage truck starts at house 0 and must visit 
each house in order; however, they do not need to visit every house.
Only one garbage truck may be used at any given moment. While one truck is driving or picking up garbage, the other two trucks cannot do anything.
Return the minimum number of minutes needed to pick up all the garbage.

Example 1:

Input: garbage = ["G","P","GP","GG"], travel = [2,4,3]
Output: 21
Explanation:
The paper garbage truck:
1. Travels from house 0 to house 1
2. Collects the paper garbage at house 1
3. Travels from house 1 to house 2
4. Collects the paper garbage at house 2
Altogether, it takes 8 minutes to pick up all the paper garbage.
The glass garbage truck:
1. Collects the glass garbage at house 0
2. Travels from house 0 to house 1
3. Travels from house 1 to house 2
4. Collects the glass garbage at house 2
5. Travels from house 2 to house 3
6. Collects the glass garbage at house 3
Altogether, it takes 13 minutes to pick up all the glass garbage.
Since there is no metal garbage, we do not need to consider the metal garbage truck.
Therefore, it takes a total of 8 + 13 = 21 minutes to collect all the garbage.
*/

const garbageCollection = (garbage, travel) => {
    let travelTime = 0
    garbage = garbage.reverse()
    
    for (const type of ['G', 'P', 'M']) {
      const lastHouseWithGarbage = garbage.findIndex(house => house.includes(type))
      
      if (lastHouseWithGarbage === -1) {
        continue
      }
  
      travelTime += travel.slice(0, garbage.length - lastHouseWithGarbage - 1).reduce((acc, num) => acc + num, 0)
    }
  
    return garbage.join('').length + travelTime
  };


  /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Partition Array According to Given Pivot
You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

Every element less than pivot appears before every element greater than pivot.
Every element equal to pivot appears in between the elements less than and greater than pivot.
The relative order of the elements less than pivot and the elements greater than pivot is maintained.
More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj. Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.
Return nums after the rearrangement.

Example:
Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.
*/

var pivotArray = function(nums, pivot) {
    let left = [];
    let right = [];
    let center = [];
    
    for(let i=0; i<nums.length; i++){
        if(nums[i] < pivot){
            left.push(nums[i]);
        } else if(nums[i] > pivot){
            right.push(nums[i]);
        } else {
            center.push(nums[i]);
        }
    }
    return [...left, ...center, ...right];
};



