/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * in recursion, When we use level++, the original level variable gets incremented, which can cause
 unexpected behavior in the recursive function
 * we can write a funciton, inside another function with different name.
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */


var levelOrder = function(root) {
    if(root === null) return [];
    let result = [];
    let level =0;
    dfsLevelOrder(root, level, result);
    return result;
};

function dfsLevelOrder(node, level, result){
    if(level === result.length) {
        result.push([]);
    }
    const currentValue = node.val;
    result[level].push(currentValue);
    if(node.left){
        dfsLevelOrder(node.left, level+1, result)
    }
    if(node.right){
        dfsLevelOrder(node.right, level+1, result)
    }
}

levelOrder()

