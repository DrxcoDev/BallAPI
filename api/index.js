import express from 'express';
import cors from 'cors'; // Importar CORS
import clubes from './clubes.js'; // Asegurar extensi�n .js si usas ES Modules

const app = express();
const router = express.Router();

app.use(cors()); // Habilitar CORS para todas las solicitudes
app.use(express.json()); // Permitir recibir JSON en POST

const port = 8080;

// Ruta para obtener informaci�n de un equipo por nombre
router.get('/:nombre', function (req, res) {
    const nombreEquipo = req.params.nombre.toLowerCase();

    // Buscar el equipo en el objeto `clubes`
    const equipo = clubes[nombreEquipo];

    if (equipo) {
        res.json(equipo); // Devolver todos los datos del equipo encontrado
    } else {
        res.status(404).json({ mensaje: 'Equipo no encontrado' });
    }
});

// Ruta para obtener todos los equipos
router.get('/', function (req, res) {
    res.json(Object.values(clubes));
});

// Montar el router en `/equipos`
app.use('/equipos', router);

// Ruta POST
app.post('/', function (req, res) {
    res.json({ mensaje: 'M�todo POST' });
});

// Ruta DELETE
app.delete('/', function (req, res) {
    res.json({ mensaje: 'M�todo DELETE' });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`API escuchando en el puerto ${port}`);
});
