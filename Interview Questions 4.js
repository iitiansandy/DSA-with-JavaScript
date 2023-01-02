
/*
Prob: Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array 
where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:
Time: O(N)
Space: O(1)
Sample Input:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/

function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0, right = arr.length-1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg === num){
            return true
        } else if (avg < num) {
            left++;
        } else {
            right--;
        }
    }
    return false;
  };


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

*/

// Iterative
function isSubSequence(str1, str2) {
    let i=0, j=0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}


// Recursive but not O(1) Space
function isSubSeq(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubSeq(str1.slice(1), str2.slice(1));
    return isSubSeq(str1, str2.slice(1));
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of 
the number passed to the function.
Ex: maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
*/

function maxSumSubArr (arr, num) {
    if (arr.length < num) return null;
    let maxSum = 0;
    for (let i=0; i<num; i++) {
        maxSum += arr[i];
    }
    let curSum = maxSum;
    for (let i=num; i<arr.length; i++) {
        curSum = curSum + arr[i] - arr[i-num];
        maxSum = Math.max(maxSum, curSum);
    }
    return maxSum;
}
// let arr = [1,4,2,10,23,3,1,0,20], num = 4;
// console.log(maxSumSubArr(arr, num));


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the 
function. If there isn't one, return 0 instead.
Examples:
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
*/

function minSubArrayLen(arr, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
    
    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            end++;
        }
        else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
*/

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!
    let longest = 0;
    let seen = {};
    let start = 0;
    
    for (let i=0; i<str.length; i++){
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i-start+1);
        seen[char] = i+1;
    }
    return longest;
};  


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Combinations
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.
*/

// Method 1
var combine = function(n, k) {
    function* comb(start, curComb) {
        if (curComb.length == k) {
            yield curComb;
            return;
        }
        for (let i=start; i<=n; i++) {
            yield* comb(i+1, [...curComb, i]);
        }
        return;
    }
    return [...comb(start=1, curComb=[])];
};


// Method 2
var combine = function(n, k) {
    let result = [];
    let comb = function(start, curComb) {
        if (curComb.length == k) {
            result.push([...curComb]);
            return;
        }
        for (let i=start; i<=n; i++) {
            curComb.push(i);
            comb(i+1, curComb);
            curComb.pop();
        }
        return;
    }
    comb(start=1, curComb=[]);
    return result;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
Example:
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function(strs) {
    'use strict';
    if(strs === undefined || strs.length === 0) return '';
    return strs.reduce((prev, next) => {
        let i=0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        return prev.slice(0, i);
    });
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Example: Input: root = [3,9,20,null,null,15,7]
Output: 2
*/

var minDepth = function(root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;

    if (root.left == null) return 1 + minDepth(root.right);
    if (root.right == null) return 1 + minDepth(root.left);
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Path Sum
Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values 
along the path equals targetSum. A leaf is a node with no children.
Example: Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.
*/

// Method 1
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if(!root.left && !root.right) {
        return targetSum === root.val;
    } else {
        return hasPathSum(root.left, targetSum-root.val) || hasPathSum(root.right, targetSum-root.val);
    }
};


// Method 2
var hasPathSum = function(root, targetSum) {
    return dfs(root, 0, targetSum);
};

var dfs = function(curr, currSum, targetSum) {
    if(!curr) return false;
    currSum += curr.val;
    if (curr.left === null && curr.right === null) {
        return currSum === targetSum;
    }
    return dfs(curr.left, currSum, targetSum) || dfs(curr.right, currSum, targetSum);
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Path Sum II
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals 
targetSum. Each path should be returned as a list of the node values, not node references.
A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.
Example: Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22
*/

// Method 1
var pathSum = function(root, targetSum, res = [], path = []) {
    if (root) {
        path.push(root.val);
        if (!root.left && !root.right && targetSum-root.val === 0) res.push([...path]);
        pathSum(root.left, targetSum-root.val, res, path);
        pathSum(root.right, targetSum-root.val, res, path);
        path.pop();
    }
    return res;
};


// Method 2
var pathSum = function(root, targetSum) {
    function dfs(node, curPath, curTarget) {
        if (node == null) return;
        curPath.push(node.val);
        curTarget -= node.val;

        if (node.left == null && node.right == null && curTarget == 0) {
            answer.push(curPath.slice());
            curPath.pop();
            return;
        }
        dfs(node.left, curPath, curTarget);
        dfs(node.right, curPath, curTarget);
        curPath.pop();
        return;
    }
    answer = [];
    dfs(root, [], targetSum);
    return answer;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Clone Graph
Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.
Example: Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
*/

// BFS Method
var cloneGraph = function(node) {
    let start = node;
    if(start === null) return null;
    const vertexMap = new Map();
 
    const queue = [start];
    vertexMap.set(start, new Node(start.val));
 
    while (queue.length) {
        const currentVertex = queue.shift();
        for (const neighbor of currentVertex.neighbors) {
            if (!vertexMap.has(neighbor)) {
                vertexMap.set(neighbor, new Node(neighbor.val));
                queue.push(neighbor);
            }
            vertexMap.get(currentVertex).neighbors.push(vertexMap.get(neighbor));
        }
    }
    return vertexMap.get(start);
 };


 // DFS Method
 var cloneGraph = function(node) {
    if (!node) return null;
 
    const map = new Map();
    const clone = root => {
        if (!map.has(root.val)) {
        map.set(root.val, new Node(root.val));
        map.get(root.val).neighbors = root.neighbors.map(clone);
        }
        return map.get(root.val);
    }
    return clone(node);
 };


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob:Evaluate Reverse Polish Notation
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
Evaluate the expression. Return an integer that represents the value of the expression.
Example:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
*/

// Method 1
var evalRPN = function(tokens) {
    let stack = [];
    let ops = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b),
    };
    for (let t of tokens) {
        if (ops[t]) {
            let top = stack.pop();
            let second = stack.pop();
            stack.push(ops[t](second, top));
        } else {
            stack.push(Number(t));
        }
    }
    return stack.pop();
};


// Method 2
let a, b;
const evaluate = {"+": ()=>a+b, "-": ()=>a-b, "*": ()=>a*b, "/": ()=>~~(a/b)};
var evalRPN = function(tokens) {
    let stack = [];
    for (let t of tokens) {
        if (evaluate[t]) {
            b = stack.pop();
            a = stack.pop();
            stack.push(evaluate[t]());
        } else {
            stack.push(~~t);
        }
    }
    return stack[0];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Course Schedule
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where 
prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Example:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
*/

// Method 1 (Topological Sort)
var canFinish = function(numCourses, prerequisites) {
    const order = [];
    const queue = [];
    const graph = new Map();
    const indegree = Array(numCourses).fill(0);

    for (const [e,v] of prerequisites) {
        if (graph.has(v)) {
            graph.get(v).push(e);
        } else {
            graph.set(v, [e]);
        }
        indegree[e]++;
    }
    for (let i=0; i<indegree.length; i++) {
        if (indegree[i] === 0) queue.push(i);
    }
    while (queue.length) {
        const v = queue.shift();
        if (graph.has(v)) {
            for (const e of graph.get(v)) {
                indegree[e]--;
                if (indegree[e] === 0) queue.push(e);
            }
        }
        order.push(v);
    }
    return numCourses === order.length;
};


// Method 2 (DFS)
let visiting;
let visited;
let graph;

var canFinish = function(numCourses, prerequisites) {
    graph = new Map();
    visiting = new Set();
    visited = new Set();

    for (let [v, e] of prerequisites) {
        if (graph.has(v)) {
            let edges = graph.get(v);
            edges.push(e);
            graph.set(v, edges);
        } else {
            graph.set(v, [e]);
        }
    }
    for (const [v, e] of graph) {
        if (DFS(v)) {
            return false;
        }
    }
    return true;
};

var DFS = function(v) {
    visiting.add(v);
    let edges = graph.get(v);
    if (edges) {
        for (let e of edges) {
            if (visited.has(e)) {
                continue;
            }
            if (visiting.has(e)) {
                return true;
            }
            if (DFS(e)) {
                return true;
            }
        }
    }
    visiting.delete(v);
    visited.add(v);
    return false;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: 

*/

// Method 1 (Dynamic Programming)
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (let i=1; i<=amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};


// Method 2 (DFS + Greedy + Pruning)
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
    dp[0] = 0; // To make 0, we need 0 coins.
    for (let coin of coins) { // Check each coin
    for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
      dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Rotting Oranges
You are given an m x n grid where each cell can have one of three values:
0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example: Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
*/

// Method 1 (BFS)
var orangesRotting = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let fresh = 0;
    const queue = [];
    for (let i=0; i<height; i++) {
        for (let j=0; j<width; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            if (grid[i][j] === 1) fresh++;
        }
    }

    let minute = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i=0; i<size; i++) {
            const [ x, y] = queue.shift();
            if (x - 1 >= 0 && grid[x-1][y] === 1) {
                grid[x-1][y] = 2;
                fresh--;
                queue.push([x-1, y]);
            }
            if (x+1 < height && grid[x+1][y] === 1) {
                grid[x+1][y] = 2;
                fresh--;
                queue.push([x+1, y]);
            }
            if (y-1 >= 0 && grid[x][y-1] === 1) {
                grid[x][y-1] = 2;
                fresh--;
                queue.push([x, y-1]);
            }
            if (y+1 < width && grid[x][y+1] === 1) {
                grid[x][y+1] = 2;
                fresh--;
                queue.push([x,y+1]);
            }
        }
        if (queue.length > 0) minute++;
    }
    return fresh === 0 ? minute : -1;
};


// Method 1 (DFS)
var orangesRotting = function(grid) {
    let r = grid.length, c = grid[0].length;
    const traverse = (i, j) => {
        if(i<0 || j<0 || i>=r || j>=c || grid[i][j] === 0) {
            return Infinity;
        }
        if (grid[i][j] === 2) return 0;
        grid[i][j] = 0;
        let down = traverse(i+1, j);
        let up = traverse(i-1, j);
        let right = traverse(i, j+1);
        let left = traverse(i, j-1);
        let min = Math.min(left, right, up, down);
        grid[i][j] = 1;
        let res = min === Infinity ? min : min + 1;
        return res;
    }
    let ans = 0;
    for (let i = 0; i<r; i++) {
        for (let j=0; j<c; j++) {
            if (grid[i][j] === 1) {
                ans = Math.max(traverse(i, j), ans);
            }
        }
    }
    return ans === Infinity ? -1 : ans;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Time Based Key-Value Store
Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's 
value at a certain timestamp. Implement the TimeMap class:
TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are 
multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".
 
Example:

Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value 
is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"
*/

class TimeMap {
    constructor() {             // O(1)
        this.map = new Map();   // SC: O(T)
    }
    set(key, value, timestamp) {    // O(1)
        const keyVals = this.map.has(key) ? this.map.get(key) : [];
        keyVals.push([timestamp, value]);
        this.map.set(key, keyVals);
    }
    get(key, timestamp) {           // O(logT)
        const keyTimestamps = this.map.has(key) ? this.map.get(key) : [];
        let left = 0,
            right = keyTimestamps.length - 1,
            mid, ts = null
        
		// using binary search to find the ts <= timestamp
        while(left <= right) {
            mid = left + Math.floor((right - left) / 2);
            if(keyTimestamps[mid][0] <= timestamp) {
                ts = keyTimestamps[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ts === null ? "" : ts;
    }
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Accounts Merge
Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of 
the elements are emails representing emails of the account.
After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements 
are emails in sorted order. The accounts themselves can be returned in any order.

Example:
Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
*/

var accountsMerge = function(accounts) {
    let graph = {};
    let nameDict = {};

    for (let acc of accounts) {
        let name = acc[0];
        nameDict[acc[1]] = name;
        for (let i=1; i<acc.length; i++) {
            if (!graph[acc[i]]) graph[acc[i]] = new Set();
            nameDict[acc[i]] = name;
            if (i != 1) {
                graph[acc[1]].add(acc[i]);
                graph[acc[i]].add(acc[1]);
            }
        }
    }

    let res = [];
    let visited = new Set();
    let dfs = function(key) {
        visited.add(key);
        let emails = [key];
        graph[key].forEach((e) => {
            if (!visited.has(e)) {
                emails.push(...dfs(e));
            }
        });
        return emails;
    };

    for (let key in graph) {
        if (!visited.has(key)) {
            let temp = dfs(key);
            temp.sort();
            temp.unshift(nameDict[temp[0]]);
            res.push(temp);
        }
    }
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Minimum Height Trees
Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected 
edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the 
result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).
Return a list of all MHTs' root labels. You can return the answer in any order.
The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.
Example:
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]
Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
*/

var findMinHeightTrees = function(n, edges) {
    if (!edges || n < 2) return [0];
    let graph = [];
	// parse edges
    for (let [x, y] of edges) {
        graph[x] = graph[x] || [];
        graph[y] = graph[y] || [];
        graph[x].push(y);
        graph[y].push(x);
    }
    let leaves = [];
	// init leaf nodes
    graph.map((pts,i) => pts.length === 1 && leaves.push(i));
    while (n > 2) {
        n = n - leaves.length;
        let nxt_leaves = [];
        for (let leave of leaves) {
		    // remove leaf node and itself in related nodes
            tmp = graph[leave].pop();
            graph[tmp].splice(graph[tmp].indexOf(leave),1);
			// save new leaf node
            graph[tmp].length === 1 && nxt_leaves.push(tmp);
        }
        leaves = nxt_leaves;
    }
    return leaves;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: LRU Cache
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of 
keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

Example:
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]
*/

class LRUCache {
    constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;
  
      const v = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, v);
      return this.cache.get(key);
    };
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      }
      this.cache.set(key, value);
      if (this.cache.size > this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
      }
    };
  };


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should 
work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
Example:
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
*/

function serialize(root) {
    let data = [];
  
    function go(node) {
      if (node == null) {
        data.push(null);
        return;
      }
  
      data.push(node.val);
      go(node.left);
      go(node.right);
    }
  
    go(root);
    return data;
  }
  
  function deserialize(data) {
    function go() {
      if (data.length === 0) return;
  
      const val = data.shift();
      if (val == null) return null;
  
      const node = new TreeNode(val);
      node.left = go();
      node.right = go();
      return node;
    }
  
    return go();
  }


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Find Median from Data Stream
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean 
of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 
Example:
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

*/

MedianFinder.prototype.addNum = function(num) {
    const bs = n => {
        let start = 0;
        let end = this.arr.length;
        while (start < end){
            let mid = Math.floor((start+end)/2);
            if (n > this.arr[mid]) start = mid+1;
            else end = mid;
        }
        this.arr.splice(start,0,n);
    }
    if (this.arr.length === 0) this.arr.push(num);
    else bs(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.arr.length/2);
    return (this.arr.length%2===0) ? (this.arr[mid-1]+this.arr[mid])/2 : this.arr[mid];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Word Ladder
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such
that:
Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to 
endWord, or 0 if no such sequence exists.

Example:
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
*/

var ladderLength = function(beginWord, endWord, wordList) {
    const dict = new Set(wordList);
    let step = 1;
    let q = [beginWord];
    while (q.length) {
        const next = [];
        for (let w of q) {
            if (w === endWord) return step;

            for (let i=0; i<w.length; i++) {
                for (let j=0; j<26; j++) {
                    const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i+1);
                    if (dict.has(w2)) {
                        next.push(w2);
                        dict.delete(w2);
                    }
                }
            }
        }
        q = next;
        step++;
    }
    return 0;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Basic Calculator
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example:
Input: s = "1 + 1"
Output: 2
*/

var calculate = function(s) {
    s = "("+s+")";
    let stack = [];
    let temp = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === " ") continue;
        if (s[i] === ")") {
            while(stack[stack.length-1] !== "(") temp.push(stack.pop());
            stack.pop();
            stack.push(count(temp));
            continue;
        }
        if (isNum(stack[stack.length-1]) && isNum(s[i])) {
            stack[stack.length-1] += s[i];
            continue;
        }
        if (s[i] === "-" || s[i] === "+") {
            if (stack.length === 0 || stack[stack.length-1] === "(") stack.push("0");
        }
        stack.push(s[i]);
    }
    return stack[0];
};

function count(temp) {
    temp = temp.reverse();
    while (temp.length !== 1) {
        if (temp[1] === "+") temp[0] = (+temp[0]) + (+temp[2]);
        if (temp[1] === "-") temp[0] = (+temp[0]) - (+temp[2]);
        temp.splice(1,2);
    }
    return temp.pop();
};
function isNum(str) {
    return /[0-9]+/.test(str);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Largest Rectangle in Histogram
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle 
in the histogram.

Example: Input: heights = [2,1,5,6,2,3]
Output: 10
Explanation: The above is a histogram where width of each bar is 1.
The largest rectangle is shown in the red area, which has an area = 10 units.
*/

var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    // Append shadow rectangle (height = 0) to both side
    heights = [0].concat(heights).concat([0]);
    for (let i = 0; i < heights.length; i++) {
	while (stack && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop();
            maxArea = Math.max((i - stack[stack.length - 1]-1) * heights[j], maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Implement Trie (Prefix Tree)
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are 
various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 
Example:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

*/

class Trie {
    constructor() {
      this.root = {};
    }
  
    insert(word) {
      let node = this.root;
      for (let c of word) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.isWord = true;
    }
  
    traverse(word) {
      let node = this.root;
      for (let c of word) {
        node = node[c];
        if (node == null) return null;
      }
      return node;
    }
  
    search(word) {
      const node = this.traverse(word);
      return node != null && node.isWord === true;
    }
  
    startsWith(prefix) {
      return this.traverse(prefix) != null;
    }
  }
  

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Text Justification
Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) 
justified.
Example: Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
*/

var fullJustify = function(words, maxWidth) {
    const res = [[]];
    res[0].letters = 0;
    for (let word of words) {
        let row = res[res.length - 1];
        if (row.length && row.letters + row.length + word.length > maxWidth) {
            res.push([]);
            row = res[res.length - 1];
            row.letters = 0;
        }
        row.push(word);
        row.letters += word.length;
    }
    for (let r = 0; r < res.length; r++) {
        let row = res[r];
        if (row.length === 1 || r === res.length - 1) {
            res[r] = row.join(' ') + ' '.repeat(maxWidth - row.letters - row.length + 1);
            continue;
        }
        let line = row[0];
        let spaces = maxWidth - row.letters;
        let minSpaces = ' '.repeat(Math.floor(spaces / (row.length - 1)));
        let addSpace = spaces % (row.length - 1);
        for (let w = 1; w < row.length; w++) {
            line += minSpaces + (w <= addSpace ? ' ' : '') + row[w];
        }
        res[r] = line;
    }
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */



/*
Prob: Edit Distance
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character

Example:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

*/

var minDistance = function(word1, word2) {
    let dp = Array(word1.length+1).fill(null).map(() =>(Array(word2.length+1).fill(0)));
    for (let i=0; i<dp.length; i++) {
        dp[i][0] = i;
    }
    for (let i=0; i<dp[0].length; i++) {
        dp[0][i] = i;
    }
    for (let i=1; i<dp.length; i++) {
        for (let j=1; j<dp[0].length; j++) {
            dp[i][j] = Math.min(
                dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1] + (word1[i-1] != word2[j-1] ? 1 : 0)
            );
        }
    }
    return dp[dp.length-1][dp[0].length-1];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximal Rectangle
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.
Example: Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
*/

var maximalRectangle = function(matrix) {
    const n = matrix.length;
    if (n === 0) return 0;
    const m = matrix[0].length;
    const h = new Array(n).fill(0);
    let max = 0;
    for (let j=0; j<m; j++) {
        for (let i=0; i<n; i++) {
            if (matrix[i][j] === '1') h[i]++;
            else h[i] = 0;
        }
        for (let i=0; i<n; i++) {
            let k1 = i-1;
            while (k1>=0 && h[i]<=h[k1]) k1--;
            let k2 = i+1;
            while(k2<n && h[i]<=h[k2]) k2++;
            max = Math.max(max, h[i] * (k2-k1-1));
        }
    }
    return max;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


