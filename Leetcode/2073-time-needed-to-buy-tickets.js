/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let time = 0;

    for (let i = 0; i < tickets.length; i++) {
        // If i is before or at k, they get to buy one ticket each round while k is still in line.
        // If i is after k, once k has bought all tickets, they stop.
        time += Math.min(tickets[i], tickets[k] - (i > k ? 1 : 0));
    }

    return time;
    // let timeCount = 0;
    // let ticketsToBuy = tickets[k];
    // let currentIndex = k; 
    // while (ticketsToBuy !== 0) {
    //     const temp = tickets.shift();
    //     if (currentIndex !== 0) {
    //         if (temp - 1 !== 0) tickets.push(temp - 1);
    //         currentIndex--;
    //     } else {
    //         ticketsToBuy--;
    //         tickets.push(temp - 1);
    //         currentIndex = tickets.length - 1;
    //     }
    //     timeCount++;
    // }
    // return timeCount;
};