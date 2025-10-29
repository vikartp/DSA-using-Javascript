- Recursion: Function calls itself to solve smaller version of the same problem.
- Two parts of recursion: 
  - Base case: Stop condition (when to stop calling itself)
  - Recursive case: part where function calls itself

- Always make sure that you write base case before recursive case.

- When you forget to write a base case in a recursive function, the function will call itself indefinitely, resulting in an infinite recursion.

- Infinite recursion leads to stack overflow error => RangeError: Maximum call stack size exceeded

- When to use Recursion:
  - Problem can be broken into sub problems
  - Trees & Graphs
  - Backtracking, DP, Divide & Conquer