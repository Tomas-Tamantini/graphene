it("should give itself random position when none is provided", () => {
  let n = new Node("A")
  assert(typeof n.x === "number" && typeof n.y === "number")
})
