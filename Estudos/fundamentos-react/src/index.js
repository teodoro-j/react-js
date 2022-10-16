import './index.css'; 
import ReactDOM from 'react-dom';
import React from 'react';

import Primeiro from './components/basics/Primeiro';

const texto = <span>Hello World</span>
const el = document.getElementById('root');
ReactDOM.render(
    <div>
        <b> Olá React!! </b>
        
        <br></br>

        { texto }

        <br></br>

        <Primeiro></Primeiro>
    </div>, 
    el);