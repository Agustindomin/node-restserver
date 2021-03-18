const express = require('express');
const cors = require('cors');


class Server {

    // Constructor, donde definimos las propiedades de la clase
    constructor() {
        // Propiedades
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de la aplicación
        this.routes();
    }

    // Middlewares
    middlewares() {

        // CORS
        this.app.use(cors());

        // Lectura y parseo del Body
        this.app.use( express.json() );

        // Directorio publico: Middleware para contenido estático
        this.app.use( express.static('public') );

    }
    // Método Rutas
    routes() {

        // Usamos las rutas definidas en routes/user.js
        this.app.use( this.usuariosPath, require('../routes/usuarios'));

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto:', this.port);
        });
    }




}


module.exports = Server;