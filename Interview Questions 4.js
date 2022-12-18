
/*
Prob: Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array 
where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0, right = arr.length-1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg === num){
            return true
        } else if (avg < num) {
            left++;
        } else {
            right--;
        }
    }
    return false;
  };


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

*/

// Iterative
function isSubSequence(str1, str2) {
    let i=0, j=0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}


// Recursive but not O(1) Space
function isSubSeq(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubSeq(str1.slice(1), str2.slice(1));
    return isSubSeq(str1, str2.slice(1));
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of 
the number passed to the function.
Ex: maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
*/

function maxSumSubArr (arr, num) {
    if (arr.length < num) return null;
    let maxSum = 0;
    for (let i=0; i<num; i++) {
        maxSum += arr[i];
    }
    let curSum = maxSum;
    for (let i=num; i<arr.length; i++) {
        curSum = curSum + arr[i] - arr[i-num];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}
// let arr = [1,4,2,10,23,3,1,0,20], num = 4;
// console.log(maxSumSubArr(arr, num));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the 
function. If there isn't one, return 0 instead.
Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
*/

function minSubArrayLen(arr, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    
    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        }
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
*/

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i=0; i<str.length; i++){
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i-start+1);
        seen[char] = i+1;
    }
    return longest;
};  


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

