/*
Prob: Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1: Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2: Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
*/

var isBalanced = function(root) {
    let dfs = function(node){
        if(!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if(Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
    }
    return dfs(root) == Infinity ? false : true;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Diameter of Binary Tree
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.

Example: Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
*/

// Method 1
var diameterOfBinaryTree = function(root) {
    let diameter = 0;
    dfs(root);
    return diameter;

    function dfs(node, level){
        if(!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        // update diameter at every node
        diameter = Math.max(diameter, left+right);

        // update the largest number of edge so far
        return 1+Math.max(left, right);
    }
};


// Method 2
var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    function helper(root){
        if(!root) return -1;

        const lh = 1 + helper(root.left);
        const rh = 1 + helper(root.right);
        diameter = Math.max(diameter, lh + rh);
        return Math.max(lh, rh);
    }
    helper(root);
    return diameter;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Ex: Input: root = [3,9,20,null,null,15,7]
Output: 3
*/

// Iterative Solution
var maxDepth = function(root) {
    if(!root) return 0;
    const queue = [root];
    let depth = 0;
    
    while(queue.length !== 0){
        depth++;
        const len = queue.length;
        for(let i=0; i<len; i++){
            if(queue[i].left) queue.push(queue[i].left);
            if(queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0,len);
    }
    return depth;
};


// Recursive Solution
var maxDepth = function(root) {
    if(root === undefined || root === null) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
*/

var levelOrder = function(root) {
    let q = [root], ans = [];

    while(q[0]){
        let qlen = q.length, row = [];
        for(let i=0; i<qlen; i++){
            let curr = q.shift();
            row.push(curr.val);
            if(curr.left) q.push(curr.left);
            if(curr.right) q.push(curr.right);
        }
        ans.push(row);
    }
    return ans;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example:
Input: root = [2,1,3]
Output: true
*/

var isValidBST = function(root, min=null, max=null) {
    if(!root) return true;
    if(min && root.val <= min.val) return false;
    if(max && root.val >= max.val) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Lowest Common Ancestor of a Binary Tree
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that 
has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example: Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
*/

// Method 1
var lowestCommonAncestor = function(root, p, q) {
    if(!root || root === p || root === q) return root;
    var resL = lowestCommonAncestor(root.left, p, q);
    var resR = lowestCommonAncestor(root.right, p, q);
    return (resL && resR) ? root : (resL || resR);
};


// Method 2
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
      if (node === null) {
        return null;
      }
    
      if (node === p || node === q) {
        return node 
        
      }
      
      const left = dfs(node.left);
      const right = dfs(node.right);
      
      return left && right ? node : left || right;
    }
    
    return dfs(root);
  };


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* 
Prob: Number of Islands
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Example:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
*/
const numIslands =  (grid) => {
	let count = 0 // the counted islands
	//Go though each cell of the 2d array/grid 
	for(let row = 0; row < grid.length; row++){
	for(let col = 0; col < grid[row].length; col ++){
	if(grid[row][col] == '1'){
		count ++
		explore(row,col, grid)
            }
        }
    }
    return count
}



// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(row, col, grid){
    //Let's return IF
    // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
     if (row < 0 || col < 0 || row >= grid.length  
         || col >= grid[row].length || grid[row][col] === '0')  {
        return
    }
    
    //Otherwise, we should explore it!
    //First let's set the current spot to "0"
    grid[row][col]='0'
    
	//Possibilites:
	// 1) 1 to the right, left, top, bottom
	//right
	explore(row, col+1, grid)   
    //Left
	explore(row, col-1, grid)  
    //Down
	explore(row+1, col, grid) 
    //Up
	explore(row-1, col, grid)   

}
let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ];
  console.log(numIslands(grid));


  // Method 2
  var numIslands1 = function(grid) {
    
    const callDFS = (i, j) => {
        if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') return;
        
        grid[i][j] = '0';
        
        callDFS(i-1, j); // up
        callDFS(i+1, j); // down
        callDFS(i, j-1); // left
        callDFS(i, j+1); // right
    }
    
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        
        for(let j = 0; j < grid[i].length; j++) {
            
            if(grid[i][j] === '1') {
                count++;
                callDFS(i, j)
            }
        }
    }
    return count;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Binary Tree Right Side View
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from 
top to bottom.

Example: Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
*/

var rightSideView = function(root) {
    if(!root) return [];
    let res = [];
    pre(root, 0);
    return res;

    function pre(node, h) {
        if(!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);        
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/** Prob: Binary Tree Inorder Traversal
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example: Input: root = [1,null,2,3]
Output: [1,3,2]
 * 
 */

// Iterative Method
var inorderTraversal = function (root) {
    const stack = [];
    const res = [];
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
};


// Recursive Method
var inorderTraversal = function (root) {
    if (!root) return [];

    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
Prob: Binary Tree Level Order Traversal II
Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

Example: Input: root = [3,9,20,null,null,15,7]
Output: [[15,7],[9,20],[3]]
*/

// Recursive solution
var levelOrderBottom = function(root) {
    let h = height(root);
    let results = [];
    let depth = 1;
    for(depth; depth <= h; depth++){
        results.push(levelOrder(root, depth));
    }
    return results.reverse();
};

function levelOrder(node, d, level = []) {
    if (node == null) {
        return level;
    }
    if (d === 1) {
        level.push(node.val);
    } else if (d > 1) {
        levelOrder(node.left, d-1, level);
        levelOrder(node.right, d-1, level);
    }
    return level;
}

function height(node) {
    if (node == null) {
        return 0;
    }
    let left = height (node.left);
    let right = height(node.right);
    return Math.max(left, right) + 1;
}


// Iterative solution
var levelOrderBottom = function(root) {
    if(root == null) return [];

    let queue = [];
    let results = [];
    queue.push(root);

    while (queue.length > 0) {
        let level = [];
        let size = queue.length;

        while (size > 0) {
            let curr = queue.shift();
            level.push([curr.val]);

            if(curr.left != null) {
                queue.push(curr.left);
            }

            if(curr.right != null) {
                queue.push(curr.right);
            }
            size--;
        }
        results.push(level);
    }
    return results.reverse();
};



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
Prob: Search in a Binary Search Tree
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return 
null.

Example: Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]
*/

// Recursion with helper function:
var searchBST = function(root, val) {
    let res = null;
    const helper = (node) => {
        if(!node) return;
        if(node.val === val) {
            res = node;
            return;
        }
        if(val < node.val) helper(node.left);
        if(val > node.val) helper(node.right);
    }
    helper(root);
    return res;
};


// Pure Recursion
var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val === val) return root;
    if(val < root.val) return searchBST(root.left, val);
    if(val > root.val) return searchBST(root.right, val);
};


// Iterative solution
var searchBST = function(root, val) {
    while(root !== null && root.val !== val) {
        root = val < root.val ? root.left : root.right;
    }
    return root;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
PORB: Binary Tree Preorder Traversal
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example: Input: root = [1,null,2,3]
Output: [1,2,3]
*/

// ITERATIVE SOLUTION
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    if(!root) return [];
    var result = [];
    var stack = [root];

    while (stack.length) {
        var node = stack.pop();
        result.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return result;
};


// RECURSIVE SOLUTION
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root, res = []) {
    if (!root) return [];
    res.push(root.val);
    if(root.left) preorderTraversal(root.left, res);
    if(root.right) preorderTraversal(root.right, res);
    return res;
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


/*
PROB: Binary Tree Postorder Traversal
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example: Input: root = [1,null,2,3]
Output: [3,2,1]
*/

// ITERATIVE SOLUTION
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    if (!root) return [];
    let stack = [];
    let res = [];
    stack.push(root);

    while (stack.length) {
        let node = stack[stack.length-1];
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        } else if (node.right) {
            stack.push(node.right);
            node.right = null;
        } else {
            res.push(stack.pop().val);
        }
    }
    return res;
};


// RECURSIVE SOLUTION
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let res =[];
    traverse(root);
    return res;

    function traverse (node) {
         if (!node) return;
         traverse(node.left);
         traverse(node.right);
         res.push(node.val);
    }
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/



