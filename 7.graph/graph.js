class Graph {
  constructor() {
    this.adjacentList = new Map();
  }

  // add vertex
  addVertex(v) {
    // set inserted elements as vertex
    this.adjacentList.set(v, []);
  }

  // add Edge
  addEdge(v, w) {
    // for undirected graph, we can compare both sides
    this.adjacentList.get(v).push(w);
    this.adjacentList.get(w).push(v);
  }

  // render it in console
  render() {
    // get all the vertices
    let keys = this.adjacentList.keys();

    // loop through each vertex
    for (let key of keys) {
      let values = this.adjacentList.get(key);
      let text = "";

      // loop through each edge
      for (let value of values) {
        //   render the edges that has the same vertex as a string
        text += value + " ";
      }

      // render vertices and edges
      console.log(key + " --> " + text);
    }
  }
}

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F"];

// loop through 'vertices' array,
// set them as vertices
for (let i = 0; i < vertices.length; i++) {
  graph.addVertex(vertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "D");
graph.addEdge("F", "E");
graph.addEdge("E", "A");

// A --> B C E
// B --> A C
// C --> A B E
// D --> F E
// E --> C D F A
// F --> D E

graph.render();
