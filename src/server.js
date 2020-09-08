const express = require ( 'express' );
const routes = require ( './routes' );
const mongoose = require( 'mongoose');
const cors = require( 'cors');



const server = express();

server.use(express.json());

server.use(cors());

server.use(routes);

server.listen(3333);
