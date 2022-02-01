it("should account for all nodes", function () {
  let inputObj = {
    nodes: [{ id: 1 }, { id: 2 }],
  }
  let g = parseGraph(inputObj)
  assert(g.numEdges === 0 && g.numNodes === 2)
})

it("should account for all edges", function () {
  let inputObj = {
    nodes: [{ id: "A" }], // B is implied from edges
    edges: [{ sourceId: "A", targetId: "B" }],
  }
  let g = parseGraph(inputObj)
  assert(g.numEdges === 1 && g.numNodes === 2)
})

it("should load even when nodes key is ommited", () => {
  let inputObj = {
    edges: [
      { sourceId: "A", targetId: "B" },
      { sourceId: "A", targetId: "C" },
      { sourceId: "A", targetId: "D" },
    ],
  }
  let g = parseGraph(inputObj)
  assert(g.numEdges === 3 && g.numNodes === 4)
})
