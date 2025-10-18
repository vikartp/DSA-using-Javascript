/**
 * What is a LinkedList?
 * It's a data structure which looks very similar to array but it's not.
 * It doesn't have indexes like array.
 * Arrays are in contiguous places in memory but it's not. They can be all over the place in memory.
 * The first item is represented as 'head' and the last as 'tail'. item => Node.
 * Each node has a value and reference to its next node. It doesn't have any reference to previous node.
 * The last node points to null.
 */

/**
 * Big O of LinkedList:
 * Add a node at the last/ push sth at the end => O(1) => constant time
 * Popping sth at the end => O(n) => It will have to traverse from start to the new last 
 * Add sth at the start => O(1) => There is no indexing traverse like arrays and it just needs head assigment and new pointer refer to prev fisrt item
 * Removing from beginning => O(1)
 * Insert in between => O(n)
 * Remove item from somewhere in between first and last => O(n)
 * Find by value or index => O(n) => can't go like array ex. myArray[3] (that becomes O(1) in array).
 */

/**
 * Comparision between Array & LinkedList:
 * If frequent operation at the beginning is required => LinkedList wins
 * If popping from last and search by index is required frequently => Array wins
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
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

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;

        // implementation using while loop
        // if (index === 0) return this.head;
        // let temp = this.head.next;
        // let count = 1;
        // while (count !== index) {
        //     temp = temp.next;
        //     count++;
        // }
        // return temp;

        // implementation using for loop
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;

    }

}



let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList.get(2)?.value);


/*
    EXPECTED OUTPUT:
    ----------------
    3

*/