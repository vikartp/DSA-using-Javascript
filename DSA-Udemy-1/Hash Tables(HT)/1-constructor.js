class HashTable {
    // default size here is 7 but It can be any number
    constructor(size = 7) {
        // Initialize dataMap with specified size
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        // 23 is taken here as an example out of any prime number
        // key.charCodeAt(i) => Gives an ASCII number
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

}



let myHashTable = new HashTable();
myHashTable.printTable();


/*
    EXPECTED OUTPUT:
    ----------------
    0 :  undefined
    1 :  undefined
    2 :  undefined
    3 :  undefined
    4 :  undefined
    5 :  undefined
    6 :  undefined

*/