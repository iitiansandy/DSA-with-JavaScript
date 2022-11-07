/*
BINARY TREE

In a binary tree, we must have one root and it must should have two child nodes - left child node and right child node

How to Traverse through a Binary Tree?
1. Pre-Order Traversal : First we go to the root node, then left child node and then right child node
2. Post-Order Traversal : left node, root, right node
3. In-Order Traversal : left node, right node, root
*/

// Pre-Order Traversal
function preOrderTraversal(root){
    if(root == null){
        return;
    }
    print(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}


// In-Order Traversal
function inorder(root){
    if(root == null){
        return;
    };

    inorder(root.left);
    print(root.data);
    inorder(root.right);
}


// Post-Order Traversal
function postOrder(root){
    if(root == null){
        return;
    };

    postOrder(root.left);
    postOrder(root.right);
    print(root.data);
};


// PRINT CURRENT LEVEL

function printCurrentLevel(node, level){
    if (node == null) return;
    if(level == 1) print(node.data);
}


// LEVEL ORDER TRAVERSAL

function levelOrder(root){
    const queue = [];
    queue.push(root);

    while(queue.length){
        let front = queue.shift();
        print(front.data);

        if(front.left) queue.push(front.left);

        if(front.right) queue.push(front.right);
    }
}