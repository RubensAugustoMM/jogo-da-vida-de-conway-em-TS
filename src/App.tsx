import {FC, useState} from 'react';
import Grid from './Componentes/Grid'

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
      <Grid
        numeroColunas={numeroColunas}
        grid={grid}
        setGrid={setGrid}
        />
      <button onClick={() => {setRodando(!rodando)}}>
        {rodando ? 'Parar' : 'Iniciar'}
      </button>
    </div>
  );
}

const CelulasAleatorias = (): number[][] => {
  const linhas: number[][] = [];
  for(let i = 0; i < numeroLinhas;i++){
    linhas.push(Array.from(Array(numeroColunas), () => Math.random() > 0.7 ? 1 : 0));
  }
  return linhas;
}

export default App;