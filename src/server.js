const express = require ( 'express' );
const routes = require ( './routes' );
const mongoose = require( 'mongoose');

mongoose.connect('mongodb+srv://xxxxxxx:xxxxxxxx@cluster0.gm4hl.mongodb.net/xxxxxxxxx?retryWrites=true&w=majority',  {
    useNewUrlParser: true, useUnifiedTopology: true
});

const server = express();

server.use(express.json());

server.use(routes);

server.listen(3333);
