
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


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 7 - Check Permutation
For a given two strings, 'str1' and 'str2', check whether they are a permutation of each other or not.
Sample Input 1: str1 : abcde,  str2 : baedc
Sample Output 1: true
Sample Input 2: str1 : abc , str2 : cbd
Sample Output 2: false
*/

// Using Sorting  (Time Complexity - O(nlogn), Auxiliary Space - O(1))
function checkPermutation(str1, str2){
    let n1 = str1.length;
    let n2 = str2.length;
    
    if(n1 != n2) return false;

    let ch1 = str1.split("");
    let ch2 = str2.split("");

    ch1.sort();
    ch2.sort();

    for(let i=0; i<n1; i++){
        if(ch1[i] != ch2[i]){
            return false;
        }
    }
    return true;
}
console.log(checkPermutation("nnnn", "nnnn"));


// Using Count Characters (Time Complexity - O(n), Auxiliary Space - O(n))

function arePermutation(str1, str2){
    let count1 = Array[256];
    let count2 = Array[256];

    count1.fill(0);
    count2.fill(0);

    for(let i=0; i<str1.length && i<str2.length; i++){
        count1[str1[i]]++;
        count2[str2[i]]++;
    }

    if(str1.length != str2.length) return false;

    for(let i=0; i<256; i++){
        if(count1[i] != count2[j]){
            return false;
        }
    }
    return true;
}
console.log(checkPermutation("nnnn", "nnnm"));


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

/*
PROB 8 - Count and Say
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
Example:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
*/

var countAndSay = function(n) {
    if(n == 1) return '1'
    let s = countAndSay(n-1)
    let count = 0
    let s1 = ''
    for(let i=0; i<s.length; i++){
        count++
        if(s[i] != s[i+1]){
            s1 = s1 + count + s[i]
            count = 0
        }
    }
    
    return s1
};


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
PROB 9 - Reverse Words in a String
Given an input string s, reverse the order of the words.
Example:
Input: s = "the sky is blue"
Output: "blue is sky the"
*/

// Method 1
var reverseWords = function(s) {
    let arr = s.trim().split(" ");
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length) {
      arr[j++] = arr[i];
    }
  }
  arr = arr.slice(0, j);
  return arr.reverse().join(" ");
};


// Method 2
function revWords(str){
    const reverseWords = (s) => s.split(" ").filter(res => res.trim()).reverse().join(" ");
    return reverseWords;
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
Prob: Find All Anagrams in a String
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/

var findAnagrams = function(s, p) {
    const output = [];
    const neededChars = {};

    for(let char of p){
        if(char in neededChars){
            neededChars[char]++;
        } else {
            neededChars[char] = 1;
        }
    }

    let left=0, right=0, count = p.length;

    while(right < s.length){
        if(neededChars[s[right]] > 0) count--;

        neededChars[s[right]]--;
        right++;

        if(count === 0) output.push(left);

        if(right - left == p.length){
            if(neededChars[s[left]] >= 0) count++;
            neededChars[s[left]]++;
            left++;
        }
    }
    return output;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */








