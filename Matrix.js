
/*
Prob: Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along 
its path.

Note: You can only move either down or right at any point in time.

Example: Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
*/

var minPathSum = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    for (let i=1; i<n; i++) {
        grid[i][0] += grid[i-1][0];
    }

    for (let j=1; j<m; j++) {
        grid[0][j] += grid[0][j-1];
    }

    for (let i=1; i<n; i++) {
        for (let j=1; j<m; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    return grid[n-1][m-1];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Simplify Path
Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, convert it to 
the simplified canonical path.
Example 1:
Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
*/

var simplifyPath = function(path) {
    let stack = [];
    path = path.split('/');

    for (let i=0; i<path.length; i++) {
        if (path[i] == '.' || path[i] == '') continue;
        if (path[i] == '..') stack.pop();
        else stack.push(path[i]);
    }
    return '/'+stack.join('/');
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

