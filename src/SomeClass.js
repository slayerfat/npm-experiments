export class SomeClass {
  static hello() {
    return `Statically hello!`;
  }

  hello() {
    return `Hello from ${this.constructor.name}!`;
  }
}
