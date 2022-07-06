import winston from 'winston';
import TransportStream from 'winston-transport';

class MyTransport extends TransportStream {
    constructor(option) {
        super(option);
    }

    log(info, next) {
        console.log(
            `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
        );
        next();
    }
}

const logger = winston.createLogger({
    level: 'info',
    transports: [new MyTransport({})],
});

logger.error('error');
logger.warn('warn');
logger.info('info');
logger.http('http');
logger.verbose('verbose');
logger.debug('debug');
logger.silly('silly');
