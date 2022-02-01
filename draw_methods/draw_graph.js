function drawGraph(graph) {
  drawEdges(graph.edges)
  drawNodes(graph.nodes)
}

function drawNodes(nodes) {
  nodes.forEach((node) => {
    drawNode(node)
  })
}

function drawEdges(edges) {
  edges.forEach((edge) => {
    drawEdge(edge)
  })
}

function drawEdge(edge) {
  let p1 = getNodePosOnCanvas(edge.sourceNode)
  let p2 = getNodePosOnCanvas(edge.targetNode)
  line(p1.x, p1.y, p2.x, p2.y)
}

function drawNode(node) {
  let { x, y } = getNodePosOnCanvas(node)
  circle(x, y, 10)
}

function getNodePosOnCanvas(node) {
  let posTranslate = width / 100
  let x = node.x * posTranslate
  let y = node.y * posTranslate
  return { x, y }
}
