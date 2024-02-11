class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stackList.pop();
    }

}



function sortStack(stack) {
    // Initialize an additional stack to help in sorting. This stack
    // will store elements in sorted order.
    const additionalStack = new Stack();

    // Continue the process until the original stack is empty.
    // This loop sorts the stack one element at a time.
    while (!stack.isEmpty()) {
        // Pop the top element from the original stack. This element
        // is the one we're currently trying to place in the correct
        // position in the sorted stack.
        const temp = stack.pop();

        // If the additional stack is not empty and its top element is
        // greater than the element we just popped (temp), we need to
        // move the top element of additionalStack back to the original
        // stack. This loop continues until we find the correct position
        // for temp in the additional stack.
        while (!additionalStack.isEmpty() && additionalStack.peek() > temp) {
            // Pop from additionalStack and push onto the original stack.
            // This step effectively reverses the order of elements that
            // are larger than temp, ensuring they can be sorted later.
            stack.push(additionalStack.pop());
        }

        // Push the temp value into the additionalStack. Now, temp is in
        // the correct position relative to the already sorted elements
        // in additionalStack.
        additionalStack.push(temp);
    }

    // At this point, all elements from the original stack have been
    // moved to additionalStack in sorted order. We now need to move
    // them back to the original stack to maintain the stack order
    // (LIFO - Last In First Out).
    while (!additionalStack.isEmpty()) {
        // Pop from additionalStack and push onto the original stack.
        // This reverses the sorted order back to the original stack,
        // maintaining the sorted sequence.
        stack.push(additionalStack.pop());
    }
}



function stackToString(stack) {
    return JSON.stringify(stack.getStackList());
}

// Test case 1
const stack1 = new Stack();
stack1.push(5);
stack1.push(3);
stack1.push(8);
stack1.push(1);
const expected1 = JSON.stringify([8, 5, 3, 1]);
sortStack(stack1);
const result1 = stackToString(stack1);
console.log(`Test case 1 | Expected: ${expected1} | Result: ${result1}`);

// Test case 2
const stack2 = new Stack();
stack2.push(9);
stack2.push(4);
stack2.push(7);
stack2.push(2);
const expected2 = JSON.stringify([9, 7, 4, 2]);
sortStack(stack2);
const result2 = stackToString(stack2);
console.log(`Test case 2 | Expected: ${expected2} | Result: ${result2}`);

// Test case 3
const stack3 = new Stack();
stack3.push(10);
stack3.push(6);
stack3.push(3);
stack3.push(1);
stack3.push(5);
const expected3 = JSON.stringify([10, 6, 5, 3, 1]);
sortStack(stack3);
const result3 = stackToString(stack3);
console.log(`Test case 3 | Expected: ${expected3} | Result: ${result3}`);


/*
    EXPECTED OUTPUT:
    ----------------
    Test case 1 | Expected: [8,5,3,1] | Result: [8,5,3,1]
    Test case 2 | Expected: [9,7,4,2] | Result: [9,7,4,2]
    Test case 3 | Expected: [10,6,5,3,1] | Result: [10,6,5,3,1]

*/
