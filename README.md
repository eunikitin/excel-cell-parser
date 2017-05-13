# Excel cell parser
[![Build Status](https://travis-ci.org/eunikitin/excel-cell-parser.svg?branch=master)](https://travis-ci.org/eunikitin/excel-cell-parser)
[![Coverage Status](https://coveralls.io/repos/github/eunikitin/excel-cell-parser/badge.svg?branch=master)](https://coveralls.io/github/eunikitin/excel-cell-parser?branch=master)
[![dependencies Status](https://david-dm.org/eunikitin/excel-cell-parser/status.svg)](https://david-dm.org/eunikitin/excel-cell-parser)
[![devDependencies Status](https://david-dm.org/eunikitin/excel-cell-parser/dev-status.svg)](https://david-dm.org/eunikitin/excel-cell-parser?type=dev)

Convert Excel cell name string to object of format 
```
{
  column: number,
  row: number
}
```
and back

## Install
```$ npm install --save excel-cell-parser```

## Usage
```js
var parseCell = require('excel-cell-parser');
 
parseCell({ column: 3, row: 2 }); // C2
parseCell('D3') // { column: 4, row: 3 }
```
