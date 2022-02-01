class Graph {
  #nodes
  #edges
  constructor(nodes, edges) {
    const allNodes = this.#mapNodes(nodes)
    this.#edges = this.#mapEdges(edges, allNodes)
    this.#nodes = Object.values(allNodes)
  }

  get numNodes() {
    return this.#nodes.length
  }

  get numEdges() {
    return this.#edges.length
  }

  get edges() {
    return this.#edges
  }

  get nodes() {
    return this.#nodes
  }

  #mapEdges(edges, allNodes) {
    if (!edges) return []
    const e = []
    for (let i = 0; i < edges.length; i++) {
      let newEdge = edges[i]
      this.#checkGraphDuplicate(i, edges)
      this.#mapSourceAndTargetNodes(newEdge, allNodes)
      e.push(newEdge)
    }
    return e
  }

  #mapNodes(nodes) {
    if (!nodes) return {}
    let allNodes = {}
    for (let node of nodes) {
      if (node.id in allNodes) throw new Error(`Duplicate node id: ${node.id}`)
      allNodes[node.id] = node
    }
    return allNodes
  }

  #mapSourceAndTargetNodes(newEdge, allNodes) {
    if (newEdge.sourceNode.id in allNodes)
      newEdge.sourceNode = allNodes[newEdge.sourceNode.id]
    else allNodes[newEdge.sourceNode.id] = newEdge.sourceNode
    if (newEdge.targetNode.id in allNodes)
      newEdge.targetNode = allNodes[newEdge.targetNode.id]
    else allNodes[newEdge.targetNode.id] = newEdge.targetNode
  }

  #checkGraphDuplicate(i, edges) {
    const newEdge = edges[i]
    for (let j = 0; j < i; j++) {
      let otherEdge = edges[j]
      if (newEdge.connectsSameNodes(otherEdge))
        throw new Error(
          `More than one edge connecting the same nodes: ${newEdge.sourceNode.id} - ${newEdge.targetNode.id}`
        )
    }
  }
}
