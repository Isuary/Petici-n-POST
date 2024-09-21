import React, { useState, useEffect } from 'react';
import api from '../services/api'; // Asegúrate de importar correctamente la configuración de tu API

const ConsultaAlumnos = () => {
    const [cursos, setCursos] = useState([]);
    const [mensajeError, setMensajeError] = useState('');

    useEffect(() => {
        // Función para obtener los cursos desde la API
        const obtenerCursos = async () => {
            try {
                const response = await api.get('/cursos'); // Solicitud GET a /cursos
                setCursos(response.data); // Actualiza el estado con los datos recibidos
            } catch (error) {
                console.error('Error al obtener los cursos:', error);
                setMensajeError('Error al obtener los cursos. Inténtalo de nuevo más tarde.');
            }
        };

        obtenerCursos(); // Llama a la función para obtener los datos cuando se carga el componente
    }, []);

    return (
        <div>
            <h2>Consulta de Cursos</h2>
            {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
            <ul>
                {cursos.map(curso => (
                    <li key={curso.id}>
                        {curso.nombre} - {curso.creditos} créditos - {curso.descripcion}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultaAlumnos;
