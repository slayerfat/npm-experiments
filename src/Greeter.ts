export class Greeter {
  private _message = 'Hello from instance!';

  public static hello() {
    return `Statically hello!`;
  }

  public greet() {
    return this._message;
  }
}
