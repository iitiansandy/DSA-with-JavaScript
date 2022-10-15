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