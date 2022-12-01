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

