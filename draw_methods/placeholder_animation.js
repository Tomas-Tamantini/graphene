// Taken from Sagar Arora's code at https://p5js.org/examples/simulate-particles.html

class SoothingAnimation {
  #particles
  constructor() {
    this.#particles = []
    for (let i = 0; i < width / 10; i++) this.#particles.push(new Particle())
  }

  draw() {
    background("#0f0f0f")
    this.#drawEdges()
    this.#drawParticles()
  }
  step() {
    this.#particles.forEach((p) => {
      p.step()
    })
  }

  #drawParticles() {
    noStroke()
    fill("rgba(200,169,169,0.5)")
    this.#particles.forEach((p) => {
      p.draw()
    })
  }

  #drawEdges() {
    stroke("rgba(255,255,255,0.04)")
    for (let i = 0; i < this.#particles.length - 1; i++) {
      let pi = this.#particles[i]
      for (let j = i + 1; j < this.#particles.length; j++) {
        let pj = this.#particles[j]
        if (pi.isCloseTo(pj)) {
          pi.drawEdge(pj)
        }
      }
    }
  }
}

class Particle {
  #r
  #x
  #y
  #vx
  #vy

  constructor() {
    this.#r = random(0.5, 4)
    this.#x = random(0 + this.#r, width - this.#r)
    this.#y = random(0 + this.#r, height - this.#r)
    this.#vx = random(-2, 2)
    this.#vy = random(-1, 1)
  }

  draw() {
    circle(this.#x, this.#y, 2 * this.#r)
  }

  step() {
    this.#x += this.#vx
    if (this.#x < this.#r) {
      this.#x = this.#r
      this.#vx *= -1
    } else if (this.#x > width - this.#r) {
      this.#x = width - this.#r
      this.#vx *= -1
    }
    this.#y += this.#vy
    if (this.#y < this.#r) {
      this.#y = this.#r
      this.#vy *= -1
    } else if (this.#y > height - this.#r) {
      this.#y = height - this.#r
      this.#vy *= -1
    }
  }

  isCloseTo(other) {
    let dx = this.#x - other.#x
    let dy = this.#y - other.#y
    return dx * dx + dy * dy < 6400
  }

  drawEdge(other) {
    line(this.#x, this.#y, other.#x, other.#y)
  }
}
