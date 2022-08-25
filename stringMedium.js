
/* 
PROB 1
Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    let start = 0, end = 0, maxLength = 0;
    
    const uniqueChars = new Set();
    while (end < s.length){
        if(!uniqueChars.has(s[end])){
            uniqueChars.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChars.size)
        } else {
            uniqueChars.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 2 - Longest Palindromic Substring
Given a string s, return the longest palindromic substring in s.
Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
 */

var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    let start = 1, maxLength = 1;
    
    function expandAroundCenter(left, right){
        while(s[left] === s[right] && left >= 0 && right < s.length){
            if(right - left + 1 > maxLength){
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }
    for(let i=0; i<s.length; i++){
        expandAroundCenter(i-1, i+1);
        expandAroundCenter(i, i+1);
    }
    return s.substring(start, start+maxLength);
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 3 - Letter Combinations of a Phone Number
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.
Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    
    const result = [];
    const obj = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const dfs = (i, digits, slate) => {
        if(i === digits.length){
            result.push(slate.join(''));
            return;
        }
        let chars = obj[digits[i]];
        for(let char of chars){
            slate.push(char);
            dfs(i+1, digits, slate);
            slate.pop();
        }
    }
    dfs(0, digits, []);
    return result;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 4 - Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
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


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 5 -  Contains Duplicate II
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the 
array such that nums[i] == nums[j] and abs(i - j) <= k.
Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true
*/

var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            const j = map.get(nums[i]);
            if(Math.abs(j-i) <= k){
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 6 - Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
*/

var generateParenthesis = (n)=> {
    const solution = [];
    
    const generateCombo = (leftPCount, rightPCount, partial) => {
        if(leftPCount > rightPCount) return;
        if(!leftPCount && !rightPCount) solution.push(partial);
        if(leftPCount > 0) generateCombo(leftPCount-1, rightPCount, partial + '(');
        if(rightPCount > 0) generateCombo(leftPCount, rightPCount-1, partial + ')');
    }
    generateCombo(n,n,'');
    return solution;
};




