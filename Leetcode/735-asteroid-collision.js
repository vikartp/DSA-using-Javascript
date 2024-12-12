/**
 * We are given an array asteroids of integers representing asteroids in a row.
 * For each asteroid, the absolute value represents its size,
 * and the sign represents its direction (positive meaning right, negative meaning left).
 * Each asteroid moves at the same speed.
 * Find out the state of the asteroids after all collisions.
 * If two asteroids meet, the smaller one will explode. 
 * If both are the same size, both will explode.
 * Two asteroids moving in the same direction will never meet.
 */

/**
 * Hint:
 * The problem 735. Asteroid Collision involves simulating the collision of asteroids represented by an array. 
 * Positive integers represent asteroids moving to the right, and negative integers represent asteroids moving to the left. 
 * When two asteroids collide:
The smaller asteroid (in absolute value) explodes.
If both are of the same size, both explode.
If one asteroid survives, it continues moving in its direction.
The goal is to determine the state of the asteroids after all collisions.
 */

// Time complexity: O(n), where n is the length of the asteroids array.
// Space complexity: O(n), for the stack that holds the asteroids.
function asteroidCollision(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        let destroyed = false;

        while (
            stack.length > 0 &&
            asteroid < 0 &&
            stack[stack.length - 1] > 0
        ) {
            // Compare absolute values for collision
            if (Math.abs(asteroid) > stack[stack.length - 1]) {
                stack.pop(); // Destroy the positive asteroid
            } else if (Math.abs(asteroid) === stack[stack.length - 1]) {
                stack.pop(); // Both asteroids destroy each other
                destroyed = true;
                break;
            } else {
                destroyed = true; // The negative asteroid is destroyed
                break;
            }
        }

        if (!destroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
}

// Test cases
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8]));     // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // Output: [-2, -1, 1, 2]
console.log(asteroidCollision([1, -1, -1, -1])); // Output: [-1, -1]