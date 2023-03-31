import React from 'react';
import Card from './components/layout/Card';
import Primeiro from './components/basicos/Primeiro';
import Aleatorio from './components/basicos/Aleatorio';
import ComParametro from './components/basicos/ComParametro';

export default () => {
    return (
        <div id="app">
            <Card titulo="Exemplo de Card"></Card>
            <Aleatorio min={1} max={60}/>
            <Primeiro></Primeiro>
            <ComParametro titulo="Bem Vindo" subtitulo="Sr. " login={true}></ComParametro>
        </div>
    )
}