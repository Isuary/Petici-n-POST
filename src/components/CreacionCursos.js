import React, { useState } from 'react';
import api from '../services/api';

const CreacionCursos = () => {
    const [nombre, setNombre] = useState('');
    const [creditos, setCreditos] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [cargando, setCargando] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validación simple
        if (nombre === '' || creditos <= 0 || descripcion === '') {
            setMensaje('Por favor, completa todos los campos correctamente.');
            return;
        }

        setCargando(true);
        setMensaje('');

        try {
            await api.post('/cursos', {
                nombre,
                creditos: parseInt(creditos, 10),
                descripcion
            });
            setMensaje('Curso creado con éxito');
            // Limpiar los campos
            setNombre('');
            setCreditos('');
            setDescripcion('');
        } catch (error) {
            console.error('Error al crear el curso:', error);
            setMensaje('Error al crear el curso. Inténtalo de nuevo.');
        } finally {
            setCargando(false);
        }
    };

    return (
        <div>
            <h2>Creación de Cursos</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del Curso:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Créditos:</label>
                    <input
                        type="number"
                        value={creditos}
                        onChange={(e) => setCreditos(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit" disabled={cargando}>
                    {cargando ? 'Creando...' : 'Crear Curso'}
                </button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
};

export default CreacionCursos;
