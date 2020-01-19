const Dev = require('../models/Dev')

module.exports = {
    async index(request, response) {
        console.log(request.query)
        //buscar todos os Devs num raio de 10km
        //filtrar por tecnologias 

        return response.json({ devs: []})

    }
}