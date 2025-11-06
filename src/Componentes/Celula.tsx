import React from 'react'

type CelulaProp = {
  j : number,
  i : number,
  grid : number[][],
  setGrid : React.Dispatch<React.SetStateAction<number[][]>>,
};

const Celula = ({j, i, grid, setGrid} : CelulaProp) => {
  return (
    <div
      onClick={() => {
        let gridNova = JSON.parse(JSON.stringify(grid));
        gridNova[i][j] = grid[i][j]===1 ? 0 : 1;
        setGrid(gridNova);
      }}
      style={{
        width: 20,
        height: 20,
        backgroundColor: grid[i][j]===1 ? '#F68E5F' : undefined,
        border: '1px solid #595959',
      }} />
  );
}

export default Celula;