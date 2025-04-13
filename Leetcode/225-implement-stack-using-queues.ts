// USING ARRAY
// class MyStack {
//     stack: number[];
//     constructor() {
//         this.stack = [];
//     }

//     push(x: number): void {
//         this.stack.push(x);
//     }

//     pop(): number {
//         return this.stack.pop();
//     }

//     top(): number {
//         const len = this.stack.length;
//         return this.stack[len - 1];
//     }

//     empty(): boolean {
//         return this.stack.length === 0;
//     }
// }

class MyStack {
    private queue1: number[] = [];
    private queue2: number[] = [];

    constructor() {}

    push(x: number): void {
        // Step 1: Enqueue to queue2
        this.queue2.push(x);
        // Step 2: Move all elements from queue1 to queue2
        while (this.queue1.length) {
            this.queue2.push(this.queue1.shift() as number);
        }
        // Step 3: Swap queue1 and queue2
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    pop(): number {
        return this.queue1.shift() as number;
    }

    top(): number {
        return this.queue1[0];
    }

    empty(): boolean {
        return this.queue1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());    // Output: 2
console.log(stack.pop());    // Output: 2
console.log(stack.empty());  // Output: false
