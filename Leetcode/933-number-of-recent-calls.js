/**
 * Number of Recent Calls requires implementing a data structure that counts 
 * how many requests have been made in the last 3000 milliseconds
 */
class RecentCounter {
    requests;
    constructor() {
        this.requests = []; // Stores timestamps of the requests
    }

    ping(t) {
        // Add the current timestamp to the requests array
        this.requests.push(t);

        // Remove timestamps that are older than 3000 ms from the current timestamp
        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }

        // The remaining timestamps are within the 3000ms window
        return this.requests.length;
    }
}

// Example usage:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));    // Output: 1
console.log(recentCounter.ping(100));  // Output: 2
console.log(recentCounter.ping(3001)); // Output: 3
console.log(recentCounter.ping(3002)); // Output: 3
