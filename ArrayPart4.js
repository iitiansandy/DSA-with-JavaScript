
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
Prob - 

*/



