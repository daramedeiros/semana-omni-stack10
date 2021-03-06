const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')


const app = express();

mongoose.connect('mongodb+srv://oministack:justlove23@cluster0-xhlss.mongodb.net/week10?retryWrites=true&w=majority', { 
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE 

//Tipos de parâmetros:

//Query Params:request.query(FIltros, ordenação,paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body(Dados para criação ou alteração de um registro)


// MongoDB(Não-relacional)


app.listen(8080);