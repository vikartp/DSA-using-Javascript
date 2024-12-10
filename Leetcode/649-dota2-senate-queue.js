/**
 * The problem 649. Dota2 Senate involves simulating the decision-making process
 *  in the Dota2 senate. The problem can be broken down into simulating how Radiant
 *  (R) and Dire (D) senators ban each other in a queue-based manner until only 
 * one faction remains.

Approach:
Use a queue to simulate the process:

Add the indices of Radiant (R) and Dire (D) senators into separate queues.
Simulate rounds:
Compare the indices of the first Radiant and Dire senators in their queues.
The senator with the smaller index bans the other, and their index is added to the end of the queue (indicating they'll participate in the next round).
Continue until one queue is empty.
 */

function predictPartyVictory(senate) {
    const radiantQueue = [];
    const direQueue = [];

    // Separate senators into queues based on their faction
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }

    const n = senate.length;

    // Simulate the banning process
    while (radiantQueue.length > 0 && direQueue.length > 0) {
        const radiantIndex = radiantQueue.shift();
        const direIndex = direQueue.shift();

        // The senator with the smaller index bans the other
        if (radiantIndex < direIndex) {
            radiantQueue.push(radiantIndex + n); // Radiant senator comes back in the next round
        } else {
            direQueue.push(direIndex + n); // Dire senator comes back in the next round
        }
    }

    // Determine the winner
    return radiantQueue.length > 0 ? "Radiant" : "Dire";
}

// Time complexity: O(n), where n is the number of senators
// Space complexity: O(n), as we maintain two queues to track indices of Radiant and Dire senators.

// Test cases
const senate = "RD";
console.log(predictPartyVictory(senate)); // Output: "Radiant"

const senate2 = "RDD";
console.log(predictPartyVictory(senate2)); // Output: "Dire"
