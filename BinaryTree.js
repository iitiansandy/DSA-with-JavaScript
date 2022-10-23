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

