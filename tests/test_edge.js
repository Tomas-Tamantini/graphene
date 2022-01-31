it("should connect different nodes", function () {
  n1 = { id: 1 }
  n2 = { id: 1 }
  assertRaisesError(() => {
    e = new Edge(n1, n2)
  })
})
