
/*
Prob 1 - Squares of a Sorted Array
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/


// Method 1
var sortedSquares = function(nums) {
    let ans = Array(nums.length);
    let i=0;
    let j=nums.length-1;
    
    for(let k=ans.length-1; k>=0; k--){
        let left = nums[i] ** 2;
        let right = nums[j] ** 2;
        
        if(left > right){
            ans[k] = left;
            i++;
        } else {
            ans[k] = right;
            j--;
        }
    }
    return ans;
};


// Method2
var sortedSquares = function(nums) {
    let arr = [];
    let l=0;
    let r = nums.length-1;
    
    while(l <= r){
        let n1 = nums[l];
        let n2 = nums[r];
        
        if(Math.abs(n1) > Math.abs(n2)){
            arr.push(n1 * n1);
            l++;
        } else {
            arr.push(n2 * n2);
            r--;
        }
    }
    return arr.reverse();
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 2 - Sort Integers by The Number of 1 Bits
You are given an integer array arr. Sort the integers in the array in ascending order by the number of 1's in their binary representation and in case 
of two or more integers have the same number of 1's you have to sort them in ascending order.
Return the array after sorting it.

Example:
Input: arr = [0,1,2,3,4,5,6,7,8]
Output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7]
*/

var sortByBits = function(arr) {
    const bitCount = (n) => {
        let k = Number(n), count = 0;
        
		while(k) { 
			count += (k & 1); 
			k >>= 1;
		}
		
        return count;
    }
	
    const compareBits = (a, b) => {
        let [bitsA, bitsB] = [bitCount(a), bitCount(b)];
		
        return (bitsA === bitsB) ? a - b : bitsA - bitsB; 
    }
    
    return arr.sort(compareBits);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 3 - Shortest Distance to a Character
Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance 
from index i to the closest occurrence of character c in s.
The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Example:
Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
*/

var shortestToChar = function(s, c) {
    let result = [];
    
    for(let i=0; i<s.length; i++){
        let right, left;
        
        // right of i traversal
        for(let r=i; r<s.length; r++){
            if(s[r] === c){
                right = Math.abs(i-r);
                break;
            } else {
                right = Infinity;
            }
        }
        
        // left of i traversal
        for(let l=i; l>=0; l--){
            if(s[l] === c){
                left = Math.abs(i-l);
                break;
            } else {
                left = Infinity;
            }
        }
        result.push(Math.min(left, right));
    }
    return result;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 4 - Kth Distinct String in an Array
A distinct string is a string that is present only once in an array.
Given an array of strings arr, and an integer k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an 
empty string "".
Note that the strings are considered in the order in which they appear in the array.

Example:
Input: arr = ["d","b","c","b","c","a"], k = 2
Output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned. 
*/

// Method 1
var kthDistinct = function(arr, k) {
    let map = {};
    for(let i of arr){
        if(!map.hasOwnProperty(i)){
            map[i]=0;
        }
        map[i]++;
    }
    arr = arr.filter(x => map[x] === 1);
    return arr[k-1] || "";
};


// Method 2
var kthDistinct = function(arr, k) {
    let map = new Map();
    let res = [];
    
    for(let i=0; i < arr.length; i++){
        map.set(arr[i], map.get(arr[i]) + 1 || 1);
    }
    
    for(let [key, value] of map){
        if(value === 1){
            res.push(key);
        }
    }
    return res[k-1] ? res[k-1] : "";
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Minimum Absolute Difference
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

Example :
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
*/

var minimumAbsDifference = function(arr) {
    arr.sort((a,b)=> a-b);
    let result = [];
    let min = Infinity;
    
    for(let i=1; i<arr.length; i++){
        let diff = Math.abs(arr[i-1] - arr[i]);
        if(!result[diff]){
            result[diff] = [];
        }
        result[diff].push([arr[i-1], arr[i]]);
        min = Math.min(min, diff);
    }
    return result[min];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Smallest Index With Equal Value
Given a 0-indexed integer array nums, return the smallest index i of nums such that i mod 10 == nums[i], or -1 if such index does not exist.
x mod y denotes the remainder when x is divided by y.

Example 1:

Input: nums = [0,1,2]
Output: 0
Explanation: 
i=0: 0 mod 10 = 0 == nums[0].
i=1: 1 mod 10 = 1 == nums[1].
i=2: 2 mod 10 = 2 == nums[2].
All indices have i mod 10 == nums[i], so we return the smallest index 0.
*/

var smallestEqual = function(nums) {
    let minNumber = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<nums.length; i++){
        let calc = Math.floor(i/10) * 10;
        let sum = i - calc;
        
        if(nums[i] === sum){
            if(minNumber > i){
                minNumber = i;
            }
        }
    }
    if(minNumber === 9007199254740991){
        return -1;
    } else {
        return minNumber;
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Unique Number of Occurrences
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

Example:
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
*/

var uniqueOccurrences = function(arr) {
    let count = new Map();
    for(let i=0; i<arr.length; i++){
        if(!count.has(arr[i])){
            count.set(arr[i], 1);
        } else {
            let cnt = count.get(arr[i]);
            count.set(arr[i], cnt + 1);
        }
    }
    let values = Array.from(count.values());
    let set = new Set(values);
    return set.size === values.length;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Sort Array By Parity II
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition.

Example:
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
*/

var sortArrayByParityII = function(nums) {
    const output = new Array(nums.length);
    let cursorOdd = 1;
    let cursorEven = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2) {
            output[cursorOdd] = nums[i];
            cursorOdd+=2;
        } else {
            output[cursorEven] = nums[i];
            cursorEven+=2;
        }
    }
    return output;
};


// Method 2
var sortArrayByParityII = function(nums) {
    let i = 0;
    let j = nums.length - 1;
  
    while (i < nums.length) {
      const wantedValue = i % 2;
  
      if (nums[i] % 2 === wantedValue) i++;
      else {
        if (nums[j] % 2 === wantedValue) {
          let temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          i++;
          j = nums.length - 1;
        } else j--;
      }
    }
  
    return nums;
  };


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Check Distances Between Same Letters
You are given a 0-indexed string s consisting of only lowercase English letters, where each letter in s appears exactly twice. You are also given a 
0-indexed integer array distance of length 26.
Each letter in the alphabet is numbered from 0 to 25 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, ... , 'z' -> 25).
In a well-spaced string, the number of letters between the two occurrences of the ith letter is distance[i]. If the ith letter does not appear in s, 
then distance[i] can be ignored.
Return true if s is a well-spaced string, otherwise return false.

Example:
Input: s = "abaccb", distance = [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
Output: true
Explanation:
- 'a' appears at indices 0 and 2 so it satisfies distance[0] = 1.
- 'b' appears at indices 1 and 5 so it satisfies distance[1] = 3.
- 'c' appears at indices 3 and 4 so it satisfies distance[2] = 0.
Note that distance[3] = 5, but since 'd' does not appear in s, it can be ignored.
Return true because s is a well-spaced string.
*/

var checkDistances = function(s, distance) {
    let map = new Map()
    
    for(let i = 0; i < s.length; i++){
        map.has(s[i]) === false ? map.set(s[i], [i]) : map.get(s[i]).push(i) 
    }
  
    for(let [char,[a,b]] of map){
        if (!(b-a-1 === distance[char.charCodeAt() - 97]))  return false 
    }
    
    return true
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Delete Columns to Make Sorted
You are given an array of n strings strs, all of the same length.
The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

abc
bce
cae
Example 1:

Input: strs = ["cba","daf","ghi"]
Output: 1
Explanation: The grid looks as follows:
  cba
  daf
  ghi
Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.
*/

var minDeletionSize = function(strs) {
    let count = 0;
    for(let i=0; i<strs[0].length; i++){
        for(let j=0; j<strs.length-1; j++){
            if(strs[j].charAt(i) > strs[j+1].charAt(i)){
                count++;
                break;
            }
        }
    }
    return count;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Intersection of Multiple Arrays
Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each 
array of nums sorted in ascending order.

Example 1:
Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
*/

// Method 1
var check = function(p,q){
    let output = [];
    for(let i=0; i<p.length; i++){
        if(q.includes(p[i])){
            output.push(p[i]);
        }
    }
    return output;
};

var intersection = function(nums) {
    let arr = [];
    let k = nums[0];
    
    for(i=1; i<nums.length; i++){
        let arr = (check(k,nums[i]))
        if(arr.length > 0){
            k = arr;
        } else {
            return [];
        }
    }
    return k.sort((a,b)=>{
        return a-b;
    });
};


// Method 2
var intersection = function(nums) {
    let result = nums.reduce((acc, current)=>{
        let inter = [];
        for(let i=0; i<current.length; i++){
            if(acc.includes(current[i])){
                inter.push(current[i]);
            }
        }
        return inter;
    });
    
    return result.sort((a,b) => {
        return a-b;
    });
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Find the Difference of Two Arrays
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

Example:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
*/

// Method 1
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1.filter(num => !nums2.includes(num)))
    let set2 = new Set(nums2.filter(num => !nums1.includes(num)));
    
    return [[...set1], [...set2]]
};


// Method 2
var findDifference = function(nums1, nums2) {
    var first=[];
    var second=[];
    for(var i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i])){
            continue;
        }else{
            if(first.includes(nums1[i])){
                continue;
            }else{
                first.push(nums1[i])
            }
        }
    }
    for(var i=0;i<nums2.length;i++){
        if(nums1.includes(nums2[i])){
            continue;
        }else{
            if(second.includes(nums2[i])){
                continue;
            }else{
                second.push(nums2[i])
            }
        }
    }
    return [first,second]
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Sum of Two Integers
Given two integers a and b, return the sum of the two integers without using the operators + and -.

Example 1:
Input: a = 1, b = 2
Output: 3
*/

// Solution 1: Iterative

var getSum = function(a, b) {
    while(b) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}


// Solution 2: Recursive

var getSum = function(a, b) {
    if(b === 0) {
        return a;
    }
    return getSum(a ^ b, (a & b) << 1);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Count Common Words With One Occurrence
Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
Output: 2
Explaination: there are 2 strings that appear exactly once in each of the two arrays.
*/

var countWords = function(words1, words2) {
    let count = 0;
    let obj = {};
    words2.forEach((data) => {
        if(obj[data]){
            obj[data] = obj[data] + 1;
        } else {
            obj[data] = 1;
        }
    });
    
    words1.forEach((item) => {
        if(obj[item] === 1){
            obj[item] =0;
            count++;
        } else if(obj[item] === 0){
            obj[item] = -1;
            count--;
        }
    })
    return count;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob - Maximum Units on a Truck
You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as 
long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.

Example:
Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.
*/

var maximumUnits = function(boxTypes, truckSize) {
    let sortedBoxTypes = boxTypes.sort((a,b)=>b[1]-a[1]);
    let units = 0;
    
    for(let [count, boxVol] of sortedBoxTypes){
        if(truckSize < count){
            units += truckSize * boxVol;
            break;
        }
        units += count * boxVol;
        truckSize -= count;
    }
    return units;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Number of Pairs of Strings With Concatenation Equal to Target
Given an array of digit strings nums and a digit string target, return the number of pairs of indices (i, j) (where i != j) such that the 
concatenation of nums[i] + nums[j] equals target.

Example:

Input: nums = ["777","7","77","77"], target = "7777"
Output: 4
Explanation: Valid pairs are:
- (0, 1): "777" + "7"
- (1, 0): "7" + "777"
- (2, 3): "77" + "77"
- (3, 2): "77" + "77"
*/

var numOfPairs = function(nums, target) {
    let count = 0, i = 0;
    while(i < nums.length){
        for(let j=0; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                count++;
                if(i === j){
                    count--;
                }
            }
        }
        i++;
    }
    return count;
};


// Method 2
var numOfPairs = function(nums, target) {
    let pairs = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(i == j) continue;
            if(nums[i] + nums[j] == target) pairs++;
        }
    }
    return pairs;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example:

Input: ransomNote = "a", magazine = "b"
Output: false
*/

// Method 1
var canConstruct = function(ransomNote, magazine) {
    const map = {};
    for(let letters of magazine) {
        if(!map[letters]) {
            map[letters] = 0;
        }
        map[letters]++;
    }

    for(let letters of ransomNote) {
        if(!map[letters]) {
            return false;
        }
        map[letters]--;
    }
    return true;
};


// Method 2
var canConstruct = function(ransomNote, magazine) {
    let vocab = {};

    for(let letter of magazine) {
        vocab[letter] = ++vocab[letter] || 1;
    }

    for(let letter of ransomNote) {
        if(vocab[letter] === 0 || !vocab[letter]) {
            return false;
        }
        vocab[letter]--;
    }
    return true;
};

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: First Bad Version
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the 
quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You 
should minimize the number of calls to the API.

Example:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
*/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1, end = n;
        while(start < end) {
            let mid = Math.floor(start + (end - start) / 2);
            if(isBadVersion(mid)) {
                end = mid;   // look on left side of mid
            } else {
                start = mid + 1; // look on the right side of mid
            }
        }
        return start;
    };
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Unique Paths
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right 
corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1: Input: m = 3, n = 7
Output: 28
*/


// Method 1 (DP Bottom up tabular)
var uniquePaths = function(m, n) {
    const dp = new Array(m+1).fill(0);
    for(let i=0; i<dp.length; i++){
        dp[i] = new Array(n+1).fill(1);
    }

    dp[m][n] = 1;
    for(let row = m-1; row > 0; row--){
        for(let col = n-1; col > 0; col--){
            dp[row][col] = dp[row+1][col] + dp[row][col+1];
        }
    }
    return dp[1][1];
};


// Method 2 (DP space optimized (there might be even further space optimization!!))
var uniquePaths = function(m, n) {
    const dp = new Array(n+1).fill(1);
    for(let row = m-1; row > 0; row--){
        for(let col = n-1; col > 0; col--){
            dp[col] = dp[col] + dp[col+1];
        }
    }
    return dp[1];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Divide Two Integers
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and 
-2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For 
this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

Example:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
*/

var divide = function(dividend, divisor) {
    if(divisor === 0) return 0;
    if(dividend === 0) return 0;
    if(dividend === -2147483648 && divisor === -1) return 2147483647;

    var isPositive = true;
    if(dividend > 0 !== divisor > 0) isPositive = false;

    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);

    var count = 1;
    result = 0;
    base = divisor;

    while(dividend >= divisor){
        count = 1;
        base = divisor;
        while(base <= (dividend >> 1)) {
            base = base << 1;
            count = count << 1;
        }
        result += count;
        dividend -= base;
    }
    if(!isPositive) result = -result;
    return result; 
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Word Search
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The 
same letter cell may not be used more than once.

Example: Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
*/

// Helper Function
const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;

const checkNeighbors = (board, word, row, col) => {
    // Check exit conditions
    if(!word.length) return true;
    if(isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;

    // Save some stuff
    const curChar = board[row][col];
    const newWord = word.substr(1);

    board[row][col] = 0; // Disable the current character

    // Check if neighbors are fruitful

    const results = checkNeighbors(board, newWord, row+1, col) || 
    checkNeighbors(board, newWord, row-1, col) || 
    checkNeighbors(board, newWord, row, col+1) || 
    checkNeighbors(board, newWord, row, col-1);

    // Enable current character
    board[row][col] = curChar;

    return results;
}

var exist = function(board, word) {
    for(let row=0; row<board.length; row++){
        for(let col=0; col<board[0].length; col++){
            if(checkNeighbors(board, word, row, col)) return true;
        }
    }
    return false;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
