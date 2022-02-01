class Node {
  #id
  #label
  #pos
  constructor(id, label, position) {
    this.#id = id
    this.#label = typeof label === "string" ? label : String(this.#id)
    this.#pos = position || new Vector()
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
}
