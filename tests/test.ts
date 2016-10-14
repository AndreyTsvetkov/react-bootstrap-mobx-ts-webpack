import * as Mocha from 'mocha';
import { expect } from 'chai';

console.log(Mocha);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect( [1,2,3].indexOf(4) ).to.be.within(-1, -1);
    });
  });
});