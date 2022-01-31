it("should reject duplicate nodes", function () {
  n1 = { id: 1 }
  n2 = { id: 2 }
  nodes = [n1, n2]
  assertRaisesError(() => {
    g = new Graph(nodes)
  })
})

it("should reject duplicate edges", function () {
  n1 = { id: 1 }
  n2 = { id: 2 }
  e1 = new Edge(n1, n2)
  e2 = new Edge(n2, n1)
  nodes = null
  edges = [e1, e2]
  assertRaisesError(() => {
    g = new Graph(nodes, edges)
  })
})

it("should account for all nodes", function () {
  n1 = { id: 1 }
  n2 = { id: 2 }
  e = new Edge(n1, n2)
  nodes = [n1]
  edges = [e1]
  g = new Graph(nodes, edges)
  assert(g.numEdges === 1 && g.numNodes === 2)
})
