const express = require ( 'express' );
const devController = require('./controllers/DevController');
const likeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router()


routes.get('/devs', devController.index);


routes.post('/devs', devController.store);
routes.post('/devs/:devID/likes', likeController.store);
routes.post('/devs/:devID/dislikes', DislikeController.store);

module.exports = routes;