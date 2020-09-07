const express = require ( 'express' );
const devController = require('./controllers/DevController');

const routes = express.Router()


routes.get('/',  (req, res) => {
    return res.json( {message: ` hello ${req.query.name || "word"}`  });
});


routes.post('/devs', devController.store);

module.exports = routes;