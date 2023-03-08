
// Sliding Window Technique

/*
Prob: Longest Substring Without Repeating Characters
Given a string s, find the length of the longest substring without repeating characters.
Example 1: Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }
    let start = 0;
    let end = 0;
    let maxLength = 0;
    
    const uniqueChars = new Set();
    while(end < s.length){
        if(!uniqueChars.has(s[end])){
            uniqueChars.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueChars.size);
        } else {
            uniqueChars.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find All Anagrams in a String
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.
Example 1:

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


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Minimum Window Substring
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the 
empty string "". The testcases will be generated such that the answer is unique.

Example 1: Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
*/

var minWindow = function(s, t) {
    let min = "", left = 0, right = -1;
    let map = {};
    t.split('').forEach(element => {
        if(map[element] == null) map[element] = 1;
        else map[element] = map[element] + 1;
    });

    let count = Object.keys(map).length;
    while (right <= s.length) {
        if (count == 0) {
            let current = s[left];
            if(map[current] != null) map[current]++;
            if(map[current] > 0) count++;

            let temp = s.substring(left, right+1);
            if(min == "") min = temp;
            else min = min.length < temp.length ? min : temp;
            left++;
        } else {
            right++;
            let current = s[right];
            if (map[current] != null) map[current]--;
            if (map[current] == 0) count--;
        }
    }
    return min;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */




/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

