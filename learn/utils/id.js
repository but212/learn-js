class Id {
  #value;
  constructor(value) {
    this.#value = value;
  }
  fmap(f) {
    return new Id(f(this.#value));
  }
  get value() {
    return this.#value;
  }
  static of(value) {
    return new Id(value);
  }
  toString() {
    return `Id(${this.value})`;
  }
}
