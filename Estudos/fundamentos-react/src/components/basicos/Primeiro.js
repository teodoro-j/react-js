import React from 'react';
import PrimeiroButton from './PrimeiroButton'

export default function Primeiro() {
    const txt = 'Ola Mundo!'
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ txt }</p>
            <PrimeiroButton/>
        </div>
    )
}