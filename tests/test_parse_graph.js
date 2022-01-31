it("should account for all nodes", function () {
  inputObj = {
    nodes: [{ id: 1 }, { id: 2 }],
  }
  g = parseGraph(inputObj)
  assert(g.numEdges === 0 && g.numNodes === 2)
})

it("should account for all edges", function () {
  inputObj = {
    nodes: [{ id: "A" }], // B is implied from edges
    edges: [{ sourceId: "A", targetId: "B" }],
  }
  g = parseGraph(inputObj)
  assert(g.numEdges === 1 && g.numNodes === 2)
})
