class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    printTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(i, ": ", this.dataMap[i]);
        }
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.dataMap[index]) this.dataMap[index] = [];

        this.dataMap[index].push([key, value]);
        return this;
    }

    get(key) {
        let index = this._hash(key);
        if (this.dataMap[index]) {
            for (let i = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    keys() { // Retrieve all keys present in hash table
        let allKeys = []; // Initialize array to store keys

        // Iterate through each index in dataMap
        for (let i = 0; i < this.dataMap.length; i++) {
            // Check if entry exists at the current index
            if (this.dataMap[i]) {
                // Iterate through array at index
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    // Add current key to allKeys array
                    allKeys.push(this.dataMap[i][j][0]);
                }
            }
        }

        // Return array of all keys
        return allKeys;
    }

}



let myHashTable = new HashTable();

myHashTable.set("paint", 20);
myHashTable.set("bolts", 40);
myHashTable.set("nails", 100);
myHashTable.set("tile", 50);
myHashTable.set("lumber", 80);

console.log(myHashTable.keys());


/*
    EXPECTED OUTPUT:
    ----------------
    [ 'paint', 'bolts', 'nails', 'tile', 'lumber' ]

*/