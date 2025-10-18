class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (newNode.value === temp.value) return undefined;
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (this.root === null) return false;
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left;
            } else if (value > temp.value) {
                temp = temp.right;
            } else {
                return true;
            }
        }
        return false;
    }

    minValueNode(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    BFS() {
        const currentNode = this.root;
        const queue = [];
        const result = [];
        queue.push(currentNode);

        while (queue.length) {
            const temp = queue.shift();
            result.push(temp.value);
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }

        return result;
    }

    BFSWithComments() {
        let currentNode = this.root; // Start at tree root
        let results = []; // Initialize results array
        let queue = []; // Initialize queue for BFS
        queue.push(currentNode); // Add root node to the queue

        // Continue traversal while nodes remain in queue
        while (queue.length) {
            // Dequeue the next node and add its value to results
            currentNode = queue.shift();
            results.push(currentNode.value);

            // Enqueue the left child if it exists
            if (currentNode.left) queue.push(currentNode.left);

            // Enqueue the right child if it exists
            if (currentNode.right) queue.push(currentNode.right);
        }

        // Return the array of visited node values
        return results;
    }

}



let myTree = new BST();

myTree.insert(47);
myTree.insert(21);
myTree.insert(76);
myTree.insert(18);
myTree.insert(27);
myTree.insert(52);
myTree.insert(82);

console.log(myTree.BFS());


/*
    EXPECTED OUTPUT:
    ----------------
    [ 47, 21, 76, 18, 27, 52, 82 ]

*/
