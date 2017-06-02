"use strict";

// Run this and then telnet to localhost:2000 and chat with the bot
import superscript from 'superscript';
import sockjs from 'sockjs';

export class Merlin {

    private sockjs_options = {
        sockjs_url: "http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js"
    };

    // This assumes the topics have been compiled to data.json first
    // See superscript/src/bin/parse for information on how to do that.

    // Main entry point
    private superscript_options = {
        factSystem: {
            clean: true,
        },
        importFile: './data.json',
    };

    constructor(server) {
        superscript.setup(this.superscript_options, (err, bot) => this.run(server, err, bot));
    }

    private run(server, err, bot) {

        let socket = sockjs.createServer(this.sockjs_options);

        socket.on('connection', conn => this.connectionEvent(conn, bot));

        // Start the TCP server.
        socket.installHandlers(server, {prefix: '/bot'}); // ws://{hostname}/bot/websocket

        server.listen(3000, () => {
            console.log('listening on *:3000');
        });
    };

    private connectionEvent(conn, bot) {
        conn.name = `${conn.remoteAddress}:${conn.remotePort}`;
        console.log(`User '${conn.name}' has connected.\n`);

        // Send a welcome message.
        conn.write('Welcome to the Telnet server!\n');
        conn.write(`Hello ${conn.name}! ` + 'Type /quit to disconnect.\n\n');

        conn.on('data', (data) => {
            this.dataEvent(conn, bot, data);
        });

        // Handle disconnects.
        conn.on('close', () => {
            this.closeEvent(conn, bot);
        });
    };

    private dataEvent (conn, bot, data) {
        // Handle incoming messages.
        let message = `${data}`;

        if (message === '/quit') {
            conn.end('Good-bye!\n');
            return;
        }

        // Use the remoteIP as the name since the PORT changes on ever new connection.
        bot.reply(conn.remoteAddress, message.trim(), (err, reply) => {
            // Find the right conn
            conn.write(reply.string);
        });
    };

    private closeEvent(conn, bot) {
        console.log(`User '${conn.name}' has disconnected.\n`);
    };
}

module.exports = Merlin;

