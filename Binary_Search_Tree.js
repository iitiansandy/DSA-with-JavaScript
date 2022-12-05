/*
Prob: Convert Sorted List to Binary Search Tree
Given the head of a singly linked list where elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example : Input: head = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
*/

var sortedListToBST = function(head) {
    let curr = head, count = 0;
    while (curr) curr = curr.next, count++;
    const treefy = (i, j) => {
        if(j<i) return null;
        let mid = i+j >> 1, node = new TreeNode();
        node.left = treefy(i, mid-1);
        node.val = curr.val, curr = curr.next;
        node.right = treefy(mid+1, j);
        return node;
    }
    curr = head;
    return treefy(1, count);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Unique Binary Search Trees
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

Example: Input: n = 3
Output: 5
*/

var numTrees = function(n) {
    let G = new Array(n+1).fill(0);
    G[0] = 1;
    G[1] = 1;
    for (let i=2; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            G[i] += G[j-1] * G[i-j];
        }
    }
    return G[n];
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Delete Node in a BST
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated)
of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Ex: Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
*/

var deleteNode = function(root, key) {
    function callDFS(node) {
        if(!node) return null;
        if(node.val === key) {
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            let curr = node.right;
            while(curr.left) curr = curr.left;
            curr.left = node.left;
            return node.right;
        }
        if(key > node.val) node.right = callDFS(node.right);
        else node.left = callDFS(node.left);
        return node;
    }
    return callDFS(root);
};


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Recover Binary Search Tree
You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the 
tree without changing its structure.
Input: root = [1,3,null,null,2]
Output: [3,1,null,null,2]
Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid.
*/

// ITERATIVE SOLUTION
var recoverTree = function (root) {
    const stack = [];
    let node = root;
    let prev = null;
    let x = null, y = null;

    while (stack.length || node) {
        if (node) {
            stack.push(node);
            node = node.left;
            continue;
        }
        node = stack.pop();
        if (prev && prev.val > node.val) {
            y = node;
            if (!x) x = prev;
            else break;
        }
        prev = node;
        node = node.right;
    }
    [x.val, y.val] = [y.val, x.val];
};

// RECURSIVE SOLUTION
var recoverTree = function (root) {
    let x = null;
    let y = null;
    let prev = null;
    const dfs = (node) => {
        if (!node) return;
        dfs(node.left);
        if (prev && node.val < prev.val) {
            if (x == null) x = prev;
            y = node;
        }
        prev = node;
        dfs(node.right);
    };
    dfs(root);
    [x.val, y.val] = [y.val, x.val];
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Same Tree
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
Input: p = [1,2,3], q = [1,2,3]
Output: true
*/

// Method 1
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q || p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Method 2
var isSameTree = function(p, q) {
    return JSON.stringify(p) === JSON.stringify(q);
};


// Method 3
var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if((!p && q) || (p && !q) || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Unique Binary Search Trees II
Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. 
Return the answer in any order.

Example: Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
*/

// Method 1
var generateTrees = function(n) {
    if(n == 0) return [];
    return findAllUniqTrees(1, n);
    function findAllUniqTrees(start, end) {
        const ans = [];
        if (start > end) {
            ans.push(null);
            return ans;
        };
        if (start == end) {
            ans.push(new TreeNode(start));
            return ans;
        }

        for(let i=start; i<=end; i++) {
            const leftSubTrees = findAllUniqTrees(start, i-1);
            const rightSubTrees = findAllUniqTrees(i+1, end);

            for(const leftSubTree of leftSubTrees) {
                for(const rightSubTree of rightSubTrees) {
                    const root = new TreeNode(i);
                    root.left = leftSubTree;
                    root.right = rightSubTree;
                    ans.push(root);
                }
            }
        }
        return ans;
    }
};


// Method 2



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*
Prob: Binary Search Tree Iterator
Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
Ex: Input
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
Output
[null, 3, 7, true, 9, true, 15, true, 20, false]

Explanation
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3
bSTIterator.next();    // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 20
bSTIterator.hasNext(); // return False
*/

function BSTIterator(root) {
    var stack = [];
    return {hasNext, next};
  
    function hasNext() {
      return root || stack.length;
    }
  
    function next() {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      root = stack.pop();
      var result = root.val;
      root = root.right;
      return result;
    }
  }



/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


