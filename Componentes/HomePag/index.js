import React, { useState } from 'react';
import './homepag.css';

export default function HomePag() {

  const [ NumAleat, setNumAleat ] = useState(0);

  function gerarNum() {

    const NovoNum = Math.floor(Math.random() * (100-1) + 1);
//  !!! 'floor' = Arredondar e retornar inteiro !!!
    setNumAleat(NovoNum);

  }

  return (

    <div className="container">

        <h1>Número Aleatório</h1>

        <h1 className='numero'>{NumAleat}</h1>

        <div className='area-botao'>

            <label>
                Gerador de Número Aleatório:
            </label>

            <button onClick={ gerarNum }>Gerar</button>

        </div>

    </div>

  );
}

