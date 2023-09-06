import { range } from './utils';

function Grid({ numRows, numCols }) {

  // Create a variable called rowNum
  const rowNum = range(numRows).map((rowIndex) => (
    // For each row element a div is created 👇
    <div keys={rowIndex} className="row">
      {range(numCols).map((colIndex) =>(
        // For each column element a div is created 👇
        <div key={colIndex} className="cell"></div>
      ))}
    </div>
  ));

  return (
    <div className="grid">{rowNum}
    </div>
  );
}

export default Grid;

