class Node {
  #id
  #label
  constructor(id, label) {
    this.#id = id
    this.#label = typeof label === "string" ? label : String(this.#id)
  }

  get id() {
    return this.#id
  }

  get label() {
    return this.#label
  }
}
