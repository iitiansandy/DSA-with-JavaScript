/*
Prob: Valid Palindrome
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

function isPelindrome(str) {
    str = str.replace(/[^a-z0-9]/gi, "");
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// let str = "A man, a plan, a canal: Panama";
// console.log(isPelindrome(str));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reverse an Array using recursion
Example: Input array: [5,7,3,8,1,9,2,6];
Ouput: [6,2,9,1,8,3,7,5];
*/

function revArr(arr, start, end) {
    let temp;
    if (start >= end) {
        return;
    }
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    revArr(arr, start + 1, end - 1);
}

// let arr = [5, 7, 3, 8, 1, 9, 2, 6];
// let start = 0;
// let end = arr.length - 1;
// revArr(arr, start, end);
// console.log(arr);


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 
Example: Input array: [5,7,3,8,1,9,2,6];
Ouput: [];
*/


