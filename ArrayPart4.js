
/*
Prob - Squares of a Sorted Array
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
Prob - Sort Integers by The Number of 1 Bits
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
Prob - Shortest Distance to a Character
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
Prob - Kth Distinct String in an Array
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
Prob - 

*/