import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            filename: 'application.log',
        }),
        new winston.transports.File({
            level: 'error', // only write error log
            filename: 'application-error.log',
        }),
    ],
});

logger.error('this is logger error');
logger.warn('this is logger warn');
logger.info('this is logger info');
