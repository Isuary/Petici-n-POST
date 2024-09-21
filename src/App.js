// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ConsultaAlumnos from './components/ConsultaAlumnos';
import CreacionCursos from './components/CreacionCursos';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<h1>Bienvenido a la Gestión de Cursos</h1>} />
          <Route path="/consulta-alumnos" element={<ConsultaAlumnos />} />
          <Route path="/creacion-cursos" element={<CreacionCursos />} />
          <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

