/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. 
 * In how many distinct ways can you climb to the top?
 */

// Time complexity: O(n)
// Space complexity: O(1)
function climbStairs(n) {
    if (n <= 1) return 1; // Base case: 1 way to climb 0 or 1 step
    
    let first = 1; // Ways to reach step 0
    let second = 1; // Ways to reach step 1
    
    for (let i = 2; i <= n; i++) {
      let current = first + second; // Current step is the sum of the previous two
      first = second; // Move first pointer to the next step
      second = current; // Move second pointer to the next step
    }
    
    return second; // Second pointer holds the total ways to reach step n
  }
  
  // Example usage:
  const n = 5; // Number of steps in the staircase
  console.log(`Number of ways to climb ${n} steps:`, climbStairs(n));
    // Output: 8  