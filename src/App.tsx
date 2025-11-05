import React, { ReactElement } from 'react';
import logo from './logo.svg';
import {FC, useState} from 'react';

const numeroColunas = 35;
const numeroLinhas = 25;

const App : FC = (): ReactElement => {
  const [grid, setGrid] = useState<number[][]>([]);
  return (
    <>
    </>
  )
}

export default App;

const RandomTiles = (): number[][] => {
  const linhas: number[][] = [];
  for(let i = 0; i < numeroLinhas;i++){
    linhas.push(Array.from(Array(numeroColunas), () => Math.random() > 0.7 ? 1 : 0));
  }
  return linhas;
}