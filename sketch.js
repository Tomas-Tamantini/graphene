let graph, animation

function preload() {
  let path = "./examples/simple_graph.json"
  let data = loadJSON(path)
  graph = parseGraph(data)
}

function setup() {
  createCanvas(400, 400)
  animation = new SoothingAnimation()
}

function draw() {
  // drawGraph(graph)
  animation.draw()
  animation.step()
}
