const express = require ( 'express' );
const routes = require ( './routes' );
const mongoose = require( 'mongoose');
const cors = require( 'cors');



const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUser = {};

io.on('connection', socket => {
    const { user } = socket.handshake.query;

    connectedUser[user] = socket.id;
});


app.use((req, res, next) => {
    req.io = io;
    req.connectedUser = connectedUser;

    return next();
});


app.use(express.json());

app.use(cors());

app.use(routes);

server.listen(3333);
