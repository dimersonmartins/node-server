const express = require('express');
const routes = express.Router();
const LikeController = require('./controllers/LikeController');

const DevController = require('./controllers/DevController');

routes.get('/', (request, response) => {
    return response.json({name: "teste"});
});

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store)

module.exports = routes;