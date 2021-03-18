require('dotenv').config();

const Server = require('./models/server');

// const express = require('express');
// const app = express();
 
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
 
// app.listen( process.env.PORT, () => {
//     console.log('Servidor corriendo en puerto:', process.env.PORT );
// });

// Construimos el express server por m edio de clases
const server = new Server();

// Arrancamos el server
server.listen();