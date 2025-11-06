import {FC, useState} from 'react';

const numeroColunas = 35;
const numeroLinhas = 25;

const App = () => {
  const [grid, setGrid] = useState<number[][]>(CelulasAleatorias);
  const [rodando, setRodando] = useState<boolean>(false);

  return (
    <div
      style={{
        textAlign:'center'
      }}
    >
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
      <button onClick={() => {setRodando(!rodando)}}>
        {rodando ? 'Parar' : 'Iniciar'}
      </button>
    </div>
  );
}

export default App;

type CelulaProp = {
  j : number,
  i : number,
  grid : number[][],
  setGrid : React.Dispatch<React.SetStateAction<number[][]>>,
}

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

const CelulasAleatorias = (): number[][] => {
  const linhas: number[][] = [];
  for(let i = 0; i < numeroLinhas;i++){
    linhas.push(Array.from(Array(numeroColunas), () => Math.random() > 0.7 ? 1 : 0));
  }
  return linhas;
}