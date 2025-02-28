/**
 *Below are high-level notes and guidelines to help you master any dynamic programming (DP) problem. These principles form the foundation for building robust, scalable, and production-grade solutions.

---

### General DP Problem-Solving Guidelines

1. **Understand the Problem Deeply:**
   - **Problem Analysis:**
     Read the problem carefully. Identify the optimization or counting goal (minimization, maximization, or counting).
   - **Check for Overlapping Subproblems:**
     Ask whether the problem can be broken down into smaller subproblems whose solutions can be reused.

2. **Identify the State:**
   - **State Definition:**
     Decide what each DP state represents (e.g., `dp[i]` could denote the optimal solution for the first `i` items, or the number of ways to achieve a goal with `i` resources).
   - **Parameterization:**
     Consider if the state needs to be multi-dimensional (e.g., `dp[i][j]`) to capture additional information like constraints or choices.

3. **Determine the Recurrence Relation:**
   - **Transition:**
     Identify how a state can be derived from previous state(s). Formulate a recurrence that expresses the current state in terms of one or more smaller states.
   - **Consider All Options:**
     Ensure you account for every possible decision or transition that might lead to the optimal solution.

4. **Establish Base Cases:**
   - **Simplicity First:**
     Define the simplest subproblems where the answer is known immediately. These base cases serve as the foundation for the iterative or recursive build-up.
   - **Edge Cases:**
     Think about any edge conditions that might require special handling (e.g., empty input, minimal values).

5. **Choose Your Approach:**
   - **Bottom-Up (Tabulation):**
     - **Iterative Build-Up:**
       Start from the base cases and iteratively fill a DP table until reaching the desired state.
     - **Space Considerations:**
       Consider whether you can optimize space by only storing necessary past states (e.g., using rolling arrays or variables instead of full tables).
   - **Top-Down (Memoization):**
     - **Recursive with Caching:**
       Use recursion to solve the problem and cache results of subproblems to avoid redundant computations.
     - **Trade-Offs:**
       Be mindful of potential stack overflow issues for large input sizes.

6. **Optimize for Time and Space:**
   - **Time Complexity:**
     Analyze the number of states and the work done for each state. Aim for a solution that runs efficiently under given constraints.
   - **Space Complexity:**
     Evaluate whether you can reduce memory usage through state compression or iterative solutions.
   - **Profiling & Benchmarking:**
     In production-grade systems, monitor performance and refactor any bottlenecks.

7. **Implement with Clarity and Robustness:**
   - **Clean Code:**
     Write modular, well-documented code that clearly explains the DP state, transitions, and base cases.
   - **Input Validation:**
     Ensure your solution handles edge cases and invalid inputs gracefully.
   - **Testing & Debugging:**
     Develop comprehensive test cases, including edge conditions, to ensure reliability.

8. **Review and Refactor:**
   - **Code Review:**
     Revisit your solution to see if any further optimizations or refactoring opportunities exist.
   - **Scalability:**
     Consider how the solution might be integrated into larger systems—think about maintainability, logging, monitoring, and error handling.

---

### Final Thoughts

By following these systematic steps, you build a structured approach to tackle any DP problem. Practice is key—consistently applying these principles will sharpen your ability to quickly recognize and solve DP problems at a world-class level. Keep refining your strategy by studying high-quality solutions, participating in competitive programming challenges, and continually learning new optimization techniques.

Focus on these guidelines, and you'll be well on your way to becoming a renowned DP problem solver.
 */



