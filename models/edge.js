class Edge {
  #source
  #target
  constructor(sourceNode, targetNode, label = "") {
    if (sourceNode.id == targetNode.id)
      throw new Error("Cannot connect node to itself.")
    this.#source = sourceNode
    this.#target = targetNode
  }

  get sourceNode() {
    return this.#source
  }

  set sourceNode(value) {
    this.#source = value
  }

  get targetNode() {
    return this.#target
  }

  set targetNode(value) {
    this.#target = value
  }

  connectsSameNodes(otherEdge) {
    if (this.#source.id == otherEdge.#source.id)
      return this.#target.id == otherEdge.#target.id
    if (this.#source.id == otherEdge.#target.id)
      return this.#target.id == otherEdge.#source.id
    return false
  }
}
