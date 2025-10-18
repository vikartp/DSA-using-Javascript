# Introduction to Backtracking

## Definition

- Backtracking is the recursive algorithmic technique for solving problems incrementally by trying partial solutions and then abandoning them(backtracking) if they fail to satisfy constraints.

- This is the way to explore all possibilities, but being smart by abandoning wrong paths early.

- Examples: 
  - Trying all paths in Maze and going back if you hit a wall
  - If there are multiple ways to reach from point A to point B and there are possible ways which doesn't go to point B. We can analyze and abandon those wrong ways as early as possible.
  - Give all combinations of numbers from an array whose sum results to a particular number.([2,3,5,10,12], Sum: 15)

## When to use Backtracking

- You want to explore all combinations/permutations/subsets.
- There's a clear way to validate a partial solution.
- Number of combinations is too large to bruteforce, so you abandon the invalid ones early

=> TRY A CHOICE => (WORKS? -> CONTINUE)
                => [DIDN'T WORK -> UNDO (BACKTRACK)]