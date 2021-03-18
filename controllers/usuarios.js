const { response, request} = require('express');

const usuariosGet = (req, res = response) => {

    // Recuperamos parametros del query, desectructuramos sólo los que queremos
    const { q, nombre = 'No name', apiKey, page = 1, limit = 10} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apiKey,
        page,
        limit
    });
}

const usuariosPost = (req = request, res = response) => { 

    // Recuperamos campos del body
    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req = request, res = response) => {

    // Recuperamos el parámetro por Url
    const { id }= req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

// Exportamios las funciones
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}