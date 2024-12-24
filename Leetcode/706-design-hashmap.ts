class MyHashMap {
    hashMap;
    constructor() {
        this.hashMap = [];
    }

    put(key: number, value: number): void {
        if (this.get(key) !== -1) {
            for(const pair of this.hashMap) {
                if(key === pair[0]) {
                    pair[1] = value;
                }
            }
        } else {
            this.hashMap.push([key,value]);
        }
        return this.hashMap;
    }

    get(key: number): number {
        for(const pair of this.hashMap) {
            if(key === pair[0]) {
                return pair[1];
            }
        }
        return -1;
    }

    remove(key: number): void {
        let index = 0;
        let temp = true;
        while (temp && index <= this.hashMap.length) {
            if (this.hashMap[index] && this.hashMap[index][0] === key){
                temp = false;
            } else {
                index++;
            }
        }
        if (!temp) this.hashMap.splice(index,1);
        return this.hashMap;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// class MyHashMap {
//     size;
//     buckets;
//     constructor() {
//         this.size = 1000; // Size of the hash map
//         this.buckets = new Array(this.size).fill(null).map(() => []);
//     }

//     _hash(key) {
//         return key % this.size;
//     }

//     put(key, value) {
//         const index = this._hash(key);
//         const bucket = this.buckets[index];

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                 bucket[i][1] = value; // Update the value if the key exists
//                 return;
//             }
//         }

//         bucket.push([key, value]); // Add new key-value pair
//     }

//     get(key) {
//         const index = this._hash(key);
//         const bucket = this.buckets[index];

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                 return bucket[i][1]; // Return the value if the key exists
//             }
//         }

//         return -1; // Key not found
//     }

//     remove(key) {
//         const index = this._hash(key);
//         const bucket = this.buckets[index];

//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] === key) {
//                 bucket.splice(i, 1); // Remove the key-value pair
//                 return;
//             }
//         }
//     }
// }
