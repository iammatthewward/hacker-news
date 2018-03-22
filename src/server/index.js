require('dotenv').config();
const http = require('http');
const process = require('process');
const winston = require('winston');

const app = require('./app');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()]
});

function gracefullyShutdown(server) {
    logger.log({
        level: 'info',
        message: 'PORT is required - please supply a PORT ENV'
    });
    server.close();
    process.exit(1);
}


function start() {
    const server = http.createServer(app.callback());

    return process.env.PORT
        ? server.listen(process.env.PORT)
        : gracefullyShutdown(server);
}

start();
