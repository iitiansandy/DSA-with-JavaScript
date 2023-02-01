
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


/*
Prob 5: Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example: Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*/

function maxProfit (prices) {
    var min = Number.MAX_VALUE;
    var max = 0;

    for (var i=0; i<prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
}


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 6: Best Time to Buy and Sell Stock II
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can 
buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.
Example: Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
*/

var maxProfit = function(prices) {
    
    // It is impossible to sell stock on first day, set -infinity as initial value for curHold
    let [curHold, curNotHold] = [-Infinity, 0];
    
    for(const stockPrice of prices){
        
        let [prevHold, prevNotHold] = [curHold, curNotHold];
        
        // either keep hold, or buy in stock today at stock price
        curHold = Math.max(prevHold, prevNotHold - stockPrice );
        
        // either keep not-hold, or sell out stock today at stock price
        curNotHold = Math.max(prevNotHold, prevHold + stockPrice );
    }
    
    // Max profit must come from notHold state finally.
    return curNotHold; 
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 7: Remove duplicates from an array
Example: Input : = [1,2,3,4,5,4]; Output: [1,2,3,4,5]
*/

// Method 1 (Using filter)
function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}
let arr = [1,2,3,4,5,4,3,2];
console.log(removeDuplicates(arr));


// Method 2 (Using filter)
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Method 3 (Using filter)
function removeDuplicates(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
};

// Method 4
function removeDuplicates(arr) {
    var unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
};


// Method 5
function removeDuplicates(arr) {
    var unique = [];
    for(i=0; i < arr.length; i++){  
        if(unique.indexOf(arr[i]) === -1) {  
            unique.push(arr[i]);  
        }  
    }
    return unique;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 8: Intersection of the two Arrays
Ex: Input: arr1 = [1,2,2,1], arr2 = [2,2]
Output: [2]
*/

function intersec(arr1, arr2) {
    let map = new Map();
    arr1 = [...new Set(arr1)];
    arr2 = [...new Set(arr2)];

    for (let i=0; i<arr1.length; i++) {
        map.set(arr1[i], 1);
    }

    return arr2.filter((n) => {
        if(map.get(n)) return true;
    });
};
// let arr1 = [1,2,2,1], arr2 = [2,2];
// console.log(intersec(arr1, arr2));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 9: Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example:
Input: nums = [1,2,3,1]
Output: true
*/

function checkDuplicates(arr) {
    let ans = [];
    for (let i=0; i<arr.length; i++) {
        if (ans.includes(arr[i])){
            return true;
        } else {
            ans.push(arr[i]);
        }
    }
    return false;
}
// let arr = [1,2,3,4];
// console.log(checkDuplicates(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 10: Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example: Input: nums = [2,2,1], Output: 1
*/

function singleNum(arr) {
    let obj = {};
    for (let ele of arr) {
        obj[ele] = obj[ele] + 1 || 1;
    }
    for (key in obj) {
        if (obj[key] === 1) {
            return key;
        }
    }
}
// let arr = [2,1,1];
// console.log(singleNum(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 11: Plus One
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
Increment the large integer by one and return the resulting array of digits.

Example:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

function plusOne (digits) {
    for (let i=digits.length-1; i>=0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
}
// let digits = [1,2,3];
// console.log(plusOne(digits));

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob 12: Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

function moveZeros (arr) {
    let index = 0;
    for (let i=0; i<arr.length; i++) {
        let num = arr[i];
        if (num !== 0) {
            arr[index] = num;
            index++;
        }
    }
    for (let i=index; i<arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}
// let arr = [0,1,0,3,12];
// console.log(moveZeros(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

