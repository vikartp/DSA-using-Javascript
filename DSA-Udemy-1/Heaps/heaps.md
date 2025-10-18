# Heaps

- Heap is a binary tree where the numbers are laid out in a different way.
- In a heap, each node has a value that is greater than each of its descendants, and
because of that the maximum value is always going to be at the top.
- This tree(heap) is always 'complete'. A complete tree fills from left to right without any gap.
- We can have duplicates in heaps unlike BST.
- Heaps are implemented using Array in this folder. We start filling from 1st index, from top to bottom, left to right.
- For a node,
  - leftChild = 2 * parentIndex + 1
  - rightChild = 2 * parentIndex + 2
- For a child node,
  - parentIndex = Math.floor((currentIndex - 1)/2)
