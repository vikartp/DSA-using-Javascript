- There are two things that are required for something to be able to use dynamic programming:

  - Overlapping Subproblems(repeating subproblems): Suppose we have a big problem. We divide that into many small problems(subproblems). We can solve each small problems and then combine them to get result for that bigger problem. However, There can be a scenario where some of the subproblems are repeating(yield same result with same process). Then we call them Overlapping Subproblems. So we create an array like structure to store the results, so that it doesn't process same thing again and provides the result for a repeating subproblem way faster.

    - <b>This process of storing the answers to these subproblems is called Memoization</b>.
    - Merge sort has subproblems but they are not overlapping.

  - Optimized Substructure: So we have one problem, we break it down into multiple subproblems, they do have overlapping. Apart from this, they need to possess optimal solution for all subproblems. So combining all optimal solution for subproblems, we get a optimal solution for our main problem.
