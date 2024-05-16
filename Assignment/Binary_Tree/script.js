//What is binary tree?
/*

A binary tree is a fundamental data structure in computer science composed of nodes where each node has at most two children,
referred to as the left child and the right child. These children are also nodes themselves and are connected by edges. Each
node contains a piece of data and references to its left and right children.
The hierarchical nature of binary trees means that each node can have a parent (except for the root node, which has no parent)
 and zero, one, or two children. This hierarchical arrangement is often used to represent hierarchical relationships in data,
 such as the structure of file systems, the organization of HTML/XML documents, or the ancestry of organisms in biology.


*/

//Why we need binary tree?
/*
Efficient Searching: Binary search trees (BSTs) provide efficient searching capabilities. With each node having at most two children, BSTs ensure that the time complexity for searching, inserting, and deleting elements is O(log n) on average, where n is the number of nodes in the tree. This efficiency is crucial for applications requiring fast retrieval of data, such as databases and search algorithms.

Ordered Data Storage: Binary search trees store data in a sorted order. In a BST, the left subtree of a node contains only values less than the node's value, and the right subtree contains only values greater than the node's value. This property makes binary trees useful for applications requiring ordered data storage and retrieval.

Hierarchical Representation: Binary trees naturally represent hierarchical relationships. Many real-world scenarios involve hierarchical data structures, such as file systems, organization charts, and family trees. Binary trees provide an intuitive way to model and manipulate such hierarchical relationships.

Expression Evaluation: Binary expression trees are used to represent mathematical expressions in a hierarchical manner, with operators as internal nodes and operands as leaf nodes. These trees facilitate the evaluation of expressions and the manipulation of mathematical operations.

Balanced Tree Variants: Balanced binary trees, such as AVL trees and Red-Black trees, ensure that the height of the tree remains balanced, leading to more predictable performance characteristics. Balanced trees are crucial in scenarios where maintaining efficient performance for various operations is essential, such as in database indexing and priority queues.

Space Efficiency: Binary trees can be space-efficient, especially in comparison to linear data structures like arrays or linked lists. While some tree variants may require additional memory for maintaining balance or storing metadata, binary trees generally provide efficient memory usage for storing and organizing data.

*/

//Explain with example 
/*
          10           Level 0
         /  \
        5    15        Level 1
       / \   / \
      3   7 12  18     Level 2
     /                 Level 3
    4 
Parent Node: Each node in the binary tree, except the root node, has a parent. For example, in the tree above:
5 and 15 are parent nodes of 3, 7, 12, and 18.
10 is the parent node of 5 and 15.
3 is the parent node of 4

Child Node: Each node in the binary tree can have at most two children. For example:
5 is a child node of 10.
15 is a child node of 10.
3 and 7 are child nodes of 5.
12 and 18 are child nodes of 15.

Sibling Nodes: Sibling nodes are nodes that share the same parent. For example:
5 and 15 are sibling nodes because they have the same parent (10).
3 and 7 are sibling nodes because they have the same parent (5).
12 and 18 are sibling nodes because they have the same parent (15).

Leaf Nodes: Leaf nodes are nodes that do not have any children. For example:
4, 7, 12, and 18 are leaf nodes in the tree above. 

Ancestor Nodes: Ancestor nodes of a particular node are the nodes that lie on the path from the root node to that particular node. For example:
Ancestors of node 3 are 5 and 10.
Ancestors of node 15 are 10.
Ancestors of 4 are 3,5,10


Subtree Property:
The subtree property of a node in a binary tree refers to the subtree rooted at that node, including the node itself and all its descendants.
Subtree Property:
- Subtree rooted at node 5: [5, 3, 7]
- Subtree rooted at node 15: [15, 12, 18]
- Subtree rooted at node 3: [3]
- Subtree rooted at node 7: [7]
- Subtree rooted at node 12: [12]
- Subtree rooted at node 18: [18]
-Subtree rooted at node 10: [10, 5, 15, 3, 7, 12, 18]

*/


/*

          10       Level 0
         /  \
        5    15    Level 1
       / \   / \
      3   7 12  18  Level 2

Pre-order Traversal:

In pre-order traversal, we visit each node in the following order: root, left subtree, right subtree.
Starting from the root node (10), we visit it first.
Then, we recursively visit the left subtree (5 -> 3 -> 7).
Next, we recursively visit the right subtree (15 -> 12 -> 18).
So, the pre-order traversal of the tree is: 10, 5, 3, 7, 15, 12, 18.
In-order Traversal:

In in-order traversal, we visit each node in the following order: left subtree, root, right subtree.
Starting from the root node (10), we recursively visit the left subtree (5 -> 3 -> 7).
After visiting the left subtree completely, we visit the root node (10).
Then, we recursively visit the right subtree (15 -> 12 -> 18).
So, the in-order traversal of the tree is: 3, 5, 7, 10, 12, 15, 18.
Post-order Traversal:

In post-order traversal, we visit each node in the following order: left subtree, right subtree, root.
Starting from the root node (10), we recursively visit the left subtree (5 -> 3 -> 7).
After visiting the left subtree completely, we recursively visit the right subtree (15 -> 12 -> 18).
Finally, we visit the root node (10).
So, the post-order traversal of the tree is: 3, 7, 5, 12, 18, 15, 10.

*/

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a new node into the binary tree
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Recursive method to insert a new node
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }


}

// Example usage:
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// console.log("tree:", JSON.stringify(tree)); 
console.log("tree:", JSON.stringify(tree)); 
