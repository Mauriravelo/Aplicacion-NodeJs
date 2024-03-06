// Importamos el módulo express
import express from 'express';

// Importamos las funciones dirname y join del módulo path
import { dirname, join } from 'path';

// Importamos la función fileURLToPath del módulo url
import { fileURLToPath } from 'url';

import indexRoutes from './routes/index.js';

// Creamos una instancia de la aplicación Express
const app = express();

// Obtenemos el directorio actual utilizando la función dirname y la función fileURLToPath
const __dirname = dirname(fileURLToPath(import.meta.url));

// Imprimimos en consola la ruta al directorio de vistas
console.log(join(__dirname, 'views'));

// Configuramos el directorio de vistas utilizando la función set()
app.set('views', join(__dirname, 'views'));

// Configuramos el motor de plantillas EJS utilizando la función set()
app.set('view engine', 'ejs');

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))



// Escuchamos en el puerto 3000
app.listen(3000);

// Imprimimos en consola un mensaje indicando que el servidor está escuchando en el puerto 3000
console.log('Server is listening on port', 3000);

