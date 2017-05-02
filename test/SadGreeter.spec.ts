import {expect} from 'chai';
import {SadGreeter} from '../src/SadGreeter';

describe('SadGreeter', () => {
  it('should greet', () => {
    expect(SadGreeter.hello()).to.be.a('string');
    expect(SadGreeter.hello()).to.equal('Sad hello...');
  });

  it('should instantiate and say hello too', () => {
    let obj = new SadGreeter();
    expect(obj.greet()).to.be.a('string');
    expect(obj.greet()).to.equal('Hello from instance...');
  });
});
