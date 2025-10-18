class Heap {
    #heap;
    constructor() {
        this.#heap = [];
    }

    getHeap() {
        return this.#heap;
    }

    #leftChild(index) {
        return 2 * index + 1;
    }

    #rightChild(index) {
        return 2 * index + 2;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #swap(i, j) {
        [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
    }

    insert(value) {
        this.#heap.push(value);
        let current = this.#heap.length - 1;

        while (current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
            this.#swap(current, this.#parent(current));
            current = this.#parent(current);
        }
    }

    remove() {
        if (this.#heap.length === 0) {
            return null;
        }

        if (this.#heap.length === 1) {
            return this.#heap.pop();
        }

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.sinkDown(0);

        return maxValue;
    }
}

const heap = new Heap();
heap.insert(99);
heap.insert(72);
heap.insert(61);
heap.insert(58);

console.log(heap.getHeap()); // [99, 72, 61, 58]

heap.insert(100);
console.log(heap.getHeap()); // [100, 99, 61, 58, 72]

heap.insert(75);
console.log(heap.getHeap()); // [100, 99, 75, 58, 72, 61]