

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


/*
Prob: Longest Repeating Character Replacement
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation 
at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
*/

var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let maxCharCount = 0;
    const visited = {};
    
    while (right < s.length) {
        const char = s[right];
        visited[char] = ( visited[char] || 0 ) + 1;
        if(visited[char] > maxCharCount) maxCharCount = visited[char];

        if(right-left+1-maxCharCount > k) {
            visited[s[left]]--;
            left++;
        }
        right++;
    }
    return right-left;
};

// let s = "ABAB", k=2;
// console.log(characterReplacement(s,k));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Sorting an array
Input: [3, 6, 1, 7, 2, 9, 4, 2, 8, 5]
Output: [1, 2, 2, 3, 4, 5, 6, 7, 8, 9] ascending order
Output: [9, 8, 7, 6, 5, 4, 3, 2, 2, 1] descending order
*/

function sort(arr) {
    for (let i=0; i<arr.length-1; i++) 
    {
        for (let j=0; j<arr.length-i-1; j++) 
        {
            if(arr[j] < arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// let arr = [3, 6, 1, 7, 2, 9, 4, 2, 8, 5];
// console.log(sort(arr));


function sortAscending(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// let arr = [3, 6, 1, 7, 2, 9, 4, 2, 8, 5];
// console.log(sortAscending(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Write a program to remove duplicate item from array
*/

function removeDuplicates(arr) {
    let b = [];
    for (let i=0; i<arr.length; i++) {
        if (b.indexOf(arr[i]) == -1) {
            b.push(arr[i]);
        }
    }
    return b;
}
// let arr = [1,2,3,4,1,2];
// console.log(removeDuplicates(arr));


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Write a function in Javascript to traverse 2D square matrix in a zig-zag manner.
You need to write a function which traverses 2D matrix as shown in the image below. It would visit every cell in the order of specified 
number, and print it’s co-ordinates.

Example:
Input: traverseMatrix(1)
Output-> (0,0)
Input: traverseMatrix(2)
Output-> (1,0), (0,0), (1,1), (0,1)
Input: traverseMatrix(3)
Output-> (2,0),(1,0),(2,1),(2,2),(1,1),(0,0),(0,1),(1,2),(0,2)
Input: traverseMatrix(4)
Output-> (3,0),(2,0),(3,1),(3,2),(2,1),(1,0),(0,0),(1,1),(2,2),(3,3),(2,3),(1,2),(0,1),(0,2),(1,3),(0,3)
Input: traverseMatrix(5)
Output-> (4,0),(3,0),(4,1),(4,2),(3,1),(2,0),(1,0),(2,1),(3,2),(4,3),(4,4),(3,3),(2,2),(1,1),(0,0),(0,1),(1,2),(2,3),(3,4),(2,4),(1,3),
(0,2),(0,3),(1,4),(0,4)

*/

function traverseMatrix(n) {
    if (n === 0) return [];

    let arr = new Array(n * n).fill(null).map(() => []);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) arr[i + j].unshift([i, j]);
            else arr[i + j].push([i, j]);
        }
    }
    return arr.reverse().flat();
}
console.log(traverseMatrix(3));



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Triangle
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to 
either index i or index i + 1 on the next row.

Example: Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

*/

var minimumTotal = function(triangle) {
    for (let i=triangle.length-2; i>=0; i--) {
        for (let j=0; j<triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
        }
    }
    return triangle[0][0];
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Best Time to Buy and Sell Stock III
You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example:
Input: prices = [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
*/

var maxProfit = function(prices) {
    if (prices.length === 0) return 0;

    let dp = new Array(prices.length).fill(0);
    let min = prices[0];
    let max = 0;
    for (let i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
        dp[i] = max;
    }

    min = prices[0];
    max = 0;
    for (let i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i]-dp[i]);
        max = Math.max(max, prices[i]-min);
        dp[i] = max;
    }
    return dp.pop();
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Word Ladder II
Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an 
empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk].

Example:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
*/

var findLadders = function(beginWord, endWord, wordList) {
    // to check if two words can connect
    let connected = (a,b) => {
        let c = 0
        for (let i = 0; i < a.length && c < 2; i++) {
            if (a[i] !== b[i]) c++
        }
        return c == 1
    }

    // dictionary to help us search words faster
    // and to trackback what word was used
    let dict = new Set(wordList);
    if (dict.has(endWord) == false) return []

    dict.delete(beginWord)
    let queue = [beginWord]
    let nodes = []

    
    // find all ways from beginning
    // level by level, until reach end at a level
    let reached = false;    
    while (queue.length && !reached) {
        // update nodes of paths for this level
        nodes.push(queue.slice())

        // access whole level   
        let qlen = queue.length;
        for (let i = 0; i < qlen && !reached; i++) {

            let from = queue.shift();
            
            // find all nodes that connect to the nodes of this level
            for (let to of dict) {                

                if (connected(from,to) == false) continue

                // if connect
                // - and one of them is end word
                // - then we can stop moving forward
                if (to == endWord) {
                    reached = true
                    break;
                }

                // - otherwise,
                // - add all connected nodes to the record for the next level
                // - and delete them from dict to prevent revisiting to form cycles
                queue.push(to)                
                dict.delete(to)                
            }
        }
    }

    // try but did not find endWord
    if (!reached) return []

    // move backward to construct paths
    // add nodes to paths in reverse order to have paths from begin to end
    let ans = [[endWord]]
    for (let level = nodes.length - 1; level >= 0; level--) {        
        let alen = ans.length
        for (let a = 0; a < alen; a++) {
            let p = ans.shift()
            let last = p[0]            
            for (let word of nodes[level]) {                
                if (!connected(last, word)) continue                
                ans.push([word, ...p])
            }
        }        
    }

    return ans
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Sum Root to Leaf Numbers
You are given the root of a binary tree containing digits from 0 to 9 only.
Each root-to-leaf path in the tree represents a number.
For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
A leaf node is a node with no children.
Example: Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
*/

// Method 1
var sumNumbers = function(root) {
    function traverse(node, num) {
        if (!node) return null;
        num += node.val;
        if (!node.left && !node.right) return num++;
        return traverse(node.left, num) + traverse(node.right, num);
    }
    return traverse(root, '');
};


// Method 2
var sumNumbers = function(root) {
    if(!root) return null;
    let sum = 0;

    function traverse(node, num) {
        num += node.val;
        if(!node.left && !node.right) sum += num++;
        if(node.left) traverse(node.left, num);
        if(node.right) traverse(node.right, num);
    }
    traverse(root, ' ');
    return sum;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Delete Operation for Two Strings
Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
In one step, you can delete exactly one character in either string.

Example:
Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
*/

var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length;
    if (m < n) [word1, word2, m, n] = [word2, word1, n, m];
    let wordArr1 = word1.split(""), wordArr2 = word2.split("");
    let dpLast = new Uint16Array(n+1);
    let dpCurr = new Uint16Array(n+1);

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            dpCurr[j+1] = wordArr1[i] === wordArr2[j] ? dpLast[j]+1 : Math.max(dpCurr[j], dpLast[j+1]);
        }
        [dpLast, dpCurr] = [dpCurr, dpLast];
    }
    return m + n - 2 * dpLast[n];
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Surrounded Regions
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example: Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Notice that an 'O' should not be flipped if:
- It is on the border, or
- It is adjacent to an 'O' that should not be flipped.
The bottom 'O' is on the border, so it is not flipped.
The other three 'O' form a surrounded region, so they are flipped.
*/

var solve = function(board) {
    if (board.length === 0) return null;

    for (var i=0; i<board.length; i++) {
        for (var j=0; j<board[0].length; j++) {
            if (board[i][j] === 'O' && (i == 0 || i == board.length-1 || j == 0 || j == board[0].length-1)) {
                dfs(board, i, j);
            }
        }
    }
    for (var i=0; i<board.length; i++) {
        for (var j=0; j<board[0].length; j++) {
            if (board[i][j] == 'W') {
                board[i][j] = 'O';
            } else {
                board[i][j] = 'X';
            }
        }
    }
    return board;
};

function dfs(board, i, j) {
    if (i<0 || j<0 || i>=board.length || j>= board[0].length || board[i][j] == 'X' || board[i][j] == 'W') {
        return;
    }
    board[i][j] = 'W';
    dfs(board, i+1, j);
    dfs(board, i-1, j);
    dfs(board, i, j+1);
    dfs(board, i, j-1);
    return;
}


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Word Break II
Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. 
Return all such possible sentences in any order.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example: Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
Output: ["cats and dog","cat sand dog"]
*/

var wordBreak = function(s, wordDict) {
    const memo = new Map();

    function run(str) {
        if (memo.has(str)) return memo.get(str);
        if (!str.length) return [];
        const result = [];

        for (let word of wordDict) {
            if (str.startsWith(word)) {
                const next = str.slice(word.length);
                const paths = run(next);
                if (!paths.length && !next.length) result.push(word);
                result.push(...paths.map(rest => word + ' ' + rest));
            }
        }
        memo.set(str, result);
        return result;
    }
    return run(s);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Linked List Cycle II
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
Example: Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
*/

var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Palindrome Partitioning II
Given a string s, partition s such that every substring of the partition is a palindrome
Return the minimum cuts needed for a palindrome partitioning of s.

Example: Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/

const minCut = s => {
    if (s.length === 1) return 0;
    const palindromes = buildPalindromes(s);
    const cuts = buildCuts(s, palindromes);
    return cuts[cuts.length - 1];
}

const buildPalindromes = string => {
  let len = string.length;
  const palindromes = Array(len).fill(0).map(el => Array(len).fill(false));
  for (let i = 0; i < len; i++) {
    palindromes[i][i] = true;
  }
  for (let length = 2; length < len + 1; length++) {
    for (let i = 0; i < len - length + 1; i++) {
      j = i + length - 1;
      if (length === 2) {
        palindromes[i][j] = string[i] === string[j]; 
      } else {
        palindromes[i][j] = string[i] === string[j] && palindromes[i + 1][j - 1];
      }
    }
  }
  return palindromes;
}

const buildCuts = (string, palindromes) => {
    const cuts = Array(string.length).fill(Infinity);
    for (let i = 0; i < string.length; i++) {
        if (palindromes[0][i]) {
            cuts[i] = 0
        } else {
            cuts[i] = cuts[i - 1] + 1;
            for (let j = 1; j < i; j++) {
                if (palindromes[j][i] && cuts[j - 1] + 1 < cuts[i]) {
                    cuts[i] = cuts[j - 1] + 1;
                }
            }
        }
    }
    return cuts;
}


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Candy
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
You are giving candies to these children subjected to the following requirements:
Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

Example: Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
*/

var candy = function(ratings) {
    var len = ratings.length;
    var forward = new Array(len);
    var backward = new Array(len);

    forward[0] = 1;
    backward[len-1] = 1;
    for (var i=1; i<len; i++) {
        if (ratings[i] > ratings[i-1]) forward[i] = forward[i-1] + 1;
        else forward[i] = 1;
    }

    for (var i=len-2; i>=0; i--) {
        if (ratings[i] > ratings[i+1]) backward[i] = backward[i+1] + 1;
        else backward[i] = 1;
    }
    var sum = 0;
    for (var i=0; i<len; i++) {
        sum += Math.max(forward[i], backward[i]);
    }
    return sum;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Reorder List
You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → … 

Ex: Input: head = [1,2,3,4]
Output: [1,4,2,3]
*/

var reorderList = function(head) {
    let stack = [];
    let node = head;
    if (!node) return;

    while (node) {
        stack.push(node);
        node = node.next;
    }

    let len = stack.length;
    node = head;
    for (let i=0; i<len; i++) {
        if (i%2 === 0) {
            node.next = stack.shift();
        } else {
            node.next = stack.pop();
        }
        node = node.next;
    }
    node.next = null;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximum Gap
Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less 
than two elements, return 0.
You must write an algorithm that runs in linear time and uses linear extra space.
Example: Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
*/

var maximumGap = function(nums) {
    if (nums.length < 2) return 0
    let hi = 0, lo = 2e9, ans = 0
    for (let n of nums)
        hi = Math.max(hi, n), lo = Math.min(lo, n)
    let bsize = ~~((hi - lo) / (nums.length - 1)) || 1,
        buckets = Array.from({length: ~~((hi - lo) / bsize) + 1}, () => [])
    for (let n of nums)
        buckets[~~((n - lo) / bsize)].push(n)
    let currhi = 0
    for (let b of buckets) {
        if (!b.length) continue
        let prevhi = currhi || b[0], currlo = b[0]
        for (let n of b) 
            currhi = Math.max(currhi, n), currlo = Math.min(currlo, n)
        ans = Math.max(ans, currlo - prevhi)
    }
    return ans
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Fraction to Recurring Decimal
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
If the fractional part is repeating, enclose the repeating part in parentheses.
If multiple answers are possible, return any of them.
It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

Example: Input: numerator = 1, denominator = 2
Output: "0.5"
*/
var fractionToDecimal = function(numerator, denominator) {
    if(!numerator) return '0';
    
    let str = '';
    
    if(Math.sign(numerator) !== Math.sign(denominator)) str += '-';
    
    const numer = Math.abs(numerator)
    const denom = Math.abs(denominator)
    
    str += Math.floor(numer/denom);
    let rem = numer%denom;
    if(!rem) return str;
    str += '.'
    
    const map = new Map();
    
    while(rem !== 0) {
        map.set(rem, str.length);
        
        rem *= 10;
        str += Math.floor(rem/denom);
        rem %= denom
        
        if(map.has(rem)) {
            const idx = map.get(rem);
            return str.slice(0, idx) + `(${str.slice(idx)})`; 
        }
    }
    return str;
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Excel Sheet Column Title
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.
For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Example: Input: columnNumber = 1
Output: "A"
*/

var convertToTitle = function(n) {
    if (n == 0) return null;
    let result = '';
    while (n > 0) {
        let r = n%26;
        let d = parseInt(n/26);
        if (r == 0) {
            r = 26;
            d = d - 1;
        }
        result += String.fromCharCode(64 + r);
        n = d;
    }
    return result.split('').reverse().join("");
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Factorial Trailing Zeroes
Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

Example: Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.
*/

var trailingZeroes = function(n) {
    let numZeroes = 0;
    for (let i=5; i<=n; i*=5) {
        numZeroes += Math.floor(n/i);
    }
    return numZeroes;
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Best Time to Buy and Sell Stock IV
You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.
Find the maximum profit you can achieve. You may complete at most k transactions.
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example: Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
*/

var maxProfit = function(k, prices) {
    if (prices.length === 0) return 0;
    if (k > (prices.length/2)) {
        let profit = 0;
        for (let i=1; i<prices.length; i++) {
            if (prices[i] > prices[i-1]) {
                profit += prices[i] - prices[i-1];
            }
        }
        return profit;
    } else {
        let dp = new Array(prices.length).fill(0);
        let size = prices.length;
        for (let t=1; t<=k; t++) {
            let min = prices[0];
            let max = 0;
            for (let i=0; i<size; i++) {
                min = Math.min(min, prices[i] - dp[i]);
                max = Math.max(max, prices[i]-min);
                dp[i] = max;
            }
        }
        return dp.pop();
    }
};



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

*/



/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

*/


