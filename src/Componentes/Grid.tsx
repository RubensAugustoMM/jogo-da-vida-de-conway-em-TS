import Celula from './Celula'
import React from 'react'

type GridProps = {
    numeroColunas : number,
    grid : number[][],
    setGrid : React.Dispatch<React.SetStateAction<number[][]>>,
};

const Grid = ({numeroColunas,grid,setGrid} : GridProps) => {
    if(!grid || !Array.isArray(grid))
      return (<div>Grid carregando...</div>);
    return(
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numeroColunas},20px)`,
          width: 'fit-content',
          margin: '0 auto',
        }}>
        {grid.map((linha: number[], i: number) =>
          linha.map((valorCelula: number, j: number) => (
            <Celula
              key={`${j},${i}`}
              j={j}
              i={i}
              grid={grid}
              setGrid={setGrid}
            />
          ))
        )}
      </div>
    );
}

export default Grid;