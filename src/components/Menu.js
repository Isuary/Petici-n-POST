// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/consulta-alumnos">Consulta de Alumnos</Link></li>
        <li><Link to="/creacion-cursos">Creación de Cursos</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
