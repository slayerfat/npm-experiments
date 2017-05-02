import {Greeter} from './Greeter';

export class SadGreeter extends Greeter {
  private _sadMessage = 'Hello from instance...';

  public static hello() {
    return `Sad hello...`;
  }

  public greet() {
    return this._sadMessage;
  }
}
