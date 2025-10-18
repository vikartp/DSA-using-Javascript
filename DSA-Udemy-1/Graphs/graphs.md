# Graphs

- Graphs are the go to data structure when you need to represent entities and the relationships between them.
- Graph is a data structure which consists of vertices(multiple `vertex`)
- Vertex is similar to node of binary tree or linkedlist but can point to any number of nodes(or vertices)
- When two vertices are connected, they are known as `Edge`(sometimes known as Connection)
- `Edge` is bidirectional.
- A binary tree is also a graph which points to only two vertices and are directional.
- A Linkedlist is also special case of tree. So we can say Linkedlist is also a graph.

- Adjacency Matrix: It is a matrix representation of a graph which shows that which vertex is connected to other vertices.
- If connected, corresponding box is marked as `1`, If not then `0`

- Adjacency List: It is a Object which contains key-value pairs. The key will be all vertices and value will be the Edges (array of connected vertices) with that particular key(vertex).

- Space Complexity:

  - Adjacency Matrix: O(|V|<sup>2</sup>)
  - Adjacency List: O(|V| + |E|)
  - V => Number of vertices, E => Number of Edges

- Time Complexity of adding a vertex:

  - Adjacency Matrix: O(|V|<sup>2</sup>)
  - Adjacency List: O(1)
  - A vertex is represented as a key in an object. Key lookup in an object is O(1).

- Time Complexity of creating the Edge for a new vertex:

  - Adjacency Matrix: O(1)
  - Adjacency List: O(1)

- Time Complexity of removing the Edge for a new vertex:

  - Adjacency Matrix: O(1)
  - Adjacency List: O(|E|)

- Time Complexity of removing the vertex(`*`):

  - Adjacency Matrix: O(|V|<sup>2</sup>)
  - Adjacency List: O(|V| + |E|)
  - Finding the vertex is O(1). However, you also have to remove all of the edges associated with the vertex you are removing.

- Notes: When the count for vertices grows for graph then it's very inefficient to use Adjacency matrix. Because we need to store a lot of `0`.
