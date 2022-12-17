// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest
//  path from the root node down to the farthest leaf node.

// Time complexity O(n)

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
 let root = new TreeNode(3,
    new TreeNode(9,null,null)
    ,new TreeNode(20,new TreeNode(15,null,null),new TreeNode(7,null,null)))

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0; 
    return Math.max(maxDepth(root.right)+1,maxDepth(root.left)+1)
};
maxDepth(root)