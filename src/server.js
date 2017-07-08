#!/usr/bin/env

"use strict";

// Module dependencies
let app = require('./app');
let http = require('http');

const port = 3000;

// Store a port number in Express
app.set('port', port);

// Create HTTP server
let server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


// For "error" event
function onError(error) {
    if (error.syscall !== 'listen')
        throw error;

    let bind = (typeof port === 'string' ? 'Pipe ' : 'Port ') + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// For "listening" event
function onListening() {

    let addr = server.address();
    let bind = typeof port === 'string' ? 'Pipe ' + addr : 'Port ' + addr.port;
    console.log('Listening on ' + bind);
}