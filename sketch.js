let graph, animation

function preload() {
  let path = "examples/simple_graph.json"
  loadJSON(path, (data) => (graph = parseGraph(data)))
}

function setup() {
  createCanvas(400, 400)
  animation = new SoothingAnimation()
}

function draw() {
  // if (graph) drawGraph(graph)
  // noLoop()
  animation.draw()
  animation.step()
}
