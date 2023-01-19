
/*
Prob 1: Roman to Integer
Example: Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
*/

function romanToInt(str) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;
    for (let i=0; i<str.length; i++) {
        let current = map[str[i]];
        let next = map[str[i+1]];

        if (current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
}
// let str = "MXV";
// console.log(romanToInt(str));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 2: Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
Ex: Input: s = "()"
Output: true
*/

function isValid(str) {
    let obj = {
        "(": ")",
        "{": "}",
        "[": ']'
    };
    let stack = [];
    for (let char of str) {
        if (obj[char]) {
            stack.push(obj[char]);
        } else {
            if (stack.pop() != char) return false;
        }
    }
    return (!stack.length);
}
// let str = "()[]{}";
// console.log(isValid(str));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 3: Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same.
Example: Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
*/

function removeDuplicates(arr) {
    let i=0;
    for (let j=0; j<arr.length; j++) {
        if (arr[j] != arr[i]) {
            arr[++i] = arr[j];
        }
    }
    return ++i;
}
// console.log(removeDuplicates([1,1,2]));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 4: Remove Element
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be 
changed.
Example: Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
*/

function removeElement(arr, ele) {
    if (!arr) return 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === ele) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
// let arr = [3,2,2,3], ele = 3;
// console.log(removeElement(arr, ele));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

