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

it("should give node random position when none is provided", () => {
  n1 = { id: "A" }
  n2 = { id: "B", x: 10, y: 20 }
  nodes = parseNodes([n1, n2])
  assert(typeof nodes[0].x === "number" && typeof nodes[0].y === "number")
  assert(nodes[1].x === 10 && nodes[1].y === 20)
})
