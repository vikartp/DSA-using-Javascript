/**
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
 */
class TimeLimitedCache {
    private store = new Map();
    constructor() { }

    set(key: number, value: number, duration: number): boolean {
        const setValue = () => {
            const valueObj = {
                value,
                duration,
                createdAt: Date.now()
            }
            this.store.set(key, valueObj);
        };

        let result: boolean = false;

        if (this.store.has(key)) {
            result = this.checkIfUnExpired(key);
        }
        setValue();
        return result;
    }

    get(key: number): number {
        const isUnExpired = this.checkIfUnExpired(key);
        if (!isUnExpired) return -1;

        const oldValue = this.store.get(key);
        return oldValue.value;
    }

    count(): number {
        let count = 0;
        for (const key of this.store.keys()) {
            if (this.checkIfUnExpired(key)) {
                count++;
            }
        }

        return count;
    }

    checkIfUnExpired(key: number): boolean {
        const oldValue = this.store.get(key);
        if (!oldValue) return false;

        return Date.now() <= oldValue.createdAt + oldValue.duration;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */