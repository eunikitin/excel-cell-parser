import { expect } from 'chai';

import parseCell from 'Src/index';


describe('parseCell', () => {
  it('should convert string to object', () => {
    expect(parseCell('A1')).to.deep.equal({ column: 1, row: 1 });
  });

  it('should convert object to string', () => {
    expect(parseCell({ column: 1, row: 1 })).to.deep.equal('A1');
  });

  it('should throw an error if param is not valid', () => {
    expect(() => parseCell()).to.throw(Error);
    expect(() => parseCell(true)).to.throw(Error);
    expect(() => parseCell(0)).to.throw(Error);
  });
});
