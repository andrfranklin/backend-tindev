const express = require ( 'express' );
const routes = require ( './routes' );
const mongoose = require( 'mongoose');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.gm4hl.mongodb.net/omnistack8?retryWrites=true&w=majority',  {
    useNewUrlParser: true, useUnifiedTopology: true
});

const server = express();

server.use(express.json());

server.use(routes);

server.listen(3333);