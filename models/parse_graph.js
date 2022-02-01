function parseGraph(graphInput) {
  const nodes = parseNodes(graphInput.nodes)
  const edges = parseEdges(graphInput.edges)
  return new Graph(nodes, edges)
}

function parseNodes(nodesInput) {
  if (!nodesInput) return null
  if (!Array.isArray(nodesInput))
    throw new Error("Nodes should be input as an array")
  return nodesInput.map(parseNode)
}

function parseEdges(edgesInput) {
  if (!edgesInput) return null
  if (!Array.isArray(edgesInput))
    throw new Error("Edges should be input as an array")
  return edgesInput.map(parseEdge)
}

function parseEdge(edgeInput) {
  if (!edgeInput.sourceId || !edgeInput.targetId)
    throw new Error("Edge should have a sourceId and targetId key")
  const n1 = { id: edgeInput.sourceId }
  const n2 = { id: edgeInput.targetId }
  return new Edge(n1, n2, edgeInput.label)
}

function parseNode(nodeInput) {
  if (!nodeInput.id) throw new Error("Node should have an id key")
  let x = nodeInput.x || getRandomCoordinate()
  let y = nodeInput.y || getRandomCoordinate()
  return new Node(nodeInput.id, nodeInput.label, new Vector(x, y))
}

getRandomCoordinate = () => Math.random() * 50 + 25
