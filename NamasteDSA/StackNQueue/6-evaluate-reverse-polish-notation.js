// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operatorSet = new Set(['+', '-', '*', '/']);
    const stack = [];

    for (const char of tokens) {
        if (operatorSet.has(char)) {
            // Approach 1: Use eval()
            const a = stack.pop();
            const b = stack.pop();
            const ans = Math.trunc(eval(`${b} ${char} ${a}`));
            stack.push(ans);

            // Approach 2: If eval() is not allowed, then we can use switch case. We can also create a map for all cases and have operator functions
            // let res = null;
            // const a = Number(stack.pop());
            // const b = Number(stack.pop());
            // switch (char) {
            //     case '+':
            //         res = b + a;
            //         break;
            //     case '-':
            //         res = b - a;
            //         break;
            //     case '*':
            //         res = b * a;
            //         break;
            //     case '/':
            //         res = b / a > 0 ? Math.floor(b / a) : Math.ceil(b / a);
            //         break;
            // }
            // stack.push(res);
        } else {
            stack.push(char);
        }
    }

    return Number(stack.pop());
};