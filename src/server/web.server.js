import logger from './logger';

const express = require('express');
const path = require('path');

const config = require(path.join(path.resolve(), 'config'));


export default class WebServer {
    constructor() {
        this.app = express();
        this.app.use(express.static('dist/public'));
    }

    start() {
        return new Promise((resolve, reject) => {
            const PORT = config.server.port;

            try {
                this.server = this.app.listen(PORT, () => {
                    logger.info(`running on port ${PORT}`);
                    resolve();
                });
            } catch (e) {
                logger.error(e);
                reject(e);
            }
        });
    }

    stop() {
        return new Promise((resolve, reject) => {
            try {
                this.server.close(() => {
                    resolve();
                });
            } catch (e) {
                logger.error(e.message);
                reject(e);
            }
        });
    }
}
