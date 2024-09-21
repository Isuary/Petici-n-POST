const express = require('express');
const cors = require('cors'); // Importa CORS

const app = express();
const PORT = process.env.PORT || 3001;

// Habilita CORS para todas las solicitudes
app.use(cors()); // Habilita CORS

// Middleware para permitir el uso de JSON
app.use(express.json());

// Datos de ejemplo para los cursos
const cursos = [
    { id: 1, nombre: 'Curso 1', creditos: 3, descripcion: 'Descripción del curso 1' },
    { id: 2, nombre: 'Curso 2', creditos: 4, descripcion: 'Descripción del curso 2' },
];

// Ruta GET para obtener la lista de cursos
app.get('/cursos', (req, res) => {
    res.json(cursos);  // Devuelve la lista de cursos en formato JSON
});

// Ruta POST para agregar un nuevo curso
app.post('/cursos', (req, res) => {
    const nuevoCurso = req.body;
    cursos.push({ ...nuevoCurso, id: cursos.length + 1 });
    res.status(201).json({ mensaje: 'Curso creado con éxito', curso: nuevoCurso });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
