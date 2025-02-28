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

// var levelOrder = function(root) {
//     if(root === null) return [];
//     let result = [];
//     let level =0;
//     dfsLevelOrder(root, level, result);
//     return result;
// };

// function dfsLevelOrder(node, level, result){
//     if(level === result.length) {
//         result.push([]);
//     }
//     const currentValue = node.val;
//     result[level].push(currentValue);
//     if(node.left){
//         dfsLevelOrder(node.left, level+1, result)
//     }
//     if(node.right){
//         dfsLevelOrder(node.right, level+1, result)
//     }
// }

// levelOrder()
/**
 * graph edge case scenarios
 * ==> circular graphs
 * ==> stack overflow in recursion
 * ==> disconnected nodes ????? to do
 */

const graph = {
  A: { value: 10, left: "B", right: "C" },
  B: { value: 20, left: null, right: null },
  C: { value: 30, left: "D", right: "E" },
  D: { value: 40, left: null, right: null },
  E: { value: 50, left: null, right: null },
};

var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  let queue = [root];
  let level = 0;

  while (queue.length > 0) {
    result.push([]);

    for (node of queue) {
      const nextQueue = [];

      result[level].push(node.value);

      if (node.left) nextQueue.push(node.left);
      if (node.right) nextQueue.push(node.right);

      level++;
    }
    queue = nextQueue;
  }

  return result;
};

console.log(levelOrder(graph.A));



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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const currentLevel = []

        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val)

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.unshift(currentLevel)
    }

    return result;

};