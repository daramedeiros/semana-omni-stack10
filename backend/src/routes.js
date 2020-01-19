const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchControllers = require('./controllers/SearchControllers')

const routes = Router();

//listar Devs
routes.get('/devs', DevController.index );

//cadastrar um Dev
routes.post('/devs', DevController.store );

// buscar Dev
routes.get('/search'), SearchControllers.index;

module.exports = routes