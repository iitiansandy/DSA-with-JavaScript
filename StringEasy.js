
/*

PROB 1 - Roman to Integer
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. 
The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, 
the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, 
which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3
Explanation: III = 3.
*/

var romanToInt = function(s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    let result = 0;
    for(let i=0; i<s.length; i++){
        let current = map[s[i]];
        let next = map[s[i+1]];
        
        if(current < next){
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};

/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 2 - Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    if(strs.length === 1) return strs[0];
    
    strs.sort((a,b)=>b.length - a.length);
    const shortest = strs.pop();
    let i=0;
    for(; i<=shortest.length; i++){
        const prefix = shortest.substring(0, i+1);
        if(!strs.every(s=>s.startsWith(prefix))) break;
    }
    return shortest.substring(0,i)
};

/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 3 - Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
Example 1:
Input: s = "()"
Output: true
*/

var isValid = function(s) {
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    
    let ans = [];
    
    for(let char of s){
        if(obj[char]){
            ans.push(obj[char]);
        } else {
            if(ans.pop() !== char) return false;
        }
    }
    return (!ans.length);
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 4 - Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

var isPalindrome = function(s) {
    let str1 = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    let str2 = str1.split("").reverse().join("");
    return str1 === str2;
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 5 - Excel Sheet Column Number
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
For example:
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
Example 1:
Input: columnTitle = "A"
Output: 1
*/

var titleToNumber = function(columnTitle) {
    const alphabet = ["-","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y", "Z"];
    let res = 0
    
    for(let i=0, j=columnTitle.length-1; i<columnTitle.length; i++, j--){
        res = res + ( alphabet.indexOf(columnTitle[j]) * Math.pow(26, i) )
    }
    
    return res
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 6 - Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
*/

var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let count = {};
    
    let N = s.length;
    for(let i=0; i<N; i++){
        if(!count[s[i]]) count[s[i]]=0;
        if(!count[t[i]]) count[t[i]]=0;
        
        count[s[i]]++;
        count[t[i]]--;
    }
    for (let ch in count){
        if(count[ch] != 0) return false;
    }
    return true;
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 7 - Reverse String
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    while(start<=end){
        let temp = "";
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 8 - First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:
Input: s = "leetcode"
Output: 0
*/

var firstUniqChar = function(s) {
    const charCount = {};
    for(let i=0; i<s.length; i++){
        let char = s[i];
        charCount[char] = charCount[char] + 1 || 1;
    }
    for (let i=0; i<s.length; i++){
        let char = s[i];
        if(charCount[char] === 1){
            return i;
        }
    }
    return -1;
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 9 - Fizz Buzz
Given an integer n, return a string array answer (1-indexed) where:
answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
Example 1:
Input: n = 3
Output: ["1","2","Fizz"]
*/

var fizzBuzz = function(n) {
    let result = [];
    for(let i=1; i<=n; i++){
        if(i%15===0){
            result.push("FizzBuzz");
        } else if(i%5===0){
            result.push("Buzz");
        } else if(i%3===0){
            result.push("Fizz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 10 - Find the K-Beauty of a Number
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:
It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Example: Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2.
 */


var divisorSubstrings = function(num, k){
    let start = 0;
    let count = 0;
    let strNum = "" + num;

    for(let end = 0; end < strNum.length; end++){
        if(end >= k-1){
            const number = Number(strNum.split("").slice(start, end +1).join(""));
            if(num % number === 0) count++;
            start++;
        }
    }
    return count;
}



/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 10 - Substrings of Size Three with Distinct Characters
A string is good if there are no repeated characters.
Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
A substring is a contiguous sequence of characters in a string.

Example 1:
Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".
*/

var countGoodSubstrings = function(s) {
    let goodStrs =0;
    for (let i=0;i<s.length-2;i++){
        if (s.at(i+1)===s.at(i+2)) {
            i++;
        } else if (s.at(i)!== s.at(i+1) && s.at(i) !== s.at(i+2)) {
            goodStrs++;
        }
    }
    
    return goodStrs;
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 10 - Longest Nice Substring
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. 
For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' 
appears, but 'B' does not.
Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. 
If there are none, return an empty string.

Example 1:
Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
*/

var longestNiceSubstring = function(s) {
    if (s.length <= 1) {
        return '';
    }
    
    const sArr = s.split(''); // all chars
    const sSet = new Set(sArr); // unique chars
    
    for (let i=0;i<=s.length-1;i++) {
        if (sSet.has(sArr[i].toLowerCase()) && sSet.has(sArr[i].toUpperCase())) {
            continue;
        }
        
        const subS1 = longestNiceSubstring(s.slice(0, i));
        const subS2 = longestNiceSubstring(s.slice(i+1));
        
        return subS1.length >= subS2.length ? subS1 : subS2;
    }
    
    return s;
};


/*----------------------------------------------------------------------------------------------------------*/

/*
PROB 11 - Remove Consecutive Duplicates
For a given string(str), remove all the consecutive duplicate characters.
Example:
Input String: "aaaa"
Expected Output: "a"

Input String: "aabbbcc"
Expected Output: "abc"
*/

function removeConsecutiveDuplicates(str){
    let ans = "";
    let temp = Number.MIN_VALUE;
    let n = str.length;

    for(let i=0; i<n; i++){
        if(temp != str.charAt(i)){
            ans = ans + str.charAt(i);
            temp = str.charAt(i);
        }
    }
    return ans;
}
console.log(removeConsecutiveDuplicates("aaaa"));