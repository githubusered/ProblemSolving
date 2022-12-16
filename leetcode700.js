// 700. Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node.
//  If such a node does not exist, return null.

//  Definition for a binary tree node.
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// Time complexity O(n)
var searchBST = function(root, val) {
    if(!root){return null}
    while(root){
        if(root.val === val){return root}
        else if(root.val < val) {
            root = root.right
        }else{
            root = root.left
        }
    }
    return null
};