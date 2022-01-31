class Edge {
  #source
  #target
  constructor(sourceNode, targetNode, label = "") {
    if (sourceNode.id == targetNode.id)
      throw new Error("Cannot connect node to itself.")
    this.#source = sourceNode
    this.#target = targetNode
  }
}
