import * as React from 'react';
import { Link } from "react-router-dom";
import './app.css';

export default function App() {
  return (
    <div>
      <nav>
        <p className='bold'>Biblioteca</p>
        <ul>
          <li><Link to="/listas">Listas</Link></li>
          <li><Link to="/clientenovo">Cadastrar Cliente</Link></li>
          <li><Link to="/livronovo">Cadastrar Livro</Link></li>
        </ul>
      </nav>
    </div>
  );
}
