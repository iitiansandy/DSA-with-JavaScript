

/*
Prob: Restore IP Addresses
A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have 
leading zeros.
For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to 
reorder or remove any digits in s. You may return the valid IP addresses in any order.

Example:
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

*/

var restoreIpAddresses = function(s) {
    const result = [];

    function permute(arr, str) {
        if (arr.length === 3) {
            if (isValid(str)) result.push([...arr, str]);
            return;
        }

        for (let i=1; i<4; i++) {
            let subStr = str.slice(0, i);
            if (!isValid(subStr)) continue;
            permute([...arr, subStr], str.slice(i));
        }
    }

    function isValid(str) {
        if (+str > 255 || !str.length) return false;
        if(str.length >= 2 && str[0] === '0') return false;
        return true;
    }

    permute([], s);
    return result.map(x => x.join('.'));
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Flatten Binary Tree to Linked List
Given the root of a binary tree, flatten the tree into a "linked list":
The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child 
pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 
Example: Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
*/

// Method 1 (Morris Traversal)
var flatten = function(root) {
    let curr = root;
    while (curr) {
        if (curr.left) {
            let runner = curr.left;
            while (runner.right) runner = runner.right;
            runner.right = curr.right, curr.right = curr.left, curr.left = null;
        }
        curr = curr.right;
    }
};


// Method 1 ()
var flatten = function(root) {
    let head = null, curr = root;
    while (head != root) {
        if (curr.right === head) curr.right = null;
        if (curr.left === head) curr.left = null;
        if (curr.right) curr = curr.right;
        else if (curr.left) curr = curr.left;
        else curr.right = head, head = curr, curr = root;
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Distinct Subsequences
Given two strings s and t, return the number of distinct subsequences of s which equals t.
The test cases are generated so that the answer fits on a 32-bit signed integer.

Example 1: Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from s.
rabbbit
rabbbit
rabbbit
*/

var numDistinct = function(s, t) {
    if (s.length < t.length || t.length === 0 || s.length === 0) return 0;
    else if (s == t) return 1;
    else {
        var zero = Array.apply(null, new Array(s.length)).map(Number.prototype.valueOf,0);
        var previous = zero.slice();
        var current  = zero.slice();
        for (var i=0; i < t.length; i++) {
            var sum = 0;
            for (var j=0; j < s.length; j++) {
                if (t[i] === s[j]) {
                    current[j] = (i === 0 ? 1: sum);
                }
                sum += previous[j];
            }
            previous = current.slice();
            current  = zero.slice();
        }
        return previous.reduce(function(a,b) {return a+b});
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


