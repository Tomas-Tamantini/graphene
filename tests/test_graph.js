it("should reject duplicate nodes", function () {
  let n1 = { id: 1 }
  let n2 = { id: 1 }
  let nodes = [n1, n2]
  assertRaisesError(() => {
    let g = new Graph(nodes)
  })
})

it("should reject duplicate edges", function () {
  let n1 = { id: 1 }
  let n2 = { id: 2 }
  let e1 = new Edge(n1, n2)
  let e2 = new Edge(n2, n1)
  let nodes = null
  let edges = [e1, e2]
  assertRaisesError(() => {
    let g = new Graph(nodes, edges)
  })
})

it("should account for all nodes", function () {
  let n1 = { id: 1 }
  let n2 = { id: 2 }
  let e = new Edge(n1, n2)
  let nodes = [n1]
  let edges = [e1] // n2 should be accounted for because it is in e1
  let g = new Graph(nodes, edges)
  assert(g.numEdges === 1 && g.numNodes === 2)
})
