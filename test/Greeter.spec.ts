import {expect} from 'chai';
import {Greeter} from '../src/Greeter';

describe('Greeter', () => {
  it('should sadly greet', () => {
    expect(Greeter.hello()).to.be.a('string');
    expect(Greeter.hello()).to.equal('Statically hello!');
  });

  it('should instantiate and sadly say hello too', () => {
    let obj = new Greeter();
    expect(obj.greet()).to.be.a('string');
    expect(obj.greet()).to.equal('Hello from instance!');
  });
});
