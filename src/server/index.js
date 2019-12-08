import logger from './logger';
import WebServer from './web.server';


const webServer = new WebServer();
webServer.start()
    .then(() => {
        logger.info('Web server started');
    })
    .catch(err => {
        logger.error(err);
        logger.info('Failed to start web server');
    });
