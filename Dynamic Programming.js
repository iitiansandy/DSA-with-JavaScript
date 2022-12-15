
/*
Prob: Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Example: Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water 
(blue section) are being trapped.
*/

// Method 1 (Dynamic Programming) 
// TC --> O(n);  SC --> O(n);

var trap = function(height) {
    if(height == null || height.length === 0) return 0;

    let res = 0;
    let l = height.length;
    let lMax = {};
    let rMax = {};

    lMax[0] = height[0];
    for (let i=1; i<l; i++) {
        lMax[i] = Math.max(height[i], lMax[i-1]);
    }
    rMax[l-1] = height[l-1];
    for (let i=l-2; i>=0; i--) {
        rMax[i] = Math.max(height[i], rMax[i+1]);
    }
    for (let i=0; i<height.length; i++) {
        res += Math.min(lMax[i], rMax[i]) - height[i];
    }
    return res;
};


// Method 2 (Stack)
// TC --> O(n);  SC --> O(n);
var trap = function(height) {
    let res = 0;
    let i = 0;
    const st = [];

    while (i<height.length) {
        while (st.length !== 0 && height[i] > height[st[st.length-1]]) {
            const top = st[st.length-1];
            st.pop();
            if (st.length === 0) break;
            const dist = i - st[st.length-1] - 1;
            const h = Math.min(height[i], height[st[st.length-1]]) - height[top];
            res += dist * h;
        }
        st.push(i);
        i++;
    }
    return res;
};


// Method 3 (Two Pointer)
// TC --> O(n);  SC --> O(n);
var trap = function(height) {
    if (height == null || height.length === 0) return 0;
    let l = 0;
    let r = height.length-1;
    let lMax = 0;
    let rMax = 0;
    let res = 0;
    while (l < r) {
        lMax = Math.max(lMax, height[l]);
        if (height[l] < lMax) {
            res += lMax - height[l];
        }
        rMax = Math.max(rMax, height[r]);
        if (height[r] < rMax) {
            res += rMax - height[r];
        }
        height[l] < height[r] ? l++ : r--;
    }
    return res;
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Jump Game II
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any 
nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

Example:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

var jump = function(nums) {
    const size = nums.length;
    let destination = size-1;
    let curCoverage = 0, lastJumpIdx = 0;
    let timesOfJump = 0;
    if (size == 1) {
        return 0;
    }

    for (let i=0; i<size; i++) {
        curCoverage = Math.max(curCoverage, i + nums[i]);

        if(i == lastJumpIdx) {
            lastJumpIdx = curCoverage;
            timesOfJump++;

            if (curCoverage >= destination) {
                return timesOfJump;
            }
        }
    }
    return timesOfJump;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Unique Paths II
You are given an m x n integer array grid. There is a robot initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move 
to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]) return 0;
    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = Array.from({length: m}, el => new Uint32Array(n));
    dp[0][0] = 1;
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
        if (obstacleGrid[i][j] || (!i && !j)) continue;
        else dp[i][j] = (i ? dp[i-1][j] : 0) + (j ? dp[i][j-1] : 0);
        }
    }
    return dp[m-1][n-1];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Wildcard Matching
Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where:
'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Example: Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
*/

// Levenshtein Distance Algorithm (Edit Distance)
var isMatch = function(s, p) {
    let dp = Array(s.length+1).fill(null).map(() => Array(p.length+1).fill(false));
    dp[0][0] = true;

    for (let i=1; i<=s.length; i++) {
        dp[i][0] = false;
    }

    for (let i=1; i<=p.length; i++) {
        dp[0][i] = dp[0][i-1] && p[i-1] == "*";
    }

    for (let i=1; i<=s.length; i++) {
        for (let j=1; j<=p.length; j++) {
            if (p[j-1] == '*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1];
            } else if (s[i-1] == p[j-1] || p[j-1] == '?') {
                dp[i][j] = dp[i-1][j-1];
            }
        }
    }
    return dp[s.length][p.length];
};


// Recursive Method
var isMatch = function(s, p) {
    let dp = [];
    var recur = function(s, p) {
        if (!dp[s]) dp[s] = {};
        if (dp[s][p] != null) return dp[s][p];

        if (s == p || (p.includes('*') && !p.replace(/\*/g, ''))) {
            dp[s][p] = true;
        } else if (s.length == 0 || p.length == 0) {
            dp[s][p] = false;
        } else if (p[0] == '?' || p[0] == s[0]) {
            dp[s][p] = recur(s.slice(1), p.slice(1));
        } else if (p[0] == '*') {
            dp[s][p] = recur(s.slice(1), p) || recur(s, p.slice(1));
        } else {
            dp[s][p] = false;
        }
        return dp[s][p];
    }
    return recur(s, p);
};




