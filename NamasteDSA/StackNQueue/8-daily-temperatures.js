// https://leetcode.com/problems/daily-temperatures/description/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0);

    const stack = [];
    const n = temperatures.length;
    stack.push(n-1);

    for (let i = n - 2; i >= 0; i--) {
        const currTemp = temperatures[i];
        while(stack.length) {
            const top = stack[stack.length - 1];
            if (currTemp < temperatures[top]) {
                answer[i] = top - i;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(i);
    }

    return answer;
};