import { expect } from 'chai';

import parseCell from 'Src/index';


describe('parseCell', () => {
  it('should convert string to object', () => {
    expect(parseCell('A1')).to.deep.equal({ column: 1, row: 1 });
  });

  it('should convert object to string', () => {
    expect(parseCell({ column: 1, row: 1 })).to.deep.equal('A1');
  });
});
