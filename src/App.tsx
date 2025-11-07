import {useState, useCallback, useRef } from 'react';
import Grid from './Componentes/Grid';

const numeroColunas = 35;
const numeroLinhas = 25;

const posicoesVisinhas = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1]
];  

const App = () => {
  const [grid, setGrid] = useState<number[][]>(CelulasAleatorias);
  const [rodando, setRodando] = useState<boolean>(false);
  const intervaloRef = useRef<any>(null);
  const rodandoRef = useRef(rodando);
  rodandoRef.current = rodando;

  const rodarSimulacao = useCallback((grid : number[][]) => {
    if (!rodandoRef.current)
      return;
    
    let copiaGrade = JSON.parse(JSON.stringify(grid));
    for (let i = 0;i < numeroLinhas;i++){
      for(let j = 0;j < numeroColunas;j++){
        let vizinhos = 0;
        
        posicoesVisinhas.forEach(([x, y]) => {
          const xVizinho = j + x; 
          const yVizinho = i + y;
          if (xVizinho >= 0 && xVizinho < numeroColunas && yVizinho >= 0 && yVizinho < numeroLinhas)
            vizinhos += grid[yVizinho][xVizinho];
        });
        if ( vizinhos < 2 || vizinhos > 3)
          copiaGrade[i][j] = 0;
        else if (grid[i][j] === 0 && vizinhos === 3)
          copiaGrade[i][j] = 1;
      }
    }
    return copiaGrade;
  }, []);
 

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
      <button onClick={() => {
        setRodando(!rodando);
        if (!rodando) {
          rodandoRef.current = true;
          intervaloRef.current = setInterval(() => {
            setGrid(g => rodarSimulacao(g));
          }, 100);
        } else {
          if (intervaloRef.current){
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
          }
        }
      }}>
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