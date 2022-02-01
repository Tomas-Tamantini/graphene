class Vector {
  #x
  #y
  constructor(x, y) {
    this.#x = x || 0
    this.#y = y || 0
  }

  get x() {
    return this.#x
  }

  get y() {
    return this.#y
  }
}
