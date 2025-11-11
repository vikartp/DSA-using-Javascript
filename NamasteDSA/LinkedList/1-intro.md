# LinkedList Introduction

## What is a LinkedList?

A **LinkedList** is a linear data structure where elements (called nodes) are stored in a sequence, but unlike arrays, the elements are not stored in contiguous memory locations. Each node contains two parts:
- **Data**: The actual value stored in the node
- **Pointer/Reference**: A reference to the next node in the sequence

```
Node Structure:
[Data | Next] -> [Data | Next] -> [Data | Next] -> null
```

### Key Characteristics:
- Dynamic size (can grow or shrink during runtime)
- Non-contiguous memory allocation
- Sequential access (no random access like arrays)
- Efficient insertion and deletion at any position

## Types of LinkedList

### 1. Singly LinkedList
- Each node points to the next node
- Traversal is possible only in one direction (forward)
- Last node points to `null`

```
[1|next] -> [2|next] -> [3|next] -> null
```

### 2. Doubly LinkedList
- Each node has two pointers: one to the next node and one to the previous node
- Traversal is possible in both directions
- First node's previous pointer is `null`, last node's next pointer is `null`

```
null <- [prev|1|next] <-> [prev|2|next] <-> [prev|3|next] -> null
```

### 3. Circular LinkedList
- The last node points back to the first node instead of `null`
- Forms a circular chain
- Can be singly or doubly linked

```
[1|next] -> [2|next] -> [3|next] ┐
    ↑                             │
    └─────────────────────────────┘
```

### 4. Circular Doubly LinkedList
- Combines features of both circular and doubly linked lists
- First node's previous points to last node
- Last node's next points to first node

## LinkedList vs Array Comparison

| Aspect | Array | LinkedList |
|--------|-------|------------|
| **Memory Allocation** | Contiguous memory blocks | Non-contiguous memory locations |
| **Size** | Fixed size (static arrays) | Dynamic size |
| **Access Time** | O(1) random access | O(n) sequential access |
| **Insertion at Beginning** | O(n) - requires shifting | O(1) - just update pointers |
| **Insertion at End** | O(1) if space available, O(n) if resizing needed | O(1) with tail pointer, O(n) without |
| **Insertion at Middle** | O(n) - requires shifting | O(n) - need to traverse to position |
| **Deletion at Beginning** | O(n) - requires shifting | O(1) - update head pointer |
| **Deletion at End** | O(1) | O(n) for singly linked, O(1) for doubly linked |
| **Deletion at Middle** | O(n) - requires shifting | O(n) - traverse + O(1) deletion |
| **Search** | O(n) linear, O(log n) if sorted | O(n) linear search only |
| **Memory Overhead** | No extra memory for pointers | Extra memory for storing pointers |
| **Cache Performance** | Better (locality of reference) | Poor (scattered memory locations) |
| **Memory Usage** | Efficient (only data storage) | Less efficient (data + pointers) |

## Efficiency Analysis

### Time Complexities

| Operation | Array | Singly LinkedList | Doubly LinkedList |
|-----------|-------|------------------|------------------|
| **Access by Index** | O(1) | O(n) | O(n) |
| **Search** | O(n) | O(n) | O(n) |
| **Insertion at Head** | O(n) | O(1) | O(1) |
| **Insertion at Tail** | O(1)* | O(1)** | O(1) |
| **Insertion at Position** | O(n) | O(n) | O(n) |
| **Deletion at Head** | O(n) | O(1) | O(1) |
| **Deletion at Tail** | O(1) | O(n) | O(1) |
| **Deletion at Position** | O(n) | O(n) | O(n) |

*_O(1) if array has space, O(n) if resizing needed_*  
*_*O(1) only if tail pointer is maintained_*

### Space Complexities
- **Array**: O(n) - only data storage
- **LinkedList**: O(n) - data storage + pointer storage

## Head and Tail in LinkedList

### Head Pointer
- **Definition**: Points to the first node in the LinkedList
- **Purpose**: Entry point for all operations
- **Importance**: Without head, we cannot access any node in the list

```javascript
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initially empty list
    }
}
```

### Tail Pointer
- **Definition**: Points to the last node in the LinkedList
- **Purpose**: Enables O(1) insertion at the end
- **Optional**: Not always maintained, but useful for certain operations

```javascript
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null; // Optional tail pointer
        this.size = 0;    // Optional size tracking
    }
}
```

### Benefits of Maintaining Tail Pointer

| Operation | Without Tail | With Tail |
|-----------|--------------|-----------|
| **Insert at End** | O(n) - traverse to end | O(1) - direct access |
| **Get Last Element** | O(n) - traverse to end | O(1) - direct access |
| **Append Multiple Elements** | O(n²) - for each element | O(n) - constant per element |

### Example: Insertion with Head and Tail

```javascript
// Insert at beginning (with head)
insertAtHead(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
        this.head = this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.size++;
}

// Insert at end (with tail)
insertAtTail(data) {
    const newNode = new ListNode(data);
    if (!this.tail) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size++;
}
```

## When to Use LinkedList vs Array

### Use LinkedList When:
- Frequent insertions/deletions at the beginning
- Unknown or highly variable data size
- Memory is not a constraint
- Don't need random access to elements
- Implementing other data structures (stacks, queues)

### Use Array When:
- Need random access to elements
- Memory usage is a concern
- Cache performance is important
- Mainly reading/accessing data
- Working with mathematical operations or algorithms that benefit from indexing

## Advantages of LinkedList
1. **Dynamic Size**: Can grow or shrink during runtime
2. **Efficient Insertion/Deletion**: O(1) at head, O(1) at tail with tail pointer
3. **Memory Efficient**: No memory wastage (allocates as needed)
4. **Flexibility**: Easy to implement other data structures

## Disadvantages of LinkedList
1. **No Random Access**: Cannot directly access elements by index
2. **Extra Memory**: Additional memory for storing pointers
3. **Cache Performance**: Poor locality of reference
4. **Not Cache Friendly**: Nodes scattered in memory
5. **Pointer Overhead**: Extra space for each pointer reference

## Conclusion

LinkedLists are powerful data structures that excel in scenarios requiring frequent insertions and deletions, especially at the beginning of the list. While they sacrifice random access capability and have additional memory overhead compared to arrays, their dynamic nature and efficiency in modification operations make them invaluable in many algorithms and applications.

The choice between arrays and linked lists depends on the specific requirements of your application, considering factors like access patterns, modification frequency, memory constraints, and performance requirements.