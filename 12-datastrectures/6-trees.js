/**
 * graph edge case scenarios
 * ==> circular graphs
 * ==> stack overflow in recursion
 * ==> disconnected nodes ????? to do
 */

/**
 * Depth-First Search
 * in graphs, root node is enough to access complete graph
 *
 */

/**
 * notes:
 * ==> queue.shift() to access first element in the array
 * ==> use result.unshift() for bottom up approach
 * ==> use currentLevel for saving the values in each level, than than the the queue.mpa because it's an addition loop as we are already iterating the level
 */

const graph = {
  A: { value: 10, left: "B", right: "C" },
  B: { value: 20, left: null, right: null },
  C: { value: 30, left: "D", right: "E" },
  D: { value: 40, left: null, right: null },
  E: { value: 50, left: null, right: null },
};

const depthFirstSearchRecursion = (nodeKey, visited = new Set()) => {
  if (!nodeKey || visited.has(nodeKey)) return;

  const node = graph[nodeKey];

  console.log(node.value);

  if (node.left) depthFirstSearchRecursion(node.left, visited);
  if (node.right) depthFirstSearchRecursion(node.right, visited);
};

const depthFirstSearchStack = (rootNodeKey) => {
  if (!Object.keys(graph).length) return;

  const visited = new Set();
  const stack = [rootNodeKey];

  while (stack.length > 0) {
    const nodeKey = stack.pop();
    if (visited.has(nodeKey)) {
      continue;
    }

    const node = graph[nodeKey];

    console.log(node.value);

    visited.add(nodeKey);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
};

//console.log(depthFirstSearchStack("A"));

/**
 * BFS
 */

const breathFirstSearchRecursion = (queue, visited = new Set()) => {
  if (!Array.isArray(queue)) {
    throw new TypeError("Queue must be list datatype");
  }
  if (!queue.length) {
    return;
  }

  const nextQueue = [];

  for (nodeKey of queue) {
    if (visited.has(nodeKey)) {
      continue;
    }

    const node = graph[nodeKey];
    console.log(node.value);

    if (node.left) nextQueue.push(node.left);
    if (node.right) nextQueue.push(node.right);
  }

  if (nextQueue.length > 0) breathFirstSearchRecursion(nextQueue, visited);
};

const breathFirstSearchQueue = (rootNodeKey) => {
  if (!graph || typeof graph !== "object" || !Object.keys(graph).length) return;

  const visited = new Set();
  const queue = [rootNodeKey];

  while (queue.length > 0) {
    const nodeKey = queue.shift();

    if (visited.has(nodeKey)) continue;

    const node = graph[nodeKey];

    console.log(node.value);
    visited.add(nodeKey);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
};
console.log(breathFirstSearchQueue(["A"]));

/**
 * When to Use BFS
Finding the Shortest Path:

BFS explores nodes level by level, making it ideal for finding the shortest path in an unweighted graph.
Example: Finding the shortest path in a maze or social network.
Layer-Wise Processing:

If the problem involves processing nodes by their distance from the root.
Example: Identifying the closest friends in a social graph.
Search in Shallow Areas:

BFS is better when the solution is likely closer to the starting point.
 */

/**
 * When to Use DFS
Exploring All Paths:

DFS is useful when you need to explore all possible paths.
Example: Solving a maze with multiple paths to find all possible routes.
Cycle Detection:

DFS can be used to detect cycles in a graph.
Deep Search:

If the solution lies deep in the graph, DFS is more efficient because it dives deeper before backtracking.
Recursive or Backtracking Problems:

Problems like N-Queens, generating permutations, or solving puzzles (Sudoku) often benefit from DFS.
 */

/**
 * practice notes, of using
 */

/**\
 * Client App             Config SDK           Sidecar             AWS AppSync            DynamoDB
    |                     |                  |                      |                      |
    |  getConfig(fId, cKey)|                  |                      |                      |
    |-------------------->|                  |                      |                      |
    |                     |---- HTTP ----->   |                      |                      |
    |                     |                  | In-memory Cache Check |                      |
    |                     |                  |   isStale? ---------->|                      |
    |                     |                  |                      |                      |
    |                     |                  |                      |  GraphQL Query       |
    |                     |                  |                      | -------------------->|
    |                     |                  |                      |                      | 1) DynamoDB.getItem(...)
    |                     |                  |                      | <--------------------|
    |                     |                  |                      | 2) Return config data|
    |                     |                  | <--------------------|                      |
    |                     |                  | 3) Update Cache      |                      |
    |                     |                  | 4) Return config     |                      |
    |<--------------------|<-----------------|                      |                      |
    |     configValue     |                  |                      |                      |
    |                     |                  |                      |                      |

 */
