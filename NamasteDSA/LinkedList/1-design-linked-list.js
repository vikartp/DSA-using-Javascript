function Node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (this.size === 0 || index < 0 || index > this.size - 1) {
        return -1;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);

    if (this.head === null) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new Node(val);
    if (this.head === null) {
        this.head = node;
    } else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
    }

    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    const node = new Node(val);
    if (index > this.size) {
        return;
    }

    if (index === 0) {
        this.addAtHead(val);
        return;
    }

    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;

    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (this.size === 0 || index > this.size - 1) return;

    if (this.size === 1 && index === 0) {
        this.head = null;
        this.size = 0;
        return;
    }

    if (index === 0) {
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.size--;
        return;
    }

    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
    }

    const elemAtIndex = prev.next;
    prev.next = elemAtIndex.next;
    elemAtIndex.next = null;

    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */