class Node {
  #id
  #label
  constructor(id, label = "") {
    this.#id = id
    this.#label = label
  }

  get id() {
    return this.#id
  }
}
