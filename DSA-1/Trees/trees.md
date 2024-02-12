# Trees

- Tree need not be a binary tree. A tree node can have more than two children.

## Binary Tree

- Binary Tree: Tree which has two child nodes
- Full Tree: Every item either points to two nodes or zero nodes
- Perfect Tree: A perfect tree means every line that has items in it, is completely filled all the way across
- A perfect tree will always be full and complete
- A binary tree is said to be a complete binary tree if all its levels, except possibly the last level, have the maximum number of possible nodes, and all the nodes in the last level appear as far left as possible.

Reference: https://www.geeksforgeeks.org/difference-between-full-and-complete-binary-tree/

- A child node can only have a single parent
- Two children of a parent node can be termed as siblings
- A node that doesn't have any children is called a leaf.

## Binary Search Tree(BST)

- It's a tree which follows a pattern. The pattern is 'left side is always less than parent and right side is always greater than parent'

- Best possible scenario Big O of BST is O(logn), which is very close to O(1). It also works on 'Divide and Conquer'
- Since Big O is a measure of worst possible scenario, technically the Big O of a binary search tree is O(n)

- For lookup, insert, remove it is going to be O(logn)

- insert() is better in LinkedList, lookup() and remove() are better in Tree
