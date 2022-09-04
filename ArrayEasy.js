
/*
PROB 1 - TWO SUM
Given an array of integers nums and an integer target, return indices of the two 
numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)) {
            return [i, map.get(num2)];
        }
        map.set(num1, i);
    }
};

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 2 - REMOVE DUPLICATES
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place 
such that each unique element appears only once. The relative order of the elements should be kept the same.
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeDuplicates = function (nums) {
    let index = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[index++] = nums[i + 1];
        }
    }
    return index;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 3 - PLUS ONE
You are given a large integer represented as an integer array digits, where each digits[i] 
is the ith digit of the integer. The digits are ordered from most significant to least significant in 
left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        }
        else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
PROB 4 - MERGE SORTED ARRAY
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be 
merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/

var merge = function (nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    let i = m + n - 1;

    while (second >= 0) {
        let fVal = nums1[first];
        let sVal = nums2[second];

        if (fVal > sVal) {
            nums1[i] = fVal;
            i--;
            first--;
        } else {
            nums1[i] = sVal;
            i--;
            second--;
        }
    }
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 5 - PASCAL TRIANGLE
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it
Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

var generate = function (numRows) {
    let pattern = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1);
        row[0] = 1;
        row[row.length - 1] = 1;

        for (let j = 1; j < row.length - 1; j++) {
            let rowAbove = pattern[i - 1];
            row[j] = rowAbove[j] + rowAbove[j - 1];
        }
        pattern[i] = row;
    }
    return pattern;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 6 - SINGLE NUMBER
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
Example 1:
Input: nums = [2,2,1]
Output: 1
*/

var singleNumber = function (nums) {
    let obj = {};

    for (let ele of nums) {
        obj[ele] = obj[ele] + 1 || 1;
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
PROB 7 - MAJORITY ELEMENT
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that 
the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3
*/

var majorityElement = function (nums) {
    let ansIndex = 0, //1
        count = 1,
        l = nums.length;
    for (let i = 0; i < l; i++) {
        if (nums[i] == nums[ansIndex]) {
            count++; //1
        } else {
            count--; //0
        }

        if (count == 0) {
            ansIndex = i;
            count = 1;
        }
    }
    return nums[ansIndex];
}

function isMijority(nums, candidate) {
    let count = 0,
        l = nums.length;
    for (i = 0; i < l; i++) {
        if (nums[i] == candidate) {
            count++;
        }
    }
    if (count > parseInt(l / 2)) {
        return true;
    } else {
        return false;
    }
};



/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
/*
PROB 8 - CONTAINS DUPLICATES
Given an integer array nums, return true if any value appears at least twice in the 
array, and return false if every element is distinct.
Example 1:
Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function (nums) {
    let check = [];
    for (let i = 0; i < nums.length; i++) {
        if (check.includes(nums[i])) {
            return true;
        } else check.push(nums[i]);
    }
    return false;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 9 - MISSING NUMBER
Given an array nums containing n distinct numbers in the range [0, n], return the only number 
in the range that is missing from the array.

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing 
number in the range since it does not appear in nums.
*/

var missingNumber = function (nums) {
    let sum = 0;
    let n = nums.length;
    let total = (n) * (n + 1) / 2;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return (total - sum)
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 10 - MOVE ZEROS
Given an integer array nums, move all 0's to the end of it while maintaining the relative 
order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.
Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function (nums) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num !== 0) {
            nums[index] = num;
            index++;
        }
    }
    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
};

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 11- INTERSECTION OF TWO ARRAYS
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element 
in the result must appear as many times as it shows in both arrays and you may return the result in any order.
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/

var intersect = function (nums1, nums2) {
    let obj = {};
    let result = [];

    for (let i of nums1) {
        if (!obj[i]) {
            obj[i] = 1;
        } else {
            obj[i]++;
        }
    }
    for (let i of nums2) {
        if (obj[i] > 0) {
            result.push(i);
            obj[i]--;
        }
    }
    return (result);
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 12 - Remove Element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The relative order of the elements may be changed.

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

var removeElement = function (nums, val) {
    if (!nums) return 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 13 - 3Sum Closest
Given an integer array nums of length n and an integer target, find three integers in nums such 
hat the sum is closest to target.

Return the sum of the three integers.
You may assume that each input would have exactly one solution.
Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let ans = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        let start = i + 1; end = nums.length - 1;
        while (start < end) {
            const sum = nums[i] + nums[start] + nums[end];
            if (sum > target) {
                end--;
            } else {
                start++;
            }

            if (Math.abs(target - sum) < Math.abs(target - ans)) {
                ans = sum;
            }
        }
    }
    return ans;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 14 - Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Example:
Input: nums = [1,3,5,6], target = 5
Output: 2
*/

var searchInsert = function (nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (nums[mid] > target && nums[mid - 1] < target) return mid;

        if (nums[mid] < target) left = mid + 1;

        else if (nums[mid] > target) right = mid - 1;
    }
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 15 - Running Sum of 1d Array
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
Example :
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/
// Method 1
var runningSum = function (nums) {
    let ans = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        ans[i] = sum;
    }
    return ans;
};


// Method 2
const runSum = nums => {
    let currentSum = 0;
    return nums.map(item => currentSum = item + currentSum)
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 16 - Build Array from Permutation
Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length 
and return it.

A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
Example :
Input: nums = [0,2,1,5,3,4]
Output: [0,1,2,4,5,3]
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
*/

var buildArray = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[nums[i]]);
    }
    return result;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/*
PROB 17 - Concatenation of Array
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
Example :
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
*/

var getConcatenation = function (nums) {
    let ans = [];
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
PROB 18 - Union of Two Arrays
Given two sorted arrays, find their union.
Example:
Input: arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
Output: Union : {1, 2, 3, 4, 5, 6, 7}
*/

function getUnion(arr1, arr2) {
    let unionArr = [...arr1, ...arr2];
    return [...new Set(unionArr)];
}
// console.log(getUnion([4, 9, 5], [9, 4, 9, 8, 4]).sort().reverse());


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
PROB 19 - Intersection of Two Arrays
Given two sorted arrays, find their intersection.
Example:
Input: arr1[] = {1, 3, 4, 5, 7}
       arr2[] = {2, 3, 5, 6} 
Output: Intersection : {3, 5}
*/

// Method 1
function getIntersec(arr1, arr2) {
    const intersectionArr = arr1.filter((currentElement) => {
        return arr2.includes(currentElement);
    });
    return intersectionArr;
}
console.log(getIntersec([1, 3, 4, 5, 7], [2, 3, 5, 6]));

// Method 2
function getIntersection(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    let Intersection = [];
    let i = j = 0;

    while (i < n && j < m) {
        if (arr1[i] == arr2[j]) {
            if (Intersection.length > 0 && Intersection[Intersection.length - 1] == arr1[i]) {
                i++;
                j++;
            }
            else {
                Intersection.push(arr1[i]);
                i++;
                j++;
            }
        }
        else if (arr1[i] < arr2[i])
            i++;
        else
            j++;
    }
    if (!Intersection.length)
        return -1;
    return Intersection;
}
// console.log(getIntersection([1, 3, 4, 5, 7], [2, 3, 5, 6]));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
PROB 20 - Final Value of Variable After Performing Operations
There is a programming language with only four operations and one variable X:
++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.
Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
Example:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
*/

var finalValueAfterOperations = function(operations) {
    let x = 0;
    for(let i=0; i<operations.length; i++){
        if(operations[i].includes('+') ){
            x = x+1;
        }
        else {
            x = x-1;
        }
    }
    return x;
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* 
PROB 21 - Richest Customer Wealth
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth 
that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
Example:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/

var maximumWealth = function(accounts) {
    let maxWealth = 0, temp = 0
    for (i = 0; i<accounts.length; i++, temp = 0) {
        for (j = 0; j<accounts[i].length; j++) {
            temp += accounts[i][j]
        }
        if(temp > maxWealth) {
            maxWealth = temp
        }
    }
    
    return maxWealth
};



