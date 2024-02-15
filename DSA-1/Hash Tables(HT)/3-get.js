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

    get(key) { // Retrieve value associated with the key
        // Compute hash value for the key
        let index = this._hash(key);

        // Check if entry exists at the computed index
        if (this.dataMap[index]) {
            // Iterate through array at index
            for (let i = 0; i < this.dataMap[index].length; i++) {
                // Check if current key matches input key
                if (this.dataMap[index][i][0] === key) {
                    // Return corresponding value
                    return this.dataMap[index][i][1];
                }
            }
        }

        // Key not found, return undefined
        return undefined;
    }

}



let myHashTable = new HashTable();

myHashTable.set("nails", 100);
myHashTable.set("tile", 50);
myHashTable.set("lumber", 80);

console.log("Lumber:");
console.log(myHashTable.get("lumber"));

console.log("\nBolts:");
console.log(myHashTable.get("bolts"));


/*
    EXPECTED OUTPUT:
    ----------------
    Lumber:
    80

    Bolts:
    undefined

*/