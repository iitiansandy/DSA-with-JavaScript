
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


/*
Prob: Rotate Image
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do 
the rotation.
Example: Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
*/

var rotate = function(M) {
    let n = M.length, depth = ~~(n / 2)
    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            let temp = M[i][i+j]
            M[i][i+j] = M[opp-j][i]
            M[opp-j][i] = M[opp][opp-j]
            M[opp][opp-j] = M[i+j][opp]
            M[i+j][opp] = temp
        }
    }
};
// Time Complexity: O(N^2) where N is the length of each side of the matrix
// Space Complexity: O(1)


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 3Sum
iven an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + 
nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.
Example:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
*/

var threeSum = function(nums) {
    let result = [];
    if(nums.length<3) return result;
    nums.sort((a,b)=>a-b);
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0) break;
        if(i>0 && nums[i] === nums[i-1]) continue;
        let start = i+1;
        let end = nums.length-1;
        while(start<end){
            let sum = nums[i] + nums[start] + nums[end];
            if(sum === 0){
                result.push([nums[i], nums[start], nums[end]]);
                start++;
                end--;
                while(start<end && nums[start] === nums[start-1]) start++;
                while(start<end && nums[end]===nums[end+1]) end--;
            }
            else if(sum<0) start++;
            else if(sum>0) end--;
        }
    }
    return result;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 4Sum
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
Example:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
*/

const fourSum = function(nums, target) {
    const outputArray = [];
    nums = nums.sort((a, b) => a - b);
    for (let k = 0; k < nums.length - 3; ++k) {
      const currEleOne = nums[k];
      if (k > 0 && nums[k] === nums[k - 1]) {
        continue;
      }
      search_triplets(nums, k + 1, target - currEleOne, currEleOne, outputArray);
    }
    return outputArray;
  };
  
  // one layer deep
  const search_triplets = function(nums, startIndexOne, targetOne, eleOne, outputArray) {
    for (let i = startIndexOne; i < nums.length - 2; ++i) {
      const currEleTwo = nums[i];
      if (i > startIndexOne && nums[i] === nums[i - 1]) {
        continue;
      }
      search_doubles(nums, i + 1, targetOne - currEleTwo, eleOne, currEleTwo, outputArray);
    }
  }
  
  // two layers deep
  const search_doubles = function(nums, startIndexTwo, targetTwo, eleOne, eleTwo, outputArray) {
    let left = startIndexTwo,
      right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] === targetTwo) {
        outputArray.push([eleOne, eleTwo, nums[left], nums[right]]);
        ++left;
        --right;
        while (left < right && nums[left] === nums[left - 1]) {
          ++left;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          --right;
        }
      } else if (nums[left] + nums[right] < targetTwo) {
        ++left;
      } else if (nums[left] + nums[right] > targetTwo) {
        --right;
      }
    }
  }


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find First and Last Position of Element in Sorted Array
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.

Example:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/

var searchRange = function(nums, target) {
    if(nums.length===0) return [-1,-1];
    let start = 0, end = nums.length-1;
    let lo=-1, hi=-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        
        if(target<=nums[mid]) end = mid-1;
        else start = mid+1;
    }
    lo = start;
    start=0, end=nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        
        if(target<nums[mid]) end = mid-1;
        else start = mid+1;
    }
    hi=end;
    return lo<=hi?[lo,hi]:[-1,-1];
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Group Anagrams
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example: Input: strs = ["eat","tea","tan","ate","nat","bat"]
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


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reduce Array Size to The Half
You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.
Return the minimum size of the set so that at least half of the integers of the array are removed.
Example: Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has a size greater than half of the size of the old array.
*/
var minSetSize = function(arr) {
    const freq = {};
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        freq[arr[i]] ? freq[arr[i]]++ : (freq[arr[i]] = 1);
    }
    const sortedIntFreq = Object.values(freq).sort((a,b) => b-a);
    for (let i=0; i<sortedIntFreq.length; i++) {
        count += sortedIntFreq[i];
        if (count >= arr.length/2) {
            return (i+1);
        }
    }
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Delete Node in a Linked List
There is a singly-linked list head and we want to delete a node node in it.
Ex: Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
*/

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Remove Nth Node From End of List
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example: Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    while(n--){
        fast = fast.next;
    }
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    if(!fast){
        head = head.next;
    } else {
        slow.next = slow.next ? slow.next.next : null;
    }
    return head;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Merge Two Sorted Lists
Ex: Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode();
    let curr = list3;
    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr.next = list1 || list2;
    return list3.next;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Palindrome Linked List
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Example: Input: head = [1,2,2,1]
Output: true
*/

var isPalindrome = function(head) {
    let stack = [];
    let curr = head;
    
    while (curr) {
        stack.push(curr.val);
        curr = curr.next;
    }

    let res = head;
    while (res) {
        if(res.val !== stack.pop()) {
            return false;
        }
        res = res.next;
    }
    return true;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Linked List Cycle
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, 
pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example: Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
*/

var hasCycle = function(head) {
    const seen = new Set();

    function traverse(node){
        if(seen.has(node)) return true;
        if(!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    return traverse(head);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Intersection of Two Linked Lists
Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no 
intersection at all, return null.
Ex: Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
*/

var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB;
    while (a !== b) {
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }
    return a;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Remove Linked List Elements
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
Ex: Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
*/

var removeElements = function(head, val) {
    if (!head) return head;
    while (head) {
        if (head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    let curr = head;
    while (curr && curr.next) {
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    return head;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Middle of the Linked List
Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example: Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/

var middleNode = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Merge k Sorted Lists
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
Merge all the linked-lists into one sorted linked-list and return it.

Example: Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
*/

function merge (left, right){
    if(!left){
        return right;
    } else if(!right) {
        return left;
    } else if(left.val < right.val) {
        left.next = merge(left.next, right);
        return left;
    } else {
        right.next = merge(left, right.next);
        return right;
    }
}

function helper (lists, start, end) {
    if(start === end) {
        return lists[start];
    } else if (start < end){
        const mid = parseInt((start + end)/2);
        const left = helper(lists, start, mid);
        const right = helper(lists, mid+1, end);
        return merge(left, right);
    } else {
        return null;
    }
}

var mergeKLists = function(lists) {
   return helper(lists, 0, lists.length - 1);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Intersection of Two Arrays
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you 
may return the result in any order.
Example: Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/

var intersection = function(nums1, nums2) {
    const setOne = new Set(nums1);
    const setTwo = new Set(nums2);
    let arr = [];
    setTwo.forEach(e => {
        if(setOne.has(e))
            arr.push(e); 
    })
    return arr;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Kth Smallest Element in a BST
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in 
the tree.
Example: Input: root = [3,1,4,null,2], k = 1
Output: 1
*/

var kthSmallest = function(root, k) {
    const stack = [];
    let count = 1;
    let node = root;
 
    while(node || stack.length) {
        while (node) {
             stack.push(node)
             node = node.left;
        }
        node = stack.pop();
        if(count === k) return node.val;
        else count++;
        node = node.right;
    }
  };


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Search in Rotated Sorted Array
Example:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

var search = function(nums, target) {
    let start = 0, end=nums.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid]===target) return mid;
        if(nums[mid]>=nums[start]){
            // start-mid sorted
            if(target>=nums[start] && target<nums[mid]){
                end = mid-1;
            } else {
                start = mid+1;
            }
        } else {
            // mid-end sorted
            if(target>nums[mid] && target<=nums[end]){
                start = mid+1;
            } else {
                end = mid-1;
            }
        }
    }
    return -1;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: First Bad Version
Example: Input: n = 5, bad = 4
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


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Search Insert Position
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where 
it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
Example: Input: nums = [1,3,5,6], target = 5
Output: 2
*/

var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0;
    if(target > nums[nums.length-1]) return nums.length;
    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        
        if(nums[mid] === target) return mid;
        
        if(nums[mid]>target && nums[mid-1]<target) return mid;
        
        if(nums[mid] < target) left = mid+1;
        
        else if(nums[mid] > target) right = mid-1;
    }
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find Peak Element
Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index 
to any of the peaks.
Example: Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
*/

var findPeakElement = function(nums) {
    let start = 0, end = nums.length-1, mid;
    
    while(start <= end){
        mid = Math.floor((start + end)/2);
        const val = nums[mid];
        const left = nums[mid-1] || -Infinity;
        const right = nums[mid+1] || -Infinity;
        
        if(val > left && val > right) return mid;
        if(left > val){
            end = mid-1;
        } else {
            start = mid + 1;
        }
    }
    return 0;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


