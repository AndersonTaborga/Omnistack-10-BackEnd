//Microframework
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://glunaburo:hades001@cluster0-vkuia.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
});

//TODA APP
app.use(express.json())
app.use(routes);

app.listen(3333);


//Método HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: req.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou na remoção)
//Body: request.body (Dados para criação ou alteração de um registro)


//MongoDB: Banco de não relacional.

