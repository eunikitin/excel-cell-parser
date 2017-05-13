import excelColumnName from 'excel-column-name';


function getFirstDigitPosition(string) {
  return string.search(/\d/);
}

module.exports = function parseCell(cell) {
  switch (typeof cell) {
    case 'string':
      return {
        column: excelColumnName.excelColToInt(cell.slice(0, getFirstDigitPosition(cell))),
        row: parseInt(cell.slice(getFirstDigitPosition(cell)), 10),
      };
    case 'object':
      return excelColumnName.intToExcelCol(cell.column) + cell.row;
    default:
      throw new Error('Invalid argument type');
  }
};
