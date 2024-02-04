// Define the Node class for a doubly-linked list
class Node {
    // Constructor for creating a new node
    constructor(value) {
        this.value = value; // Set the value of the node
        this.next = null;   // Initialize the next pointer to null
        this.prev = null;   // Initialize the prev pointer to null
    }
}

// Define the DoublyLinkedList class
class DoublyLinkedList {
    // Constructor for creating a new doubly-linked list
    constructor(value) {
        const newNode = new Node(value); // Create a new Node instance
        this.head = newNode; // Set head to the new node
        this.tail = newNode; // Set tail to the new node
        this.length = 1;     // Set initial list length to 1
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}



let myDLL = new DoublyLinkedList(7);

myDLL.getHead();
myDLL.getTail();
myDLL.getLength();

console.log("\nDoubly Linked List:");
myDLL.printList();


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 7
    Tail: 7
    Length: 1

    Doubly Linked List:
    7

*/