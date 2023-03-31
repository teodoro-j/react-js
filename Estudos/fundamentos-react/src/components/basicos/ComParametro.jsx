import React from 'react';

export default function Comparametro(props) {
    const nome = 'João';
    const status = props.login == true ? 'Logado' : "Deslogado"
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p><strong>{ props.subtitulo } { nome }</strong> {status} </p> 
        </div>
    )
}