it("should connect different nodes", function () {
  n1 = { id: 1 }
  n2 = { id: 1 }
  assertRaisesError(() => {
    e = new Edge(n1, n2)
  })
})

it("should recognize another label which connects to same endpoints", function () {
  n1 = { id: 1 }
  n2 = { id: 2 }
  n3 = { id: 3 }
  e1 = new Edge(n1, n2)
  e2 = new Edge(n1, n2)
  e3 = new Edge(n2, n1)
  e4 = new Edge(n2, n3)
  assert(
    e1.connectsSameNodes(e2) &&
      e1.connectsSameNodes(e3) &&
      !e1.connectsSameNodes(e4)
  )
})
