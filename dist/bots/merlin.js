"use strict";
// Run this and then telnet to localhost:2000 and chat with the bot
let superscript = require('superscript');
let plugins = require('../../plugins/plugin.js');
let sockjs = require('sockjs');
const Merlin = function (server) {
    const sockjs_options = {
        sockjs_url: "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js"
    };
    // This assumes the topics have been compiled to data.json first
    // See superscript/src/bin/parse for information on how to do that.
    // Main entry point
    const superscript_options = {
        factSystem: {
            clean: false,
        },
        importFile: './src/data.json',
    };
    superscript_options.scope = {
        customFunction: (a, b) => {
        }
    };
    let run = (server, err, bot) => {
        let socket = sockjs.createServer(sockjs_options);
        socket.on('connection', conn => connectionEvent(conn, bot));
        // Start the TCP server.
        socket.installHandlers(server, { prefix: '/bot' }); // ws://{hostname}/bot/websocket
        server.listen(3000, () => {
            console.log('listening on *:3000');
        });
    };
    let connectionEvent = (conn, bot) => {
        conn.name = `${conn.remoteAddress}:${conn.remotePort}`;
        console.log(`User '${conn.name}' has connected.\n`);
        // Send a welcome message.
        conn.write('Hello, I am Dr.Merlin. Welcome to the medical control system.\n I am going to help you with your medical problems.\nHave you been here before?');
        conn.on('data', (data) => {
            dataEvent(conn, bot, data);
        });
        // Handle disconnects.
        conn.on('close', () => {
            closeEvent(conn, bot);
        });
    };
    let dataEvent = (conn, bot, data) => {
        // Handle incoming messages.
        let message = `${data}`;
        // Use the remoteIP as the name since the PORT changes on ever new connection.
        bot.reply(conn.remoteAddress, message.trim(), (err, reply) => {
            // Find the right conn
            conn.write(reply.string);
        });
    };
    let closeEvent = (conn, bot) => {
        console.log(`User '${conn.name}' has disconnected.\n`);
    };
    let init = () => {
        superscript.default.setup(superscript_options, (err, bot) => run(server, err, bot));
    };
    init();
};
module.exports = Merlin;
//# sourceMappingURL=merlin.js.map