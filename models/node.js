class Node {
  #id
  #label
  #pos
  constructor(id, label, position) {
    this.#id = id
    this.#label = typeof label === "string" ? label : String(this.#id)
    this.#pos = position || this.#randomPosition()
  }

  get id() {
    return this.#id
  }

  get label() {
    return this.#label
  }

  get x() {
    return this.#pos.x
  }

  get y() {
    return this.#pos.y
  }

  #randomPosition() {
    const x = this.#randomCoordinate()
    const y = this.#randomCoordinate()
    return new Vector(x, y)
  }

  #randomCoordinate() {
    const padding = 25
    return Math.random() * (100 - 2 * padding) + padding
  }
}
