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



