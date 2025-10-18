## Notes

- There is a built-in hash table in JS - JS Objects
- Hash Tables(HT) are a way to store key value pairs like `{age: 23}`, `{nails: 145}` etc.
- A HT can have any size. A default size is also there (in case not provided while forming a new one).
- ASCII stands for American Standard Code for Information Interchange

- How HT works? => There is a hash function inside it which takes the key of key-value pair and process it. It uses ASCII character of those letters in key and generates one index. Then it takes the key-value pair and store in a Array like structure space in the processed index. Next time when user asks value for the same key then it generates the same index by processing it and gives the value from storage with found index after procesing.

- Two Important characteristics:

  - One Way (Only possible to generate index from key, not the other way round)
  - Deterministic (Always produces same index with a key)

- Collision: If same index(single address space) is generated from multiple keys.
  This can be handled in multiple ways like "Separate Chaining" & "Linear Probing".

- Separate Chaining: Using a single address space for more than one key. If same index is generated from multiple keys then those are kept inside an array. So basically a nested array inside Array. This is also known as "Separate Chaining".
  This can also be done by having a LInkedList at that address.

- Linear Probing(open addressing): If it finds that there is already an assignment at specified address space then it goes to next until it finds one.

- Big O: When we run a hash on one of these keys, that equation is going to be the same number of operations, which means it's constant time. So the hash itself is `O(1)`.

  - `set` method is `O(1)`
  - `get` method is also `O(1)` mostly. But if we have most of the item at the same address space(worst case) then it's going to be `O(n)`. So we can say that Big O of HT for get is not always `O(1)`.
    But if we consider the built in hash table like Objects we get a very large address space so mostly it's going to assign a randomized space and hence we consider it as the `O(1)` if we need to find the item by key.
  - Key lookup is O(1) but not value.
  - Hash Table is `O(1)` for Insert and Lookup But it is always `not` better than a Binary Search Tree (worst case scenario will get benefit of divide and conquer)

### Set

- A Set is similar to a Map or an Object, except that instead of having key/value pairs, they only have the keys but not the values.

Sets store a collection of unique elements (in other words, they do not allow duplicates).
